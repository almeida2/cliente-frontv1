// Componente de visualização
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
          setCidade(response.data.cidade || '');

        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  return (
    <div className="cliente-cadastrar-view">
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <h1 className="title-cadastrar-view">Cadastrar Clientes</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-row">
            <label className="form-label" htmlFor="cpf">CPF</label>
            <input
              className="form-input"
              id="cpf"
              name="cpf"
              data-testid="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="nome">Nome Completo</label>
            <input
              className="form-input"
              id="nome"
              name="nome"
              data-testid="nome"
              type="text"
              placeholder="Digite o nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="cep">CEP</label>
            <input
              className="form-input"
              id="cep"
              name="cep"
              data-testid="cep"
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleCepBlur}
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="email">Email Corporativo</label>
            <input
              className="form-input"
              id="email"
              name="email"
              data-testid="email"
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="address-row">
            <div className="form-row">
              <label className="form-label" htmlFor="endereco">Logradouro</label>
              <input
                className="form-input"
                id="endereco"
                name="endereco"
                data-testid="endereco"
                type="text"
                placeholder="Rua, Av, etc."
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="bairro">Bairro</label>
              <input
                className="form-input"
                id="bairro"
                name="bairro"
                data-testid="bairro"
                type="text"
                placeholder="Ex: Centro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cidade">Cidade</label>
              <input
                className="form-input"
                id="cidade"
                name="cidade"
                data-testid="cidade"
                type="text"
                placeholder="Ex: São Paulo"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row form-grid-full-width">
            <label className="form-label" htmlFor="complemento">Complemento</label>
            <input
              className="form-input"
              id="complemento"
              name="complemento"
              data-testid="complemento"
              type="text"
              placeholder="Apto, Bloco, Travessa, etc."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              required
            />
          </div>

          <div className="button-group form-grid-full-width">
            <button id="voltar" type="button" className="button" onClick={handleVoltar}>
              Cancelar
            </button>
            <button id="confirmar" type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>

        {mensagem && (
          <div className={`mensagem-feedback ${mensagem.toLowerCase().includes('erro') ? 'error' : 'success'}`} data-testid="mensagem">
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClienteCadastrarView;

