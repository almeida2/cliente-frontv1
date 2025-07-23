import React from "react";
import Home from "./Home";
import ClienteConsultaView from "./componentes/ClienteConsulta/ClienteConsultaView";
import ClienteCadastrarView from "./componentes/ClienteCadastrar/ClienteCadastrarView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
        <Route path="/clientes/consulta" element={<ClienteConsultaView />} />
        <Route path="/clientes/cadastrar" element={<ClienteCadastrarView />} />
      </Routes>
    </Router>
  );
}
export default App;
