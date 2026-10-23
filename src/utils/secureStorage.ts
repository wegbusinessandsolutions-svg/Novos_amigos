/**
 * Secure Storage Utility
 * Encrypts and decrypts sensitive client-side credentials (such as face-login device tokens)
 * using the Web Crypto API (AES-GCM 256-bit) to prevent plaintext password exposure in LocalStorage.
 */

const SALT = new Uint8Array([78, 101, 119, 70, 114, 105, 101, 110, 100, 115, 66, 114, 65, 101, 115, 83]);

async function getDeviceKey(): Promise<CryptoKey | null> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    return null;
  }
  try {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'na';
    const origin = typeof window !== 'undefined' ? window.location.origin : 'app';
    const rawKeyMaterial = `na_sec_${userAgent}_${origin}`;
    
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      enc.encode(rawKeyMaterial),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: SALT,
        iterations: 10000,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  } catch (err) {
    console.warn("Could not generate device crypto key:", err);
    return null;
  }
}

function bufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function setSecureItem(key: string, data: any): Promise<void> {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const jsonStr = typeof data === 'string' ? data : JSON.stringify(data);

  if (!window.crypto || !window.crypto.subtle) {
    // Fallback: base64 obfuscation if WebCrypto unavailable in test runner
    window.localStorage.setItem(key, `b64:${btoa(unescape(encodeURIComponent(jsonStr)))}`);
    return;
  }

  try {
    const cryptoKey = await getDeviceKey();
    if (!cryptoKey) {
      window.localStorage.setItem(key, `b64:${btoa(unescape(encodeURIComponent(jsonStr)))}`);
      return;
    }
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedData = new TextEncoder().encode(jsonStr);

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      encodedData
    );

    const payload = `enc:v1:${bufferToBase64(iv.buffer)}:${bufferToBase64(ciphertext)}`;
    window.localStorage.setItem(key, payload);
  } catch (err) {
    console.warn("Secure storage encryption fallback:", err);
    window.localStorage.setItem(key, `b64:${btoa(unescape(encodeURIComponent(jsonStr)))}`);
  }
}

export async function getSecureItem<T = any>(key: string): Promise<T | null> {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;

  // Handle encrypted format
  if (raw.startsWith('enc:v1:')) {
    const parts = raw.split(':');
    if (parts.length === 4 && window.crypto && window.crypto.subtle) {
      try {
        const iv = new Uint8Array(base64ToBuffer(parts[2]));
        const ciphertext = base64ToBuffer(parts[3]);
        const cryptoKey = await getDeviceKey();
        if (!cryptoKey) return null;

        const decrypted = await window.crypto.subtle.decrypt(
          { name: 'AES-GCM', iv },
          cryptoKey,
          ciphertext
        );

        const text = new TextDecoder().decode(decrypted);
        try {
          return JSON.parse(text) as T;
        } catch {
          return text as unknown as T;
        }
      } catch (err) {
        console.warn("Could not decrypt secure storage item:", err);
        return null;
      }
    }
  }

  // Handle b64 obfuscated fallback
  if (raw.startsWith('b64:')) {
    try {
      const decoded = decodeURIComponent(escape(atob(raw.substring(4))));
      try {
        return JSON.parse(decoded) as T;
      } catch {
        return decoded as unknown as T;
      }
    } catch {
      return null;
    }
  }

  // Backward compatibility: If plain text JSON from old version was found, migrate it
  try {
    const parsed = JSON.parse(raw);
    // Re-encrypt it silently
    setSecureItem(key, parsed).catch(() => {});
    return parsed as T;
  } catch {
    return null;
  }
}

export function removeSecureItem(key: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.removeItem(key);
  }
}
