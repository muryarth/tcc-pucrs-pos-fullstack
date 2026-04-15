import { DataTable } from "../../components/DataTable";
import type { Column, TableAction } from "../../components/DataTable";
import { usuarios } from "../../mock/usuarios";
import type { Usuario } from "../../mock/usuarios";
import { dateBR } from "../../services";

const ROLE_LABELS: Record<string, string> = {
  "strategic-manager": "Gestor",
  "operational-dentist": "Dentista",
  "operational-assistant": "Assistente",
};

const columns: Column<Usuario>[] = [
  { key: "nome", label: "Nome", sortType: "text" },
  { key: "cpf", label: "CPF" },
  { key: "email", label: "E-mail", sortType: "text" },
  { key: "telefone", label: "Telefone" },
  {
    key: "role",
    label: "Função",
    render: (value) => ROLE_LABELS[String(value)] ?? String(value),
    sortType: "text",
  },
  { key: "cro", label: "CRO", render: (value) => value ? String(value) : "—" },
  {
    key: "dt_cadastro",
    label: "Cadastro",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
];

const actions: TableAction<Usuario>[] = [
  {
    label: "Ver detalhes",
    onClick: (rows) => console.log("Selecionados:", rows),
  },
];

function EquipeScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Equipe</h5>
      <DataTable
        data={usuarios}
        columns={columns}
        actions={actions}
        multiSelect={false}
        rowKey="id"
      />
    </>
  );
}

export { EquipeScreen };
