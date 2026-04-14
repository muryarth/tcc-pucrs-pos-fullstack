import React from "react";
import "./style.css";
import appLogo from "../../../../assets/app-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  onToggleSidebar: () => void;
};

type UserRole =
  | "strategic-manager"
  | "operational-assistant"
  | "operational-dentist";

const roles: { key: UserRole; label: string; color: string }[] = [
  { key: "strategic-manager", label: "Gestor", color: "#ffcccc" },
  {
    key: "operational-assistant",
    label: "Assistente Administrativo",
    color: "#ccccff",
  },
  { key: "operational-dentist", label: "Dentista", color: "#ccffcc" },
];

function HeaderComponent({ onToggleSidebar }: HeaderProps) {
  const userRole: UserRole = "strategic-manager"; // Simulação de role do usuário
  const role = roles.find((r) => r.key === userRole)!;

  return (
    <header className="app-layout-header d-flex align-items-center justify-content-between px-3">
      <div className="d-flex align-items-center gap-2">
        <img src={appLogo} alt="Odonto Manager" height={40} />
        <span className="fw-semibold fs-5">Odonto Manager</span>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="d-none d-md-flex align-items-center gap-3">
          <span
            className="app-layout-header-role-badge"
            style={{ "--badge-color": role.color } as React.CSSProperties}
          >
            {role.label}
          </span>
          <div className="app-layout-header-user">
            <p className="m-0 fw-semibold">Arthur Azevedo Mury</p>
            <p className="m-0">arthur.mury@outlook.com</p>
          </div>
          <div className="app-layout-header-avatar d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <button
          className="app-layout-header-toggle btn d-md-none"
          onClick={onToggleSidebar}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}

export { HeaderComponent };
