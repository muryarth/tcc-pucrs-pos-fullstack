type StatusFinanceiro = "Pendente" | "Pago" | "Vencido" | "Cancelado";
type FormaPagamento = "Dinheiro" | "Pix" | "Cartão de crédito" | "Cartão de débito" | "Boleto";

type RegistroFinanceiro = {
  id: number;
  numero: number;
  valor: number;
  dt_vencimento: string;
  dt_pagamento: string;
  status: StatusFinanceiro;
  forma_pagamento: FormaPagamento;
  url_nota: string;
  paciente_cpf: string;
};

const registrosFinanceiros: RegistroFinanceiro[] = [
  {
    id: 1,
    numero: 1,
    valor: 250.0,
    dt_vencimento: "2026-04-20T00:00:00",
    dt_pagamento: "",
    status: "Pendente",
    forma_pagamento: "Pix",
    url_nota: "",
    paciente_cpf: "111.222.333-44",
  },
  {
    id: 2,
    numero: 2,
    valor: 480.0,
    dt_vencimento: "2026-03-15T00:00:00",
    dt_pagamento: "2026-03-14T10:30:00",
    status: "Pago",
    forma_pagamento: "Cartão de crédito",
    url_nota: "https://notas.exemplo.com/nota-002.pdf",
    paciente_cpf: "222.333.444-55",
  },
  {
    id: 3,
    numero: 3,
    valor: 1200.0,
    dt_vencimento: "2026-03-01T00:00:00",
    dt_pagamento: "",
    status: "Vencido",
    forma_pagamento: "Boleto",
    url_nota: "",
    paciente_cpf: "333.444.555-66",
  },
  {
    id: 4,
    numero: 4,
    valor: 150.0,
    dt_vencimento: "2026-04-25T00:00:00",
    dt_pagamento: "",
    status: "Pendente",
    forma_pagamento: "Dinheiro",
    url_nota: "",
    paciente_cpf: "444.555.666-77",
  },
  {
    id: 5,
    numero: 5,
    valor: 320.0,
    dt_vencimento: "2026-02-10T00:00:00",
    dt_pagamento: "2026-02-10T16:00:00",
    status: "Pago",
    forma_pagamento: "Cartão de débito",
    url_nota: "https://notas.exemplo.com/nota-005.pdf",
    paciente_cpf: "555.666.777-88",
  },
  {
    id: 6,
    numero: 6,
    valor: 600.0,
    dt_vencimento: "2026-04-05T00:00:00",
    dt_pagamento: "",
    status: "Cancelado",
    forma_pagamento: "Pix",
    url_nota: "",
    paciente_cpf: "111.222.333-44",
  },
];

export { registrosFinanceiros };
export type { RegistroFinanceiro, StatusFinanceiro, FormaPagamento };
