type Anamnese = {
  id: number;
  numero: number;
  dt_cadastro: string;
  dt_modificacao: string;
  observacao: string;
  paciente_id: number;
  condicoes_saude_ids: number[];
};

const anamneses: Anamnese[] = [
  {
    id: 1,
    numero: 1,
    dt_cadastro: "2025-08-10T09:00:00",
    dt_modificacao: "2026-02-15T10:30:00",
    observacao: "Sem histórico cirúrgico. Última reação alérgica relatada há 3 anos.",
    paciente_id: 1,
    condicoes_saude_ids: [1],
  },
  {
    id: 2,
    numero: 2,
    dt_cadastro: "2025-09-05T14:00:00",
    dt_modificacao: "2025-09-05T14:00:00",
    observacao: "Histórico de ortodontia na infância. Nenhuma condição de saúde relevante informada.",
    paciente_id: 2,
    condicoes_saude_ids: [],
  },
  {
    id: 3,
    numero: 3,
    dt_cadastro: "2025-07-20T08:30:00",
    dt_modificacao: "2026-03-10T11:00:00",
    observacao: "Requer aferição de pressão arterial antes de procedimentos invasivos. Glicemia capilar em jejum: 110 mg/dL na última consulta.",
    paciente_id: 3,
    condicoes_saude_ids: [2, 3, 4, 5],
  },
  {
    id: 4,
    numero: 4,
    dt_cadastro: "2025-10-15T10:00:00",
    dt_modificacao: "2025-10-15T10:00:00",
    observacao: "Primeira consulta odontológica. Paciente apresenta boa saúde geral.",
    paciente_id: 4,
    condicoes_saude_ids: [],
  },
  {
    id: 5,
    numero: 5,
    dt_cadastro: "2025-06-01T11:30:00",
    dt_modificacao: "2026-01-20T09:00:00",
    observacao: "Desgaste dentário visível nos molares. Indicada placa miorrelaxante. Aferição de PA obrigatória antes de procedimentos.",
    paciente_id: 5,
    condicoes_saude_ids: [6, 7],
  },
];

export { anamneses };
export type { Anamnese };
