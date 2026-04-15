import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "../../../components/DataTable";
import type { Column } from "../../../components/DataTable";
import { pacientes } from "../../../mock/pacientes";
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
];

const condicoesColumns: Column<CondicaoSaude>[] = [
  { key: "nome", label: "Condição", sortType: "text" },
  {
    key: "categoria",
    label: "Categoria",
    render: renderCategoria,
    sortType: "text",
  },
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
];

type TabKey = "evolucoes" | "anamneses" | "receituario";

const TABS: { key: TabKey; label: string }[] = [
  { key: "evolucoes", label: "Prontuários" },
  { key: "anamneses", label: "Anamneses" },
  { key: "receituario", label: "Receituário" },
];

function PacienteFichaScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("evolucoes");

  const paciente = pacientes.find((p) => p.id === Number(id));

  if (!paciente) {
    return (
      <>
        <h5 className="bb-primary fc-primary pb-1">Paciente não encontrado</h5>
        <button
          className="ficha-voltar-btn"
          onClick={() => navigate("/pacientes")}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Voltar
        </button>
      </>
    );
  }

  const evolucoes = evolucoesClinicas.filter(
    (e) => e.paciente_id === paciente.id,
  );
  const anamnesesPaciente = anamneses.filter(
    (a) => a.paciente_id === paciente.id,
  );
  const anamneseIds = anamnesesPaciente.map((a) => a.id);
  const condicoes = condicoesSaude.filter((c) =>
    anamneseIds.includes(c.anamnese_id),
  );
  const receitas = receituarios.filter((r) => r.paciente_id === paciente.id);

  return (
    <>
      <button
        className="ficha-voltar-btn"
        onClick={() => navigate("/pacientes")}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
      </button>

      {/* Perfil do paciente */}
      <div className="ficha-perfil">
        <div className="ficha-avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="ficha-perfil-info">
          <h5 className="ficha-perfil-nome">{paciente.nome}</h5>
          <div className="ficha-perfil-dados">
            <p>
              <strong>CPF:</strong> {paciente.cpf}
            </p>
            <p>
              <strong>Sexo:</strong> {paciente.sexo}
            </p>
            <p>
              <strong>Nascimento:</strong>{" "}
              {dateBR.format(paciente.dt_nascimento)}
            </p>
            <p>
              <strong>Endereço:</strong> {paciente.endereco}
            </p>
            {paciente.observacao && (
              <p>
                <strong>Obs:</strong> {paciente.observacao}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Abas */}
      <nav className="ficha-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`ficha-tab ${activeTab === tab.key ? "ficha-tab--active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="ficha-tab-content">
        {activeTab === "evolucoes" && (
          <DataTable
            data={evolucoes}
            columns={evolucoesColumns}
            rowKey="id"
            multiSelect={false}
          />
        )}

        {activeTab === "anamneses" && (
          <>
            <h6 className="ficha-section-title">Detalhamento</h6>
            <DataTable
              data={anamnesesPaciente}
              columns={anamnesesColumns}
              rowKey="id"
              multiSelect={false}
              pageSize={5}
            />

            <h6 className="ficha-section-title">Condições de Saúde</h6>
            <DataTable
              data={condicoes}
              columns={condicoesColumns}
              rowKey="id"
              multiSelect={false}
              pageSize={5}
            />
          </>
        )}

        {activeTab === "receituario" && (
          <DataTable
            data={receitas}
            columns={receituariosColumns}
            rowKey="id"
            multiSelect={false}
          />
        )}
      </div>
    </>
  );
}

export { PacienteFichaScreen };
