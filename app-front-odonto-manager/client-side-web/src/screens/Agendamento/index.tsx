import { DataTable } from "../../components/DataTable";
import type { Column, TableAction } from "../../components/DataTable";
import { agendamentos } from "../../mock/agendamentos";
import type { Agendamento } from "../../mock/agendamentos";
import { dateBR } from "../../services";
import "./style.css";

function renderStatus(value: Agendamento[keyof Agendamento]) {
  const STATUS_CONFIG = [
    { label: "Agendado", color: "#2563eb" },
    { label: "Confirmado", color: "#16a34a" },
    { label: "Cancelado", color: "#dc2626" },
    { label: "Concluído", color: "#6b7280" },
  ];

  const config = STATUS_CONFIG.find((c) => c.label === value) || {
    label: String(value),
    color: "#6b7280",
  }; // Padrão

  console.log("Renderizando status:", value, "Config encontrada:", config);

  return (
    <span
      className="agendamento-status-badge"
      style={{ color: config.color, borderColor: config.color }}
    >
      {config.label}
    </span>
  );
}

const columns: Column<Agendamento>[] = [
  {
    key: "dt_atendimento",
    label: "Data/Hora",
    render: (value) => dateBR.format(String(value), { showTime: true }),
    sortType: "timestamp",
  },
  { key: "tipo_procedimento", label: "Procedimento" },
  { key: "status", label: "Status", render: renderStatus },
  { key: "paciente_nome", label: "Paciente" },
  { key: "dentista_nome", label: "Dentista" },
  { key: "observacao", label: "Observação" },
];

const actions: TableAction<Agendamento>[] = [
  {
    label: "Ver detalhes",
    onClick: (rows) => console.log("Selecionados:", rows),
  },
];

function AgendamentoScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Agendamentos</h5>
      <DataTable
        data={agendamentos}
        columns={columns}
        actions={actions}
        multiSelect={false}
        rowKey="id"
      />
    </>
  );
}

export { AgendamentoScreen };
