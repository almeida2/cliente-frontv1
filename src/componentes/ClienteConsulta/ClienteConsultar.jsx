async function ClienteConsultar() {
  const API_URL = "http://localhost:8081/api/v1/clientes/all";

  try {
    const response = await fetch(API_URL);

    // Verifica se a resposta da rede foi bem-sucedida (status 200-299)
    if (!response.ok) {
      // Se a resposta não for OK, lança um erro com o status e a mensagem
      const errorData = await response
        .json()
        .catch(() => ({ message: "Erro desconhecido" }));
      throw new Error(
        `Erro HTTP! Status: ${response.status} - ${
          errorData.message || response.statusText
        }`
      );
    }

    const result = await response.json();

    // Novo passo: verificar se a resposta é bem-sucedida e se a propriedade 'data' existe
    if (result.status === "success" && result.data) {
      // Retorna a propriedade 'data', que é o array de clientes
      return result.data;
    } else {
      // Se a resposta não tiver a estrutura esperada ou status de sucesso,
      // lança um erro com a mensagem da API ou uma mensagem padrão.
      throw new Error(
        result.message ||
          "A resposta da API não contém a lista de clientes esperada."
      );
    }
  } catch (error) {
    console.error("Erro no serviço de consulta de clientes:", error);
    // Lança um erro mais amigável para ser tratado no componente de apresentação
    throw new Error(
      "Não foi possível carregar os dados dos clientes. Por favor, tente novamente mais tarde. " +
        error.message
    );
  }
}
export default ClienteConsultar;
