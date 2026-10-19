export interface NearbyUser {
  userId: string;
  distance: string;
  profile: any;
  distanceValue?: number;
  idVerified?: boolean;
  status?: 'online' | 'offline' | 'invisivel';
  lastActive?: number;
}

export const MOCK_USERS: NearbyUser[] = [
  {
    userId: 'mock1',
    distance: '45m',
    distanceValue: 45,
    idVerified: true,
    profile: { nome: 'Ana', apelido: 'Aninha', idade: 25, sexo: 'feminino', bio: 'Adoro viajar e conhecer pessoas novas!', estadoNascimento: 'Goiás', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', facialVerified: true, verified: true, hobbies: ['Viagens', 'Fotografia', 'Música'] }
  },
  {
    userId: 'mock2',
    distance: '85m',
    distanceValue: 85,
    profile: { nome: 'Carlos', apelido: 'Carlinhos', idade: 28, sexo: 'masculino', bio: 'Bora tomar uma?', estadoNascimento: 'Mato Grosso', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', hobbies: ['Futebol', 'Churrasco', 'Cerveja'] }
  },
  {
    userId: 'mock3',
    distance: '250m',
    distanceValue: 250,
    idVerified: true,
    profile: { nome: 'Beatriz', apelido: 'Bia', idade: 31, sexo: 'feminino', bio: 'Sempre em busca de boas risadas', estadoNascimento: 'Mato Grosso do Sul', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', facialVerified: true, hobbies: ['Cinema', 'Livros', 'Café'] }
  },
  {
    userId: 'mock4',
    distance: '750m',
    distanceValue: 750,
    profile: { nome: 'Marcos', apelido: 'Marcão', idade: 35, sexo: 'masculino', bio: 'Fã de esportes e natureza', estadoNascimento: 'Distrito Federal', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', facialVerified: true, verified: true, hobbies: ['Esportes', 'Trilhas', 'Natureza'] }
  },
  {
    userId: 'mock5',
    distance: '1,2km',
    distanceValue: 1200,
    profile: { nome: 'Camila', apelido: 'Cami', idade: 38, sexo: 'feminino', bio: 'Fotografia e vinhos', estadoNascimento: 'São Paulo', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', hobbies: ['Fotografia', 'Vinhos', 'Artes'] }
  },
  {
    userId: 'mock6',
    distance: '1,8km',
    distanceValue: 1800,
    idVerified: true,
    profile: { nome: 'Roberto', apelido: 'Beto', idade: 41, sexo: 'masculino', bio: 'Vida leve', estadoNascimento: 'Rio de Janeiro', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', facialVerified: true, hobbies: ['Yoga', 'Meditação', 'Praia'] }
  },
  {
    userId: 'mock7',
    distance: '2,3km',
    distanceValue: 2300,
    profile: { nome: 'Fernanda', apelido: 'Fê', idade: 45, sexo: 'feminino', bio: 'Cinema e pipoca', estadoNascimento: 'Minas Gerais', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', hobbies: ['Cinema', 'Séries', 'Culinária'] }
  },
  {
    userId: 'mock8',
    distance: '2,9km',
    distanceValue: 2900,
    profile: { nome: 'Sérgio', apelido: 'Serginho', idade: 50, sexo: 'masculino', bio: 'Caminhadas pelo parque', estadoNascimento: 'Espírito Santo', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', hobbies: ['Caminhada', 'Parques', 'Leitura'] }
  },
  {
    userId: 'mock9',
    distance: '3,5km',
    distanceValue: 3500,
    profile: { nome: 'Mônica', apelido: 'Môni', idade: 55, sexo: 'feminino', bio: 'Amo animais e a natureza', estadoNascimento: 'Bahia', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', hobbies: ['Animais', 'Plantas', 'Natureza'] }
  },
  {
    userId: 'mock10',
    distance: '4,1km',
    distanceValue: 4100,
    profile: { nome: 'Bruno', apelido: 'Bruninho', idade: 23, sexo: 'masculino', bio: 'Jogador de basquete nas horas vagas', estadoNascimento: 'Pernambuco', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80', hobbies: ['Basquete', 'Games', 'Música'] }
  },
  {
    userId: 'mock11',
    distance: '4,8km',
    distanceValue: 4800,
    profile: { nome: 'Juliana', apelido: 'Ju', idade: 27, sexo: 'feminino', bio: 'Apaixonada por culinária e café', estadoNascimento: 'Ceará', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', facialVerified: true, hobbies: ['Culinária', 'Café', 'Doces'] }
  },
  {
    userId: 'mock12',
    distance: '5,5km',
    distanceValue: 5500,
    profile: { nome: 'Daniel', apelido: 'Dani', idade: 30, sexo: 'masculino', bio: 'Desenvolvedor, músico e viciado em podcast', estadoNascimento: 'Maranhão', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80', hobbies: ['Tecnologia', 'Música', 'Podcasts'] }
  },
  {
    userId: 'mock13',
    distance: '6,2km',
    distanceValue: 6200,
    profile: { nome: 'Amanda', apelido: 'Amy', idade: 29, sexo: 'feminino', bio: 'Pratico yoga e amo o pôr do sol', estadoNascimento: 'Paraíba', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', facialVerified: true, hobbies: ['Yoga', 'Praia', 'Meditação'] }
  },
  {
    userId: 'mock14',
    distance: '7,1km',
    distanceValue: 7100,
    profile: { nome: 'Lucas', apelido: 'Luquinhas', idade: 32, sexo: 'masculino', bio: 'Gosto de acampar e tocar violão', estadoNascimento: 'Rio Grande do Norte', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', hobbies: ['Camping', 'Violão', 'Música'] }
  },
  {
    userId: 'mock15',
    distance: '8,0km',
    distanceValue: 8000,
    profile: { nome: 'Patrícia', apelido: 'Patty', idade: 34, sexo: 'feminino', bio: 'Arquiteta, adoro museus e exposições', estadoNascimento: 'Alagoas', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80', hobbies: ['Artes', 'Design', 'Museus'] }
  },
  {
    userId: 'mock16',
    distance: '9,2km',
    distanceValue: 9200,
    profile: { nome: 'Thiago', apelido: 'Thi', idade: 26, sexo: 'masculino', bio: 'Gosto de correr e ler bons livros', estadoNascimento: 'Piauí', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80', hobbies: ['Corrida', 'Livros', 'Caminhada'] }
  },
  {
    userId: 'mock17',
    distance: '10,5km',
    distanceValue: 10500,
    profile: { nome: 'Gabriela', apelido: 'Gabi', idade: 33, sexo: 'feminino', bio: 'Apaixonada por trilhas e praia', estadoNascimento: 'Sergipe', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80', hobbies: ['Trilhas', 'Praia', 'Surf'] }
  },
  {
    userId: 'mock18',
    distance: '12,5km',
    distanceValue: 12500,
    profile: { nome: 'Felipe', apelido: 'Lipe', idade: 24, sexo: 'masculino', bio: 'Amante de tecnologia e novos gadgets', estadoNascimento: 'Amazonas', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&q=80', hobbies: ['Tecnologia', 'Games', 'Música'] }
  },
  {
    userId: 'mock19',
    distance: '15,0km',
    distanceValue: 15000,
    profile: { nome: 'Letícia', apelido: 'Lelê', idade: 22, sexo: 'feminino', bio: 'Estudante de design, amo ilustrações', estadoNascimento: 'Pará', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80', hobbies: ['Design', 'Ilustração', 'Artes'] }
  },
  {
    userId: 'mock20',
    distance: '18,5km',
    distanceValue: 18500,
    profile: { nome: 'Rodrigo', apelido: 'Rod', idade: 36, sexo: 'masculino', bio: 'Cozinheiro amador e fã de rock clássico', estadoNascimento: 'Tocantins', fotoPrincipalUrl: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?w=400&q=80', hobbies: ['Culinária', 'Rock', 'Música'] }
  }
];

export const POPULAR_INTERESTS = [
  'Viagens', 'Fotografia', 'Música', 'Esportes', 'Vinhos', 'Yoga', 'Cinema', 'Natureza', 'Tecnologia', 'Café', 'Culinária', 'Artes', 'Leitura', 'Games'
];
