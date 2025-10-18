const API_BASE = "http://localhost:8081/api/v1";

const ClienteConsultaCpfService = {
  consultarPorCpf: async (cpf) => {
    try {
      const payload = { cpf, nome: "", cep: "", email: "" };
      const res = await fetch(`${API_BASE}/clientes/cpf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) {
        return {
          error: json?.message || res.statusText || `Erro ${res.status}`,
          status: res.status,
        };
      }
      return { data: json, status: res.status };
    } catch (err) {
      return { error: err.message || "Erro de rede", networkError: true };
    }
  },
};

export default ClienteConsultaCpfService;
