import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClienteConsultaCpfView from "./ClienteConsultaCpfView";
import ClienteConsultaCpfService from "./ClienteConsultaCpfService";

//Container mantém apenas gerenciamento de estado e lógica de UI
const ClienteConsultaCpfContainer = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const consultarCliente = async () => {
    setMensagem("");
    setCliente(null);

    const cpfOnly = (cpf || "").replace(/\D/g, "");
    if (cpfOnly.length !== 11) {
      setMensagem("Informe um CPF válido (11 dígitos).");
      return;
    }

    try {
      const result = await ClienteConsultaCpfService.consultarPorCpf(cpfOnly);

      if (result.networkError) {
        setMensagem("Falha de conexão com o servidor.");
        return;
      }

      if (result.error) {
        setMensagem(result.error);
        return;
      }

      // o backend aqui retorna obj com status/message/data conforme seu exemplo anterior
      if (result.data?.status === "success") {
        setCliente(result.data.data);
        setMensagem(result.data.message || "");
      } else {
        setMensagem(result.data?.message || "Cliente não encontrado.");
      }
    } catch (err) {
      setMensagem("Erro inesperado: " + err.message);
    }
  };

  const handleVoltar = () => {
    // navegar para a home; se preferir apenas limpar, use reset de estado
    navigate("/");
  };

  return (
    <ClienteConsultaCpfView
      cpf={cpf}
      setCpf={setCpf}
      cliente={cliente}
      mensagem={mensagem}
      onConsultar={consultarCliente}
      onVoltar={handleVoltar}
    />
  );
};

export default ClienteConsultaCpfContainer;
// ...existing code...
