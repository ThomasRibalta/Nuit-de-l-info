import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../coconfor.css";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const response = await fetch("http://148.113.45.177:3030/user", {
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        setUserData(data.response);
      } else {
        navigate("/");
        throw new Error(data.message || "Une erreur est survenue");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profil de {userData.username}</h1>
      <div className="profile-info">
        <p>
          <strong>ID:</strong> {userData._id}
        </p>
        <p>
          <strong>Nom d'utilisateur:</strong> {userData.username}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Rôle:</strong> {userData.role}
        </p>
        <p>
          <strong>XP:</strong> {userData.xp}
        </p>
        <p>
          <strong>Achievements:</strong>{" "}
          {userData.achievements.length > 0
            ? userData.achievements.join(", ")
            : "Aucun"}
        </p>
        <p>
          <strong>Titres:</strong>{" "}
          {userData.titles.length > 0 ? userData.titles.join(", ") : "Aucun"}
        </p>
      </div>
    </div>
  );
}

export default Profile;
