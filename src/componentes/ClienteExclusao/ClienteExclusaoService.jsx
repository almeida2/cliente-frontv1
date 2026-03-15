const ClienteExclusaoService = {
  excluir: async (cpf) => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/clientes/${cpf}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp.ok) {
        const errText = await resp.text().catch(() => resp.statusText);
        return {
          error: errText || `Erro ${resp.status}`,
          status: resp.status,
        };
      }

      return { success: true };
    } catch (err) {
      return {
        error: err.message || "Erro de rede",
        networkError: true,
      };
    }
  },
};

export default ClienteExclusaoService;
