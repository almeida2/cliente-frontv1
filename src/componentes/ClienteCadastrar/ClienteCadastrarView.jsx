import React, { useState } from "react";
import ClienteCadastrar from "./ClienteCadastrar";
import "./styles.css";

const ClienteCadastrarView = ({ onCancelar }) => {
  // Recebe a prop onCancelar
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    const clienteData = {
      cpf,
      nome,
      cep,
      email,
    };
    console.log(JSON.stringify(clienteData, null, 2));

    e.preventDefault();
    const cliente = { cpf, nome, cep, email };
    try {
      const result = await ClienteCadastrar(cliente);

      if (result.data) {
        setMensagem("Cliente cadastrado com sucesso");
        console.log(result.data);
      } else {
        console.log(`Erro componente cadastrar view: ${result.error}`);
        setMensagem(`Erro componente cadastrar view: ${result.error}`);
      }
    } catch (error) {
      setMensagem(`Erro não esperado cadastrar view: ${error.message}`);
    }
  };

  return (
    <div className="cliente-cadastrar-view">
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <div className="title-cadastrar-view">Cadastrar Clientes</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf"> CPF: </label>
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
          <label htmlFor="email">e-mail:</label>
          <input
            id="email"
            name="email"
            data-testid="email"
            type="text"
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
            id="cancelar"
            type="button"
            className="button"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
      {mensagem && <p data-testid="mensagem">{mensagem}</p>}
    </div>
  );
};

export default ClienteCadastrarView;
