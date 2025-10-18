import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClienteConsultarService from "./ClienteConsultarService"; // serviço existente que retorna { success, data } ou { success: false, error }
import ClienteConsultarView from "./ClienteConsultarView";
//Container mantém apenas gerenciamento de estado e lógica de UI
function ClienteConsultarContainer() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await ClienteConsultarService();

        if (!mounted) return;

        if (result && result.success) {
          setClientes(result.data || []);
        } else {
          setError(result ? result.error : "Erro ao obter dados");
          setClientes([]);
        }
      } catch (err) {
        if (!mounted) return;
        console.error("Erro no ClienteConsultarContainer:", err);
        setError(err.message || "Não foi possível realizar a consulta.");
        setClientes([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const handleVoltar = () => {
    navigate("/");
  };

  return (
    <ClienteConsultarView
      clientes={clientes}
      loading={loading}
      error={error}
      onVoltar={handleVoltar}
    />
  );
}

export default ClienteConsultarContainer;
