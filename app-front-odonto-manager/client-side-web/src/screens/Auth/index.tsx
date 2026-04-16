import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import appLogo from "../../assets/app-logo.svg";
import "./style.css";

function AuthScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    console.log("Login:", { email, senha });
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <img src={appLogo} alt="Odonto Manager" />
          <h4>Odonto Manager</h4>
          <p>Sistema de gestão odontológica</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="auth-email">E-mail</label>
            <div className="auth-input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="auth-input-icon" />
              <input
                id="auth-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="auth-senha">Senha</label>
            <div className="auth-input-wrapper">
              <FontAwesomeIcon icon={faLock} className="auth-input-icon" />
              <input
                id="auth-senha"
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {erro && <p className="auth-erro">{erro}</p>}

          <button type="submit" className="auth-submit-btn">
            Entrar
          </button>
        </form>

        <p className="auth-footer">
          © 2026 Odonto Manager — TCC @PUCRS
        </p>
      </div>
    </div>
  );
}

export { AuthScreen };
