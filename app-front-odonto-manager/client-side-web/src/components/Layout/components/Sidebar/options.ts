import {
  faCalendarCheck,
  faUserInjured,
  faUserDoctor,
  faFileMedical,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOptions = [
  {
    label: "Agendamentos",
    icon: faCalendarCheck,
    navigationPath: "/",
  },
  {
    label: "Pacientes",
    icon: faUserInjured,
    navigationPath: "/pacientes",
  },
  {
    label: "Equipe",
    icon: faUserDoctor,
    navigationPath: "/equipe",
  },
  {
    label: "Prontuários",
    icon: faFileMedical,
    navigationPath: "/prontuarios",
  },
  {
    label: "Financeiro",
    icon: faDollarSign,
    navigationPath: "/financeiro",
  },
];

export { sidebarOptions };
