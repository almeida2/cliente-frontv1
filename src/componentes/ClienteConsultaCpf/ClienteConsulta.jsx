import React, { useState } from "react";
import ClienteConsultaView from "./ClienteConsultaView";

const ClienteConsulta = () => {
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState(null);
  const [mensagem, setMensagem] = useState(""); // Mensagem de sucesso ou erro retornada da API

  // Função para consultar o cliente pelo CPF

  const consultarCliente = async () => {
    setMensagem("");
    setCliente(null);

    const payload = {
      cpf: cpf,
      nome: "",
      cep: "",
      email: "",
    };
    // Monta a mensagem de requisição
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
        setMensagem(data.message); // mensagem retornada da API.
        console.log(data.message);
      } else {
        setMensagem(data.message);
      }
    } catch (error) {
      console.error("Erro ao consultar cliente:", error);
      setMensagem("Erro ao consultar cliente. Tente novamente mais tarde.");
    }
  };

  const handleVoltar = () => {
    setCpf("");
    setCliente(null);
    setMensagem("");
  };

  return (
    <ClienteConsultaView
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
