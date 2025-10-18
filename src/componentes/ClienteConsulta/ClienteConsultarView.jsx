// components/ClienteConsulta.jsx
import React from "react";
import "./styles.css";
function ClienteConsultarView({ clientes, loading, error, onVoltar }) {
  if (loading) {
    return <div className="loading-message">Carregando dados...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!clientes || clientes.length === 0) {
    return <div className="no-data-message">Nenhum cliente encontrado.</div>;
  }

  return (
    <div className="cliente-consulta-container">
      <h2>Consulta de Clientes</h2>
      <table className="cliente-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Complemento</th>
            <th>Email</th>
            <th>Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.cep}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.complemento}</td>
              <td>{cliente.email}</td>
              <td>{cliente.dataCadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onVoltar} className="button">
        Voltar
      </button>
    </div>
  );
}

export default ClienteConsultarView;
