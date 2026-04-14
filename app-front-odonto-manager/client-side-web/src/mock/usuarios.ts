type UserRole = "strategic-manager" | "operational-assistant" | "operational-dentist";

type Usuario = {
  id: number;
  cpf: string;
  email: string;
  senha: string;
  nome: string;
  telefone: string;
  dt_cadastro: string;
  dt_modificacao: string;
  role: UserRole;
  cro?: string;
};

const usuarios: Usuario[] = [
  {
    id: 1,
    cpf: "123.456.789-00",
    email: "arthur.mury@outlook.com",
    senha: "hashed_password",
    nome: "Arthur Azevedo Mury",
    telefone: "(51) 99999-0001",
    dt_cadastro: "2025-01-10T08:00:00",
    dt_modificacao: "2026-03-15T10:30:00",
    role: "strategic-manager",
  },
  {
    id: 2,
    cpf: "234.567.890-11",
    email: "carla.souza@odonto.com",
    senha: "hashed_password",
    nome: "Carla Souza",
    telefone: "(51) 99999-0002",
    dt_cadastro: "2025-02-20T09:00:00",
    dt_modificacao: "2026-02-10T14:00:00",
    role: "operational-dentist",
    cro: "RS-12345",
  },
  {
    id: 3,
    cpf: "345.678.901-22",
    email: "lucas.pereira@odonto.com",
    senha: "hashed_password",
    nome: "Lucas Pereira",
    telefone: "(51) 99999-0003",
    dt_cadastro: "2025-03-05T10:00:00",
    dt_modificacao: "2026-01-20T16:45:00",
    role: "operational-dentist",
    cro: "RS-67890",
  },
  {
    id: 4,
    cpf: "456.789.012-33",
    email: "maria.silva@odonto.com",
    senha: "hashed_password",
    nome: "Maria Silva",
    telefone: "(51) 99999-0004",
    dt_cadastro: "2025-04-12T08:30:00",
    dt_modificacao: "2026-04-01T09:15:00",
    role: "operational-assistant",
  },
  {
    id: 5,
    cpf: "567.890.123-44",
    email: "joao.lima@odonto.com",
    senha: "hashed_password",
    nome: "João Lima",
    telefone: "(51) 99999-0005",
    dt_cadastro: "2025-06-01T11:00:00",
    dt_modificacao: "2026-03-28T13:00:00",
    role: "operational-assistant",
  },
];

const usuarioLogado = usuarios[0];

export { usuarios, usuarioLogado };
export type { Usuario, UserRole };
