import React from "react";
import Home from "./Home";
import ClienteConsultarView from "./componentes/ClienteConsulta/ClienteConsultarView";
import ClienteCadastrarView from "./componentes/ClienteCadastrar/ClienteCadastrarView";
import ClienteConsulta from "./componentes/ClienteConsultaCpf/ClienteConsulta";
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
        <Route path="/clientes/consulta" element={<ClienteConsultarView />} />
        <Route path="/clientes/cadastrar" element={<ClienteCadastrarView />} />
        <Route path="/clientes/consultar/cpf" element={<ClienteConsulta />} />
        <Route
          path="/clientes/excluir/cpf"
          element={<ClienteExclusaoContainer />}
        />
      </Routes>
    </Router>
  );
}
export default App;
