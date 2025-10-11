import React from "react";
// IMPORTAR O ARQUIVO DE ESTILOS COMPARTILHADO
import { useNavigate } from "react-router-dom";
import "./shared.css";

const ClienteConsultaView = ({
  cpf,
  setCpf,
  cliente,
  mensagem,
  onConsultar,
  onVoltar,
}) => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/"); // redireciona para a página inicial
  };
  return (
    // Usa a classe css compartilhada 'form-container'
    <div className="form-container">
      <h2>Consultar Cliente</h2>

      {!cliente && (
        <div className="form-group">
          {/* A classe css 'form-group-item' faz o alinhamento label/input */}
          <div className="form-group-item">
            <label htmlFor="cpf">CPF:</label>
            <input
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite o CPF"
            />
          </div>
          <div className="button-group">
            {/* Usa a classe css compartilhada 'button-primary' */}
            <button className="button-primary" onClick={onConsultar}>
              Consultar
            </button>
            {/* Usa a classe compartilhada 'button-primary' */}
            <button className="button-primary" onClick={handleVoltar}>
              Voltar
            </button>
          </div>
        </div>
      )}

      {cliente && (
        // Usa as classes css compartilhadas para exibir o resultado
        <div className="resultado-consulta">
          <div className="form-group-item">
            <label htmlFor="cpf-resultado">CPF:</label>
            <input
              id="cpf-resultado"
              type="text"
              value={cliente.cpf}
              readOnly
            />
          </div>

          <div className="form-group-item">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" value={cliente.nome} readOnly />
          </div>

          <div className="form-group-item">
            <label htmlFor="cep">CEP:</label>
            <input id="cep" type="text" value={cliente.cep} readOnly />
          </div>

          <div className="form-group-item">
            <label htmlFor="complemento">Complemento:</label>
            <input
              id="complemento"
              type="text"
              value={cliente.complemento}
              readOnly
            />
          </div>

          <div className="form-group-item">
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="text" value={cliente.email} readOnly />
          </div>

          <div className="button-group">
            <button
              id="voltar"
              type="button"
              className="button-primary" // Usa a classe css compartilhada
              onClick={onVoltar}
            >
              Voltar
            </button>
          </div>
        </div>
      )}

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default ClienteConsultaView;
