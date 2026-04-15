import { DataTable } from "../../../components/DataTable";
import type { Column, TableAction } from "../../../components/DataTable";
import { registrosFinanceiros } from "../../../mock/registros-financeiros";
import type { RegistroFinanceiro } from "../../../mock/registros-financeiros";
import { dateBR, formatToBRL } from "../../../services";
import "./style.css";

function renderStatus(value: RegistroFinanceiro[keyof RegistroFinanceiro]) {
  const STATUS_CONFIG = [
    { label: "Pendente", color: "#ca8a04" },
    { label: "Pago", color: "#16a34a" },
    { label: "Vencido", color: "#dc2626" },
    { label: "Cancelado", color: "#6b7280" },
  ];

  const config = STATUS_CONFIG.find((c) => c.label === value) || {
    label: String(value),
    color: "#6b7280",
  };

  return (
    <span
      className="financeiro-status-badge"
      style={{ color: config.color, borderColor: config.color }}
    >
      {config.label}
    </span>
  );
}

const columns: Column<RegistroFinanceiro>[] = [
  { key: "numero", label: "Nº", sortType: "text" },
  {
    key: "valor",
    label: "Valor",
    render: (value) => formatToBRL(Number(value)),
    sortType: "text",
  },
  {
    key: "dt_vencimento",
    label: "Vencimento",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
  {
    key: "dt_pagamento",
    label: "Pagamento",
    render: (value) => value ? dateBR.format(String(value)) : "—",
    sortType: "timestamp",
  },
  { key: "status", label: "Status", render: renderStatus },
  { key: "forma_pagamento", label: "Forma de Pagamento", sortType: "text" },
  { key: "paciente_cpf", label: "CPF Paciente" },
];

const actions: TableAction<RegistroFinanceiro>[] = [
  {
    label: "Ver detalhes",
    onClick: (rows) => console.log("Selecionados:", rows),
  },
];

function FinanceiroConsultasScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Financeiro - Consultas</h5>
      <DataTable
        data={registrosFinanceiros}
        columns={columns}
        actions={actions}
        multiSelect={false}
        rowKey="id"
      />
    </>
  );
}

export { FinanceiroConsultasScreen };
