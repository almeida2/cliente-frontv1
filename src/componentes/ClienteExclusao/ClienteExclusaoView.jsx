import React from "react";
import { useNavigate } from "react-router-dom";

// Remova a importação do Container, pois não é necessária aqui
function ClienteExclusaoView({ cpf, setCpf, loading, mensagem, onSubmit }) {
  const navigate = useNavigate();
  const handleBackToMenu = () => {
    navigate("/");
  };

  return (
    <>
      <div className="top-bar">Sistema Integrado de Gestão</div>
      <div className="title-consultar-view">Consultar Cliente por CPF</div>
      <div className="form-container">
        <h2>Excluir Cliente</h2>
        <form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
          <div className="form-group">
            <div className="form-group-item"></div>
            <div style={{ marginBottom: 8 }}>
              <input
                id="cpfInput"
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite o CPF (somente números ou formatado)"
                disabled={loading}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 8,
                  marginTop: 4,
                }}
              />
            </div>
          </div>
          <div className="button-group">
            <div className="button-group-item"></div>
          
          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Excluindo..." : "Excluir"}
            </button>
            <button type="button" className="button" onClick={handleBackToMenu} disabled={loading}>
              Voltar
            </button>
          </div>
          </div>

          {mensagem && (
            <div
              role="status"
              style={{
                marginTop: 12,
                padding: 8,
                borderRadius: 4,
                background: mensagem.tipo === "erro" ? "#ffe5e5" : "#e6ffe6",
                color: mensagem.tipo === "erro" ? "#900" : "#060",
              }}
            >
              {mensagem.texto}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default ClienteExclusaoView;
