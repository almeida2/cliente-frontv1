async function consultarClientes() {
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

    const data = await response.json();

    // Garante que o retorno é sempre um array.
    // Se a API retornar um único objeto, ele será envolvido em um array.
    // Se retornar null/undefined, será um array vazio.
    return Array.isArray(data) ? data : data ? [data] : [];
  } catch (error) {
    console.error("Erro no serviço de consulta de clientes:", error);
    // Lança um erro mais amigável para ser tratado no componente de apresentação
    throw new Error(
      "Não foi possível carregar os dados dos clientes. Por favor, tente novamente mais tarde."
    );
  }
}

export { consultarClientes };
