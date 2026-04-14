import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks } from "./links";

function FooterComponent() {
  return (
    <footer className="app-layout-footer d-none d-md-flex align-items-center justify-content-between px-3 py-2">
      <div>
        <p className="m-0 mb-1">
          © 2026 Odonto Manager | TCC - PUCRS - Pós Fullstack
        </p>
        <p className="m-0">
          Desenvolvido por: <strong>Arthur Azevedo Mury</strong>
        </p>
      </div>
      <div className="d-flex gap-3 fs-4">
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
