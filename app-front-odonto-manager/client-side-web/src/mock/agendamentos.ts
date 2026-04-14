type StatusAgendamento = "agendado" | "confirmado" | "cancelado" | "concluido";
type TipoProcedimento = "limpeza" | "extracao" | "restauracao" | "canal" | "ortodontia" | "avaliacao";

type Agendamento = {
  id: number;
  dt_atendimento: string;
  status: StatusAgendamento;
  tipo_procedimento: TipoProcedimento;
  observacao: string;
  paciente_cpf: string;
  dentista_cpf: string;
};

const agendamentos: Agendamento[] = [
  {
    id: 1,
    dt_atendimento: "2026-04-14T09:00:00",
    status: "confirmado",
    tipo_procedimento: "limpeza",
    observacao: "Limpeza semestral de rotina",
    paciente_cpf: "111.222.333-44",
    dentista_cpf: "234.567.890-11",
  },
  {
    id: 2,
    dt_atendimento: "2026-04-14T10:30:00",
    status: "agendado",
    tipo_procedimento: "restauracao",
    observacao: "Restauração no dente 36",
    paciente_cpf: "222.333.444-55",
    dentista_cpf: "234.567.890-11",
  },
  {
    id: 3,
    dt_atendimento: "2026-04-14T14:00:00",
    status: "confirmado",
    tipo_procedimento: "canal",
    observacao: "Retratamento de canal no dente 14",
    paciente_cpf: "333.444.555-66",
    dentista_cpf: "345.678.901-22",
  },
  {
    id: 4,
    dt_atendimento: "2026-04-15T08:30:00",
    status: "agendado",
    tipo_procedimento: "avaliacao",
    observacao: "Primeira consulta",
    paciente_cpf: "444.555.666-77",
    dentista_cpf: "345.678.901-22",
  },
  {
    id: 5,
    dt_atendimento: "2026-04-15T11:00:00",
    status: "cancelado",
    tipo_procedimento: "extracao",
    observacao: "Paciente cancelou por motivo pessoal",
    paciente_cpf: "555.666.777-88",
    dentista_cpf: "234.567.890-11",
  },
  {
    id: 6,
    dt_atendimento: "2026-04-10T09:00:00",
    status: "concluido",
    tipo_procedimento: "ortodontia",
    observacao: "Manutenção do aparelho",
    paciente_cpf: "222.333.444-55",
    dentista_cpf: "345.678.901-22",
  },
];

export { agendamentos };
export type { Agendamento, StatusAgendamento, TipoProcedimento };
