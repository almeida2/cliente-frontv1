import React, { useState } from "react";
import ClienteExclusaoView from "./ClienteExclusaoView";
import ClienteExclusaoService from "./ClienteExclusaoService";
//Container mantém apenas gerenciamento de estado e lógica de UI
function ClienteExclusaoContainer({ onDeleteSuccess, onDeleteError }) {
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const limparMensagens = () => setMensagem(null);

  const apenasDigitos = (valor) => (valor || "").replace(/\D/g, "");

  const validarCpf = (valor) => {
    const digitos = apenasDigitos(valor);
    return digitos.length === 11;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    limparMensagens();

    if (!validarCpf(cpf)) {
      setMensagem({ tipo: "erro", texto: "CPF inválido. Informe 11 dígitos." });
      return;
    }

    const cpfNumeros = apenasDigitos(cpf);

    if (!window.confirm(`Confirma exclusão do cliente com CPF ${cpfNumeros}?`))
      return;

    setLoading(true);
    try {
      const result = await ClienteExclusaoService.excluir(cpfNumeros);

      if (result.error) {
        throw new Error(result.error);
      }

      setMensagem({ tipo: "sucesso", texto: "Cliente excluído com sucesso." });
      setCpf("");
      if (onDeleteSuccess) onDeleteSuccess(cpfNumeros);
    } catch (err) {
      setMensagem({ tipo: "erro", texto: `Falha ao excluir: ${err.message}` });
      if (onDeleteError) onDeleteError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClienteExclusaoView
      cpf={cpf}
      setCpf={setCpf}
      loading={loading}
      mensagem={mensagem}
      onSubmit={handleSubmit}
    />
  );
}

export default ClienteExclusaoContainer;
