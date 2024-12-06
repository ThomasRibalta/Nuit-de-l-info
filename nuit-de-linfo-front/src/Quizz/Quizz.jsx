import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Quizz() {
  //const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const { number } = useParams();
  const root = useLocation();

  useEffect(() => {
    console.log("Quizz");
    fetch("http://localhost:3030/quizz/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const Send = function (response) {
    fetch("http://localhost:3030/quizz/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then((data) => data);
  };
  return (
    <>
      <div>
        <div>
          <h1>{}</h1>
          <button onClick={Send("True")}>Vrai</button>
          <button onClick={Send("False")}>Faux</button>
        </div>
      </div>
    </>
  );
}

export default Quizz;
