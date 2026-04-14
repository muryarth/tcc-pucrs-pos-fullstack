import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarCheck,
  faUserInjured,
  faUserDoctor,
  faDollarSign,
  faStethoscope,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";

type NavigationPath = {
  label: string;
  path: string;
  icon?: IconDefinition;
};

type SidebarOption = {
  label: string;
  icon: IconDefinition;
  navigationPaths: NavigationPath[];
};

const sidebarOptions: SidebarOption[] = [
  {
    label: "Agendamentos",
    icon: faCalendarCheck,
    navigationPaths: [{ label: "Agendamentos", path: "/" }],
  },
  {
    label: "Pacientes",
    icon: faUserInjured,
    navigationPaths: [{ label: "Pacientes", path: "/pacientes" }],
  },
  {
    label: "Financeiro",
    icon: faDollarSign,
    navigationPaths: [
      {
        label: "Consultas",
        path: "/financeiro/consultas",
        icon: faStethoscope,
      },
      { label: "Materiais", path: "/financeiro/materiais", icon: faBoxes },
    ],
  },
  {
    label: "Equipe",
    icon: faUserDoctor,
    navigationPaths: [{ label: "Equipe", path: "/equipe" }],
  },
];

export { sidebarOptions };
export type { SidebarOption, NavigationPath };
