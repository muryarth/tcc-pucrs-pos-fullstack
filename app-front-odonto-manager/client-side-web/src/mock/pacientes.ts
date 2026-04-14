type Sexo = "masculino" | "feminino" | "outro";

type Paciente = {
  id: number;
  cpf: string;
  nome: string;
  sexo: Sexo;
  dt_nascimento: string;
  endereco: string;
  observacao: string;
};

const pacientes: Paciente[] = [
  {
    id: 1,
    cpf: "111.222.333-44",
    nome: "Roberto Almeida",
    sexo: "masculino",
    dt_nascimento: "1985-06-15T00:00:00",
    endereco: "Rua das Flores, 120 - Porto Alegre/RS",
    observacao: "Alergia a dipirona",
  },
  {
    id: 2,
    cpf: "222.333.444-55",
    nome: "Ana Clara Martins",
    sexo: "feminino",
    dt_nascimento: "1992-11-03T00:00:00",
    endereco: "Av. Ipiranga, 3500 - Porto Alegre/RS",
    observacao: "",
  },
  {
    id: 3,
    cpf: "333.444.555-66",
    nome: "Pedro Henrique Costa",
    sexo: "masculino",
    dt_nascimento: "1978-02-28T00:00:00",
    endereco: "Rua Osvaldo Aranha, 450 - Porto Alegre/RS",
    observacao: "Paciente com diabetes tipo 2",
  },
  {
    id: 4,
    cpf: "444.555.666-77",
    nome: "Juliana Fernandes",
    sexo: "feminino",
    dt_nascimento: "2001-09-10T00:00:00",
    endereco: "Rua Ramiro Barcelos, 800 - Porto Alegre/RS",
    observacao: "",
  },
  {
    id: 5,
    cpf: "555.666.777-88",
    nome: "Carlos Eduardo Ramos",
    sexo: "masculino",
    dt_nascimento: "1965-12-20T00:00:00",
    endereco: "Av. Protásio Alves, 1200 - Porto Alegre/RS",
    observacao: "Hipertenso, usa medicação contínua",
  },
];

export { pacientes };
export type { Paciente, Sexo };
