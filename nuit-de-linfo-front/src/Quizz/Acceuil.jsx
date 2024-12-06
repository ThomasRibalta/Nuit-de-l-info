import { useNavigate } from "react-router-dom";

function Acceuil() {
  const navigate = useNavigate();

  const start = function () {
    navigate("/Quizz/1");
  };

  return (
    <>
      <div
        style={{
          top: "100px",
          position: "relative",
          backgroundColor: "#218358",
          padding: "20px",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Quizz</h1>
        <div
          style={{
            margin: "20px 0",
            padding: "10px",
            backgroundColor: "#3CAEA3",
            borderRadius: "8px",
            fontSize: "16px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Ce questionnaire porte sur le corps humain et l’eau des océans. Le but
          est d'améliorer l’image de l’eau et de l’humain en fonction de vos
          réponses.
        </div>
        <button
          onClick={start}
          style={{
            top: "50px",
            position: "relative",
            width: "250px",
            height: "50px",
            backgroundColor: "#125D98",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Commencer le quizz
        </button>
      </div>
    </>
  );
}

export default Acceuil;
