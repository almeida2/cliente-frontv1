import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClienteCadastrarView from "./ClienteCadastrarView";
import ClienteService from "./ClienteService"; // container consome esse servico
//*********************************************************************************** */
//Gerenciamento de estado e coordenação entre a view e o serviço de cadastro de clientes
//O container gerencia o estado dos campos do formulário, lida com a submissão dos dados e navegação
//1-cria os estados (useState) para cada campo do formulário e para a mensagem de feedback
//2-retorna o componente de visualização (ClienteCadastrarView) passando os estados e manipuladores como props
//3-o formulario coleta os dados setCpf/setNome/setCep/setComplemento/setEmail isso atualiza os estado do container
//4-e provoca nova renderizacao da view
//*********************************************************************************** */
const ClienteCadastrarContainer = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleVoltar = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clienteData = {
      cpf,
      nome,
      cep,
      complemento,
      email,
    };

    try {
      const result = await ClienteService.cadastrar(clienteData);

      if (result.data) {
        setMensagem("Cliente cadastrado com sucesso");
        console.log(result.data);
      } else {
        console.log(`Erro: ${result.error}`);
        setMensagem(`Erro: ${result.error}`);
      }
    } catch (error) {
      setMensagem(`Erro não esperado: ${error.message}`);
    }
  };

  return (
    <ClienteCadastrarView
      cpf={cpf}
      nome={nome}
      cep={cep}
      complemento={complemento}
      email={email}
      setCpf={setCpf}
      setNome={setNome}
      setCep={setCep}
      setComplemento={setComplemento}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      handleVoltar={handleVoltar}
      mensagem={mensagem}
    />
  );
};

export default ClienteCadastrarContainer;
