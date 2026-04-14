import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AgendamentoScreen } from "../screens/Agendamento";
import { AuthScreen } from "../screens/Auth";
import { Layout } from "../components/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthScreen />} />
        <Route element={<Layout />}>
          <Route path="/" element={<AgendamentoScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
