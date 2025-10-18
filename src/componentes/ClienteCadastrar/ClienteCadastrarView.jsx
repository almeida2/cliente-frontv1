import React from "react";
import "./styles.css";

const ClienteCadastrarView = ({
  cpf,
  nome,
  cep,
  complemento,
  email,
  setCpf,
  setNome,
  setCep,
  setComplemento,
  setEmail,
  handleSubmit,
  handleVoltar,
  mensagem,
}) => {
  return (
    <div className="cliente-cadastrar-view">
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <div className="title-cadastrar-view">Cadastrar Clientes</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            name="cpf"
            data-testid="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            data-testid="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            name="cep"
            data-testid="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="complemento">Complemento:</label>
          <input
            id="complemento"
            name="complemento"
            data-testid="complemento"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            data-testid="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="button-container1">
          <button id="confirmar" type="submit" className="button">
            Confirmar
          </button>
          <button
            id="voltar"
            type="button"
            className="button"
            onClick={handleVoltar}
          >
            Voltar
          </button>
        </div>
      </form>
      {mensagem && <p data-testid="mensagem">{mensagem}</p>}
    </div>
  );
};

export default ClienteCadastrarView;
