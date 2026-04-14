type StatusAgendamento = "Agendado" | "Confirmado" | "Cancelado" | "Concluído";
type TipoProcedimento = "Limpeza" | "Extração" | "Restauração" | "Canal" | "Ortodontia" | "Avaliação";

type Agendamento = {
  id: number;
  dt_atendimento: string;
  status: StatusAgendamento;
  tipo_procedimento: TipoProcedimento;
  observacao: string;
  paciente_cpf: string;
  dentista_nome: string;
};

const agendamentos: Agendamento[] = [
  {
    id: 1,
    dt_atendimento: "2026-04-14T09:00:00",
    status: "Confirmado",
    tipo_procedimento: "Limpeza",
    observacao: "Limpeza semestral de rotina",
    paciente_cpf: "111.222.333-44",
    dentista_nome: "Carla Souza",
  },
  {
    id: 2,
    dt_atendimento: "2026-04-14T10:30:00",
    status: "Agendado",
    tipo_procedimento: "Restauração",
    observacao: "Restauração no dente 36",
    paciente_cpf: "222.333.444-55",
    dentista_nome: "Carla Souza",
  },
  {
    id: 3,
    dt_atendimento: "2026-04-14T14:00:00",
    status: "Confirmado",
    tipo_procedimento: "Canal",
    observacao: "Retratamento de canal no dente 14",
    paciente_cpf: "333.444.555-66",
    dentista_nome: "Lucas Pereira",
  },
  {
    id: 4,
    dt_atendimento: "2026-04-15T08:30:00",
    status: "Agendado",
    tipo_procedimento: "Avaliação",
    observacao: "Primeira consulta",
    paciente_cpf: "444.555.666-77",
    dentista_nome: "Lucas Pereira",
  },
  {
    id: 5,
    dt_atendimento: "2026-04-15T11:00:00",
    status: "Cancelado",
    tipo_procedimento: "Extração",
    observacao: "Paciente cancelou por motivo pessoal",
    paciente_cpf: "555.666.777-88",
    dentista_nome: "Carla Souza",
  },
  {
    id: 6,
    dt_atendimento: "2026-04-10T09:00:00",
    status: "Concluído",
    tipo_procedimento: "Ortodontia",
    observacao: "Manutenção do aparelho",
    paciente_cpf: "222.333.444-55",
    dentista_nome: "Lucas Pereira",
  },
];

export { agendamentos };
export type { Agendamento, StatusAgendamento, TipoProcedimento };
