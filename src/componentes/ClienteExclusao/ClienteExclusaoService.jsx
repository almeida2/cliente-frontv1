const ClienteExclusaoService = {
  excluir: async (cpf) => {
    try {
      const resp = await fetch(`https://cliente-backv2-a51a1eaa05cd.herokuapp.com/api/v1/clientes/${cpf}`, {
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
