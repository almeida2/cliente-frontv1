const API_BASE_URL = "http://localhost:8081/api/v1";

/************************************************************************* */
/* Serviço logica de negocios e comunicacao com a API                      */
/* define a url base, centraliza a configuracao do endpoint                */
/* logica de validacao e tratamento de erros                               */
/************************************************************************* */
const ClienteService = {
  cadastrar: async (clienteData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Erro ao cadastrar cliente");
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      return { error: error.message };
    }
  },

  // Outros métodos do serviço podem ser adicionados
  // consultar, excluir, atualizar, etc.
};

export default ClienteService;
