// ...existing code...
import React from "react";
import "./styles.css";
import ClienteService from "./ClienteService";  
const ClienteCadastrarView = ({
  cpf,
  nome,
  cep,
  endereco,
  bairro,
  cidade,
  complemento,
  email,
  setCpf,
  setNome,
  setCep,
  setEndereco,
  setBairro,
  setCidade,
  setComplemento,
  setEmail,
  handleSubmit,
  handleVoltar,
  mensagem,
}) => {
      const handleCepBlur = async (e) => {
    const cepValue = e.target.value.replace(/\D/g, '');
    
    if (cepValue.length === 8) {
      try {
        const response = await ClienteService.buscarEnderecoPorCep(cepValue);
        
        if (response.data) {
          setEndereco(response.data.logradouro || '');
          setBairro(response.data.bairro || '');
          setCidade(response.data.cidade || ''); // Agora usando o campo cidade mapeado corretamente
          setComplemento(response.data.complemento || '');
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  return (
    <div className="cliente-cadastrar-view">
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <div className="title-cadastrar-view">Cadastrar Clientes</div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-row">
          <label className="form-label" htmlFor="cpf">
            CPF:
          </label>
          <input
            className="form-input"
            id="cpf"
            name="cpf"
            data-testid="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="nome">
            Nome:
          </label>
          <input
            className="form-input"
            id="nome"
            name="nome"
            data-testid="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
        <label className="form-label" htmlFor="cep">
          CEP:
        </label>
        <input
          className="form-input"
          id="cep"
          name="cep"
          data-testid="cep"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onBlur={handleCepBlur}
          required
        />
      </div>

        {/* Endereço - mantém rótulos ao lado dos inputs dentro de cada coluna */}
        <div className="address-row">
          <div className="address-item">
            <div className="form-row">
              <label className="form-label" htmlFor="endereco">
                Endereço:
              </label>
              <input
                className="form-input"
                id="endereco"
                name="endereco"
                data-testid="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
          </div>

          <div className="address-item">
            <div className="form-row">
              <label className="form-label" htmlFor="bairro">
                Bairro:
              </label>
              <input
                className="form-input"
                id="bairro"
                name="bairro"
                data-testid="bairro"
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
          </div>

          <div className="address-item">
            <div className="form-row">
              <label className="form-label" htmlFor="cidade">
                Cidade:
              </label>
              <input
                className="form-input"
                id="cidade"
                name="cidade"
                data-testid="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="complemento">
            Complemento:
          </label>
          <input
            className="form-input"
            id="complemento"
            name="complemento"
            data-testid="complemento"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
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
// ...existing code...
