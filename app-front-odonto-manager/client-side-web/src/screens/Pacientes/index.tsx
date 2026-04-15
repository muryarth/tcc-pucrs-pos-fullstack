import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "../../components/DataTable";
import type { Column, TableAction } from "../../components/DataTable";
import { pacientes } from "../../mock/pacientes";
import type { Paciente } from "../../mock/pacientes";
import { dateBR } from "../../services";
import "./style.css";

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
    render: (value) => (value ? String(value) : "—"),
  },
];

function PacientesScreen() {
  const navigate = useNavigate();

  const actions: TableAction<Paciente>[] = [
    {
      label: "Ver ficha",
      onClick: (rows) => navigate(`/pacientes/${rows[0].id}`),
    },
  ];

  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Pacientes</h5>
      <div className="pacientes-toolbar">
        <button
          className="pacientes-novo-btn"
          onClick={() => navigate("/pacientes/cadastro")}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Novo Paciente
        </button>
      </div>
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
