// components/ClienteConsulta.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClienteConsultar from "./ClienteConsultar"; 
import "./styles.css";

function ClienteConsultarView() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Chama a função e obtém o resultado estruturado
        const result = await ClienteConsultar();

        if (result.success) {
          // Se for bem-sucedido, define o estado de clientes como o array 'data'
          setClientes(result.data);
        } else {
          // Se houver um erro, define o estado de erro com a mensagem de erro
          setError(result.error);
          setClientes([]); // Garante que 'clientes' seja um array vazio em caso de erro
        }
      } catch (err) {
        // Este bloco manipula erros inesperados 
        console.error("Erro no componente ClienteConsulta:", err);
        setError(err.message || "Não foi possível realizar a consulta.");
        setClientes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVoltar = () => {
    navigate("/");
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
          {/* Manipula o array de clientes */}
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

export default ClienteConsultarView;
