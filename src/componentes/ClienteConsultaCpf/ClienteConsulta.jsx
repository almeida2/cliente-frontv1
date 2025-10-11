import React, { useState } from "react";
import ClienteConsultarView from "./ClienteConsultarView";

const ClienteConsulta = () => {
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const consultarCliente = async () => {
    setMensagem("");
    setCliente(null);

    const payload = {
      cpf: cpf,
      nome: "",
      cep: "",
      email: "",
    };

    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/clientes/cpf",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setCliente(data.data);
        setMensagem(data.message);
      } else {
        setMensagem(data.message);
      }
    } catch (error) {
      setMensagem("Erro ao consultar cliente. Tente novamente mais tarde.");
    }
  };

  const handleVoltar = () => {
    setCpf("");
    setCliente(null);
    setMensagem("");
  };

  return (
    <ClienteConsultarView
      cpf={cpf}
      setCpf={setCpf}
      cliente={cliente}
      mensagem={mensagem}
      onConsultar={consultarCliente}
      onVoltar={handleVoltar}
    />
  );
};

export default ClienteConsulta;
