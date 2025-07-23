// components/ClienteConsulta.jsx
import React, { useState, useEffect } from "react";
import { consultarClientes } from "./consultarClientes"; // Importa a função de serviço
import "./styles.css"; // Importa o CSS

function ClienteConsultaView() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Chama a função de serviço que está separada
        const data = await consultarClientes();
        setClientes(data);
      } catch (err) {
        console.error("Erro no componente ClienteConsulta:", err);
        // Exibe a mensagem de erro que veio do serviço ou uma padrão
        setError(err.message || "Não foi possível realizar a consulta.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Array de dependências vazio para rodar apenas uma vez ao montar

  if (loading) {
    return <div className="loading-message">Carregando dados...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (clientes.length === 0) {
    return <div className="no-data-message">Nenhum cliente encontrado.</div>;
  }

  return (
    <div className="cliente-consulta-container">
      <h2>Resultado da Consulta de Clientes</h2>
      <table className="cliente-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>CEP</th>
            <th>Endereço</th>
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
              <td>{cliente.email}</td>
              <td>{cliente.dataCadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClienteConsultaView;
