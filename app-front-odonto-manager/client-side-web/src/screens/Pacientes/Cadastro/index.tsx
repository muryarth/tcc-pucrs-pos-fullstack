import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import type { Sexo } from "../../../mock/pacientes";
import type { CategoriaCondicao } from "../../../mock/condicoes-saude";
import "./style.css";

type CondicaoForm = {
  nome: string;
  categoria: CategoriaCondicao | "";
  descricao: string;
};

const EMPTY_CONDICAO: CondicaoForm = { nome: "", categoria: "", descricao: "" };

function PacienteCadastroScreen() {
  const navigate = useNavigate();

  // Dados do paciente
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState<Sexo | "">("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacao, setObservacao] = useState("");

  // Anamnese
  const [anamneseObs, setAnamneseObs] = useState("");

  // Condições de saúde
  const [condicoes, setCondicoes] = useState<CondicaoForm[]>([
    { ...EMPTY_CONDICAO },
  ]);

  const addCondicao = () =>
    setCondicoes((prev) => [...prev, { ...EMPTY_CONDICAO }]);

  const removeCondicao = (index: number) =>
    setCondicoes((prev) => prev.filter((_, i) => i !== index));

  const updateCondicao = (
    index: number,
    field: keyof CondicaoForm,
    value: string,
  ) =>
    setCondicoes((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)),
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      paciente: {
        nome,
        cpf,
        sexo,
        dt_nascimento: dtNascimento,
        endereco,
        observacao,
      },
      anamnese: { observacao: anamneseObs },
      condicoes_saude: condicoes.filter((c) => c.nome.trim() !== ""),
    };

    console.log("Cadastro enviado:", payload);
    navigate("/pacientes");
  };

  return (
    <>
      <button
        className="cadastro-voltar-btn"
        onClick={() => navigate("/pacientes")}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
      </button>

      <h5 className="bb-primary fc-primary pb-1">Cadastrar paciente</h5>

      <form className="cadastro-form" onSubmit={handleSubmit}>
        {/* Dados pessoais */}
        <fieldset className="cadastro-fieldset">
          <legend>Dados pessoais</legend>

          <div className="cadastro-grid">
            <div className="cadastro-field">
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="cadastro-field">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="cadastro-field">
              <label htmlFor="sexo">Sexo</label>
              <select
                id="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value as Sexo)}
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="cadastro-field">
              <label htmlFor="dt_nascimento">Data de nascimento</label>
              <input
                id="dt_nascimento"
                type="date"
                value={dtNascimento}
                onChange={(e) => setDtNascimento(e.target.value)}
                required
              />
            </div>

            <div className="cadastro-field cadastro-field--full">
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>

            <div className="cadastro-field cadastro-field--full">
              <label htmlFor="observacao">Observação</label>
              <textarea
                id="observacao"
                rows={2}
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        {/* Anamnese inicial */}
        <fieldset className="cadastro-fieldset">
          <legend>Anamnese</legend>

          {/* Condições de saúde */}
          <div className="cadastro-condicoes">
            <div className="cadastro-condicoes-header">
              <h6>Condições de Saúde</h6>
              <button
                type="button"
                className="cadastro-add-btn"
                onClick={addCondicao}
              >
                <FontAwesomeIcon icon={faPlus} /> Adicionar
              </button>
            </div>

            {condicoes.map((cond, i) => (
              <div key={i} className="cadastro-condicao-row">
                <div className="cadastro-field">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={cond.nome}
                    onChange={(e) => updateCondicao(i, "nome", e.target.value)}
                    placeholder="Ex: Diabetes Tipo 2"
                  />
                </div>

                <div className="cadastro-field">
                  <label>Categoria</label>
                  <select
                    value={cond.categoria}
                    onChange={(e) =>
                      updateCondicao(i, "categoria", e.target.value)
                    }
                  >
                    <option value="">Selecione</option>
                    <option value="Risco baixo">Risco baixo</option>
                    <option value="Risco médio">Risco médio</option>
                    <option value="Risco alto">Risco alto</option>
                  </select>
                </div>

                <div className="cadastro-field">
                  <label>Descrição</label>
                  <input
                    type="text"
                    value={cond.descricao}
                    onChange={(e) =>
                      updateCondicao(i, "descricao", e.target.value)
                    }
                  />
                </div>

                <button
                  type="button"
                  className="cadastro-remove-btn"
                  onClick={() => removeCondicao(i)}
                  aria-label="Remover condição"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>

          <div className="cadastro-field cadastro-field--full">
            <label htmlFor="anamnese_obs">Observações</label>
            <textarea
              id="anamnese_obs"
              rows={3}
              value={anamneseObs}
              onChange={(e) => setAnamneseObs(e.target.value)}
            />
          </div>
        </fieldset>

        <div className="cadastro-actions">
          <button
            type="button"
            className="cadastro-cancel-btn"
            onClick={() => navigate("/pacientes")}
          >
            Cancelar
          </button>
          <button type="submit" className="cadastro-submit-btn">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
}

export { PacienteCadastroScreen };
