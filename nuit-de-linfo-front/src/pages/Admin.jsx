import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://148.113.45.177:3030/metrics", {
          credentials: "include",
        }); // Remplacez l'URL selon vos configurations
        if (!response.ok) {
          navigate("/");
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des métriques :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return <div>Chargement des métriques...</div>;
  }

  return (
    <div
      className="container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1>Tableau de bord des métriques</h1>
      {metrics.length === 0 ? (
        <p>Aucune métrique disponible.</p>
      ) : (
        <div>
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <h3>{metric.name}</h3>
              <p>
                <strong>Description :</strong> {metric.help}
              </p>
              <p>
                <strong>Type :</strong> {metric.type}
              </p>
              <div>
                <h4>Valeurs :</h4>
                {metric.values && metric.values.length > 0 ? (
                  <ul>
                    {metric.values.map((value, idx) => (
                      <li key={idx}>
                        <strong>Labels:</strong> {JSON.stringify(value.labels)}{" "}
                        <strong>Valeur:</strong> {value.value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Aucune donnée collectée pour cette métrique.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
