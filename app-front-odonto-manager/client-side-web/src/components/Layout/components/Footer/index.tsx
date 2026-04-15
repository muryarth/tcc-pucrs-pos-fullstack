import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks } from "./links";

function FooterComponent() {
  return (
    <footer className="app-layout-footer">
      <div className="app-layout-footer-text">
        <p>
          <strong>© 2026 Odonto Manager</strong> | TCC - Pós-Graduação em
          Desenvolvimento Fullstack - <strong>PUCRS</strong>
        </p>
        <p>
          Desenvolvido por:{" "}
          <strong>Arthur Azevedo Mury - arthur.mury@outlook.com</strong>
        </p>
      </div>
      <div className="app-layout-footer-icons">
        {footerLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="app-layout-footer-icon"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export { FooterComponent };
