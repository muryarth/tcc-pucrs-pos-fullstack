type CategoriaCondicao = "Risco baixo" | "Risco médio" | "Risco alto";

type CondicaoSaude = {
  id: number;
  nome: string;
  categoria: CategoriaCondicao;
  descricao: string;
  anamnese_id: number;
};

const condicoesSaude: CondicaoSaude[] = [
  {
    id: 1,
    nome: "Alergia a Dipirona",
    categoria: "Risco alto",
    descricao: "Reação alérgica cutânea ao uso de dipirona sódica",
    anamnese_id: 1,
  },
  {
    id: 2,
    nome: "Diabetes Tipo 2",
    categoria: "Risco alto",
    descricao: "Diagnosticado em 2018, controlado com metformina 850mg",
    anamnese_id: 3,
  },
  {
    id: 3,
    nome: "Hipertensão Arterial",
    categoria: "Risco alto",
    descricao: "Pressão arterial controlada com losartana 50mg",
    anamnese_id: 3,
  },
  {
    id: 4,
    nome: "Uso de Metformina",
    categoria: "Risco médio",
    descricao: "Metformina 850mg, 2x ao dia",
    anamnese_id: 3,
  },
  {
    id: 5,
    nome: "Uso de Losartana",
    categoria: "Risco médio",
    descricao: "Losartana 50mg, 1x ao dia",
    anamnese_id: 3,
  },
  {
    id: 6,
    nome: "Hipertensão Arterial",
    categoria: "Risco alto",
    descricao: "Controlada com medicação diária",
    anamnese_id: 5,
  },
  {
    id: 7,
    nome: "Bruxismo",
    categoria: "Risco baixo",
    descricao: "Bruxismo noturno, indicado uso de placa miorrelaxante",
    anamnese_id: 5,
  },
];

export { condicoesSaude };
export type { CondicaoSaude, CategoriaCondicao };
