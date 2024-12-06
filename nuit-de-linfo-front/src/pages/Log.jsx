import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../coconfor.css";

function LogViewer() {
  const [logs, setLogs] = useState([]); // Initialisation des logs
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://148.113.45.177:3030/logs", {
          credentials: "include",
        });
        if (!response.ok) {
          navigate("/");
          throw new Error("Failed to fetch logs");
        }
        const data = await response.json();

        if (Array.isArray(data.response.log)) {
          setLogs(data.response.log);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error(error);
        setError("❌ Failed to fetch logs from server");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="log-container">
      <div className="logchat-box">
        {loading && <div className="log Warning">⚠️ Loading logs...</div>}
        {error && <div className="log Error">{error}</div>}
        {!loading && !error && logs.length === 0 && (
          <div className="log Warning">⚠️ No logs available</div>
        )}
        {!loading &&
          !error &&
          logs.map((log, index) => (
            <div key={index} className={`log ${log.type}`}>
              <h4>{log.content}</h4>
              <p>{log.createdAt}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LogViewer;
