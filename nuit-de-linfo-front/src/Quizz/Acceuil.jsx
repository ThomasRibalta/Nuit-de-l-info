import { useNavigate } from "react-router-dom";

function Acceuil() {
  //const [count, setCount] = useState(0)
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
        }}
      >
        <h1>Quizz</h1>
        <button
          onClick={start}
          style={{
            top: "50px",
            position: "relative",
            width: "250px",
            height: "50px",
          }}
        >
          {" "}
          Commencer le quizz{" "}
        </button>
      </div>
    </>
  );
}

export default Acceuil;
