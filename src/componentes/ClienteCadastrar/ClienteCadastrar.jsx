async function ClienteCadastrar(cliente) {
  try {
    const response = await fetch("http://localhost:8081/api/v1/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });

    // Se a resposta NÃO for OK, lemos o corpo para obter a mensagem de erro
    if (!response.ok) {
      // Tenta ler o JSON de erro da resposta
      const errorData = await response.json();
      console.error("Erro ao cadastrar cliente:", errorData);
      // Lança um novo erro com a mensagem do JSON
      throw new Error(errorData.message || "Erro desconhecido");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    // Retorna a mensagem de erro capturada
    return { success: false, error: error.message };
  }
}
export default ClienteCadastrar;
