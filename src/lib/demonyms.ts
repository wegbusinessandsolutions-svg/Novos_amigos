export const getDemonym = (state?: string | null, gender?: string | null): string => {
  if (!state || typeof state !== 'string') return '';
  const isFemale = (gender || 'masculino').toLowerCase().trim() === 'feminino';
  
  const map: Record<string, { m: string, f: string }> = {
    'Acre': { m: 'Acriano', f: 'Acriana' },
    'Alagoas': { m: 'Alagoano', f: 'Alagoana' },
    'Amapá': { m: 'Amapaense', f: 'Amapaense' },
    'Amazonas': { m: 'Amazonense', f: 'Amazonense' },
    'Bahia': { m: 'Baiano', f: 'Baiana' },
    'Ceará': { m: 'Cearense', f: 'Cearense' },
    'Distrito Federal': { m: 'Brasiliense', f: 'Brasiliense' },
    'Espírito Santo': { m: 'Capixaba', f: 'Capixaba' },
    'Goiás': { m: 'Goiano', f: 'Goiana' },
    'Maranhão': { m: 'Maranhense', f: 'Maranhense' },
    'Mato Grosso': { m: 'Mato-Grossense', f: 'Mato-Grossense' },
    'Mato Grosso do Sul': { m: 'Sul-Mato-Grossense', f: 'Sul-Mato-Grossense' },
    'Minas Gerais': { m: 'Mineiro', f: 'Mineira' },
    'Pará': { m: 'Paraense', f: 'Paraense' },
    'Paraíba': { m: 'Paraibano', f: 'Paraibana' },
    'Paraná': { m: 'Paranaense', f: 'Paranaense' },
    'Pernambuco': { m: 'Pernambucano', f: 'Pernambucana' },
    'Piauí': { m: 'Piauiense', f: 'Piauiense' },
    'Rio de Janeiro': { m: 'Fluminense', f: 'Fluminense' },
    'Rio Grande do Norte': { m: 'Potiguar', f: 'Potiguar' },
    'Rio Grande do Sul': { m: 'Gaúcho', f: 'Gaúcha' },
    'Rondônia': { m: 'Rondoniense', f: 'Rondoniense' },
    'Roraima': { m: 'Roraimense', f: 'Roraimense' },
    'Santa Catarina': { m: 'Catarinense', f: 'Catarinense' },
    'São Paulo': { m: 'Paulista', f: 'Paulista' },
    'Sergipe': { m: 'Sergipano', f: 'Sergipana' },
    'Tocantins': { m: 'Tocantinense', f: 'Tocantinense' }
  };

  const cleanState = state.trim();
  const entry = map[cleanState];
  if (!entry) return cleanState;

  return isFemale ? entry.f : entry.m;
};
