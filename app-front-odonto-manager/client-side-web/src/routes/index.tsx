import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthScreen } from "../screens/Auth";
import { AgendamentoScreen } from "../screens/Agendamento";
import { EquipeScreen } from "../screens/Equipe";
import { PacientesScreen } from "../screens/Pacientes";
import { PacienteFichaScreen } from "../screens/Pacientes/Ficha";
import { PacienteCadastroScreen } from "../screens/Pacientes/Cadastro";
import { FinanceiroConsultasScreen } from "../screens/Financeiro/Consultas";
import { FinanceiroMateriaisScreen } from "../screens/Financeiro/Materiais";
import { Layout } from "../components/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthScreen />} />
        <Route element={<Layout />}>
          <Route path="/" element={<AgendamentoScreen />} />
          <Route path="/pacientes" element={<PacientesScreen />} />
          <Route path="/pacientes/cadastro" element={<PacienteCadastroScreen />} />
          <Route path="/pacientes/:id" element={<PacienteFichaScreen />} />
          <Route path="/equipe" element={<EquipeScreen />} />
          <Route
            path="/financeiro/consultas"
            element={<FinanceiroConsultasScreen />}
          />
          <Route
            path="/financeiro/materiais"
            element={<FinanceiroMateriaisScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
