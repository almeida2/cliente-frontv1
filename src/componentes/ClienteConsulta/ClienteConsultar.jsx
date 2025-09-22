async function ClienteConsultar() {
  const API_URL = "http://localhost:8081/api/v1/clientes/all";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      // If the response is not OK, read the error message from the JSON body
      const errorData = await response
        .json()
        .catch(() => ({ message: "Erro desconhecido" }));

      // Return a structured error object instead of throwing an error
      return {
        success: false,
        error: errorData.message || "Erro HTTP: " + response.status,
      };
    }

    const result = await response.json();

    if (result.status === "success" && result.data) {
      return { success: true, data: result.data };
    } else {
      // Return a structured error object for an unexpected API response format
      return {
        success: false,
        error:
          result.message ||
          "A resposta da API não contém a lista de clientes esperada.",
      };
    }
  } catch (error) {
    console.error("Erro no serviço de consulta de clientes:", error);
    // Return a structured error object for network or other unexpected errors
    return {
      success: false,
      error:
        "Não foi possível carregar os dados dos clientes. " + error.message,
    };
  }
}
export default ClienteConsultar;
