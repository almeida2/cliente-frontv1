import React from "react";
import Home from "./Home";
import ClienteConsultarContainer from "./componentes/ClienteConsulta/ClienteConsultarContainer";
import ClienteCadastrarContainer from "./componentes/ClienteCadastrar/ClienteCadastrarContainer";
import ClienteConsultaCpfContainer from "./componentes/ClienteConsultaCpf/ClienteConsultaCpfContainer";
import ClienteExclusaoContainer from "./componentes/ClienteExclusao/ClienteExclusaoContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Componente principal da aplicação que configura as rotas usando React Router (15.10.2025)
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* Adicionar outras rotas aqui de acordo com a necessidade */}
        <Route
          path="/clientes/consulta"
          element={<ClienteConsultarContainer />}
        />
        <Route
          path="/clientes/cadastrar"
          element={<ClienteCadastrarContainer />}
        />
        <Route
          path="/clientes/consultar/cpf"
          element={<ClienteConsultaCpfContainer />}
        />
        <Route
          path="/clientes/excluir/cpf"
          element={<ClienteExclusaoContainer />}
        />
      </Routes>
    </Router>
  );
}
export default App;
