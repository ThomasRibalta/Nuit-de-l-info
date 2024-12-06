import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Quizz_style.css";
import im1 from "./../../public/83613ba3-d1eb-426c-adde-0ecb4beaa290.jpg";
import im2 from "./../../public/72e44373-9ace-4bdd-9222-112f8ca1383a.jpg";
import im3 from "./../../public/0b4bbf57-3174-41b5-b4ba-e09ecebafe57.jpg";
import im4 from "./../../public/e6bad030-e058-4ef3-a939-13b90e573668.jpg";

function Quizz() {
  const navigate = useNavigate();
  let { number } = useParams();
  const root = useLocation();
  const [data, setData] = useState({});
  const [ratio, setRatio] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/quizz/" + number, {
      method: "GET", // ou 'POST', 'PUT', 'DELETE', etc.
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data == false) navigate("/Quizz/");
        else setData(data.response.rep);
        setRatio(data.response.ratio);
      });
  }, [number]);
  const Send = function (response) {
    fetch("http://localhost:3030/quizz/" + number, {
      method: "POST",
      body: JSON.stringify({ response: response }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data == false) navigate("/Quizz/");
        else if (data.response.result == true) console.log("good rep");
        else console.log("Faux");
        if (
          data.response.result == false ||
          data.response.res.response == false
        )
          console.log(data.response.rep.explication);
      });
    console.log("");
    number++;
    navigate("/Quizz/" + parseInt(number));
  };
  const Picture = function (ratio) {
    console.log("ratio", ratio);
    if (ratio >= 0 && ratio < 25) return im1;
    else if (ratio >= 25 && ratio < 50) return im2;
    else if (ratio >= 50 && ratio < 75) return im3;
    else return im4;
  };
  return (
    <>
      <div className="app">
        <div style={{ top: "60px", position: "relative" }}>
          <h1>{data.question}</h1>
          <button onClick={() => Send("True")}>Vrai</button>
          <button onClick={() => Send("False")}>Faux</button>
          <img
            src={Picture(data.ratio)}
            alt="Description de l'image"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}

export default Quizz;
