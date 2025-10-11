import React from "react";
import Home from "./Home";
import ClienteConsultarView from "./componentes/ClienteConsulta/ClienteConsultarView";
import ClienteCadastrarView from "./componentes/ClienteCadastrar/ClienteCadastrarView";
import ClienteConsulta from "./componentes/ClienteConsultaCpf/ClienteConsulta";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
        <Route path="/clientes/consulta" element={<ClienteConsultarView />} />
        <Route path="/clientes/cadastrar" element={<ClienteCadastrarView />} />
        <Route path="/clientes/consultar/cpf" element={<ClienteConsulta />} />
      </Routes>
    </Router>
  );
}
export default App;
