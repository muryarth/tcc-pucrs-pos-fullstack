import { DataTable } from "../../components/DataTable";
import type { Column, TableAction } from "../../components/DataTable";
import { pacientes } from "../../mock/pacientes";
import type { Paciente } from "../../mock/pacientes";
import { dateBR } from "../../services";

const columns: Column<Paciente>[] = [
  { key: "nome", label: "Nome", sortType: "text" },
  { key: "cpf", label: "CPF" },
  { key: "sexo", label: "Sexo", sortType: "text" },
  {
    key: "dt_nascimento",
    label: "Data de Nascimento",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
  { key: "endereco", label: "Endereço" },
  {
    key: "observacao",
    label: "Observação",
    render: (value) => value ? String(value) : "—",
  },
];

const actions: TableAction<Paciente>[] = [
  {
    label: "Ver ficha",
    onClick: (rows) => console.log("Selecionados:", rows),
  },
];

function PacientesScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Pacientes</h5>
      <DataTable
        data={pacientes}
        columns={columns}
        actions={actions}
        multiSelect={false}
        rowKey="id"
      />
    </>
  );
}

export { PacientesScreen };
