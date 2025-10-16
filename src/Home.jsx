import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Home() {
  return (
    <div>
      {" "}
      <div className="top-bar">Sistema Integrado de Gestão</div>
      {/* Links alinhados à esquerda logo abaixo */}
      <div className="home-links">
        <Link to="/clientes/consulta">Consulta de clientes</Link>
        <Link to="/clientes/cadastrar">Cadastrar cliente </Link>
        <Link to="/clientes/consultar/cpf">Consultar cliente por CPF</Link>
        <Link to="/clientes/excluir/cpf">Excluir cliente por CPF</Link>
      </div>
    </div>
  );
}

export default Home;
