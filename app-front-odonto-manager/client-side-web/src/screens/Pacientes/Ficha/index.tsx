import { DataTable } from "../../../components/DataTable";
import type { Column } from "../../../components/DataTable";
import { evolucoesClinicas } from "../../../mock/evolucoes-clinicas";
import type { EvolucaoClinica } from "../../../mock/evolucoes-clinicas";
import { anamneses } from "../../../mock/anamneses";
import type { Anamnese } from "../../../mock/anamneses";
import { receituarios } from "../../../mock/receituarios";
import type { Receituario } from "../../../mock/receituarios";
import { condicoesSaude } from "../../../mock/condicoes-saude";
import type { CondicaoSaude } from "../../../mock/condicoes-saude";
import { dateBR } from "../../../services";
import "./style.css";

function renderCategoria(value: CondicaoSaude[keyof CondicaoSaude]) {
  const CATEGORIA_CONFIG = [
    { label: "Risco baixo", color: "#16a34a" },
    { label: "Risco médio", color: "#ca8a04" },
    { label: "Risco alto", color: "#dc2626" },
  ];

  const config = CATEGORIA_CONFIG.find((c) => c.label === value) || {
    label: String(value),
    color: "#6b7280",
  };

  return (
    <span
      className="ficha-categoria-badge"
      style={{ color: config.color, borderColor: config.color }}
    >
      {config.label}
    </span>
  );
}

const evolucoesColumns: Column<EvolucaoClinica>[] = [
  { key: "numero", label: "Nº", sortType: "text" },
  {
    key: "dt_cadastro",
    label: "Data",
    render: (value) => dateBR.format(String(value), { showTime: true }),
    sortType: "timestamp",
  },
  { key: "descricao_procedimento", label: "Procedimento" },
  { key: "paciente_id", label: "Paciente (ID)" },
  { key: "dentista_id", label: "Dentista (ID)" },
];

const anamnesesColumns: Column<Anamnese>[] = [
  { key: "numero", label: "Nº", sortType: "text" },
  {
    key: "dt_cadastro",
    label: "Cadastro",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
  {
    key: "dt_modificacao",
    label: "Modificação",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
  { key: "observacao", label: "Observação" },
  { key: "paciente_id", label: "Paciente (ID)" },
];

const condicoesColumns: Column<CondicaoSaude>[] = [
  { key: "nome", label: "Condição", sortType: "text" },
  { key: "categoria", label: "Categoria", render: renderCategoria, sortType: "text" },
  { key: "descricao", label: "Descrição" },
];

const receituariosColumns: Column<Receituario>[] = [
  {
    key: "dt_emissao",
    label: "Emissão",
    render: (value) => dateBR.format(String(value), { showTime: true }),
    sortType: "timestamp",
  },
  { key: "descricao", label: "Prescrição" },
  { key: "paciente_id", label: "Paciente (ID)" },
  { key: "dentista_id", label: "Dentista (ID)" },
];

function PacienteFichaScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Ficha do Paciente</h5>

      <h6 className="ficha-section-title">Evoluções Clínicas</h6>
      <DataTable
        data={evolucoesClinicas}
        columns={evolucoesColumns}
        rowKey="id"
        multiSelect={false}
      />

      <h6 className="ficha-section-title">Anamneses</h6>
      <DataTable
        data={anamneses}
        columns={anamnesesColumns}
        rowKey="id"
        multiSelect={false}
      />

      <h6 className="ficha-section-title">Condições de Saúde</h6>
      <DataTable
        data={condicoesSaude}
        columns={condicoesColumns}
        rowKey="id"
        multiSelect={false}
      />

      <h6 className="ficha-section-title">Receituários</h6>
      <DataTable
        data={receituarios}
        columns={receituariosColumns}
        rowKey="id"
        multiSelect={false}
      />
    </>
  );
}

export { PacienteFichaScreen };
