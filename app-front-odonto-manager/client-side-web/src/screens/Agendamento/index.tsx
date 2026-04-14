import { DataTable } from "../../components/DataTable";
import type { Column, TableAction } from "../../components/DataTable";
import { agendamentos } from "../../mock/agendamentos";
import type { Agendamento } from "../../mock/agendamentos";

const columns: Column<Agendamento>[] = [
  { key: "dt_atendimento", label: "Data/Hora" },
  { key: "tipo_procedimento", label: "Procedimento" },
  { key: "status", label: "Status" },
  { key: "paciente_cpf", label: "Paciente (CPF)" },
  { key: "dentista_cpf", label: "Dentista (CPF)" },
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
        rowKey="id"
      />
    </>
  );
}

export { AgendamentoScreen };
