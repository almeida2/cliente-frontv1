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
  // A prop 'onVoltar' não é mais necessária aqui, mas foi mantida
  // no botão que só aparece quando o cliente não foi consultado.
}) => {
  const navigate = useNavigate();

  // Função interna que redireciona para a página inicial (Menu)
  const handleVoltar = () => {
    navigate("/");
  };

  // Decisão sobre qual função usar:
  // - No bloco {!cliente}: Usaremos a nova função handleVoltar (ou a prop onVoltar, se preferir o controle externo)
  // - No bloco {cliente}: Usaremos a nova função handleVoltar

  return (
    <>
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <div className="title-consultar-view">Consultar Cliente por CPF</div>
      <div className="form-container">
        <h2>Consultar Cliente</h2>

        {!cliente && (
          <div className="form-group">
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
              <button className="button-primary" onClick={onConsultar}>
                Consultar
              </button>
              {/* Refatoração: Usar handleVoltar para garantir que volte para o menu */}
              <button className="button-primary" onClick={handleVoltar}>
                Voltar
              </button>
            </div>
          </div>
        )}

        {cliente && (
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
                className="button-primary"
                // ** CORREÇÃO CHAVE: Chamar a função interna handleVoltar **
                onClick={handleVoltar}
              >
                Voltar
              </button>
            </div>
          </div>
        )}

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </>
  );
};

export default ClienteConsultaView;
