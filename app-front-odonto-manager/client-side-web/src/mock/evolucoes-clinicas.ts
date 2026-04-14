type EvolucaoClinica = {
  id: number;
  numero: number;
  dt_cadastro: string;
  descricao_procedimento: string;
  paciente_id: number;
  dentista_id: number;
};

const evolucoesClinicas: EvolucaoClinica[] = [
  {
    id: 1,
    numero: 1,
    dt_cadastro: "2025-09-10T09:30:00",
    descricao_procedimento: "Limpeza e profilaxia completa. Remoção de tártaro nos dentes inferiores.",
    paciente_id: 1,
    dentista_id: 2,
  },
  {
    id: 2,
    numero: 2,
    dt_cadastro: "2026-03-14T10:00:00",
    descricao_procedimento: "Restauração em resina composta no dente 36 (face oclusal).",
    paciente_id: 1,
    dentista_id: 2,
  },
  {
    id: 3,
    numero: 1,
    dt_cadastro: "2025-10-20T14:00:00",
    descricao_procedimento: "Manutenção ortodôntica. Troca de elásticos e ajuste de arco.",
    paciente_id: 2,
    dentista_id: 3,
  },
  {
    id: 4,
    numero: 2,
    dt_cadastro: "2026-01-15T14:30:00",
    descricao_procedimento: "Manutenção ortodôntica mensal. Sem intercorrências.",
    paciente_id: 2,
    dentista_id: 3,
  },
  {
    id: 5,
    numero: 1,
    dt_cadastro: "2025-08-05T08:30:00",
    descricao_procedimento: "Avaliação inicial. Radiografia panorâmica solicitada. Cárie no dente 14.",
    paciente_id: 3,
    dentista_id: 2,
  },
  {
    id: 6,
    numero: 2,
    dt_cadastro: "2025-09-02T09:00:00",
    descricao_procedimento: "Tratamento de canal no dente 14. Primeira sessão: instrumentação.",
    paciente_id: 3,
    dentista_id: 2,
  },
  {
    id: 7,
    numero: 3,
    dt_cadastro: "2025-09-16T09:00:00",
    descricao_procedimento: "Tratamento de canal no dente 14. Segunda sessão: obturação.",
    paciente_id: 3,
    dentista_id: 2,
  },
  {
    id: 8,
    numero: 1,
    dt_cadastro: "2026-02-10T16:00:00",
    descricao_procedimento: "Profilaxia e aplicação de flúor. Orientação sobre higiene bucal.",
    paciente_id: 5,
    dentista_id: 3,
  },
];

export { evolucoesClinicas };
export type { EvolucaoClinica };
