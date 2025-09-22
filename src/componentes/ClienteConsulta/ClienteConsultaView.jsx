// components/ClienteConsulta.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import { consultarClientes } from "./consultarClientes";
import "./styles.css";

function ClienteConsultaView() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Inicializa o hook de navegação
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await consultarClientes();
        setClientes(data);
      } catch (err) {
        console.error("Erro no componente ClienteConsulta:", err);
        setError(err.message || "Não foi possível realizar a consulta.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Função para lidar com o clique do botão "Voltar"
  const handleVoltar = () => {
    navigate("/"); // Navega para a rota raiz, que é o menu principal
  };

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
      <h2>Consulta de Clientes</h2>
      {/* Adiciona o botão "Voltar" */}

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

      <button onClick={handleVoltar} className="button">
        Voltar
      </button>
    </div>
  );
}

export default ClienteConsultaView;
