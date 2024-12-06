import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Quizz_style.css";
import im1 from "../image/1.jpg";
import im2 from "../image/2.jpg";
import im3 from "../image/3.jpg";
import im4 from "../image/4.jpg";

function Quizz() {
  const navigate = useNavigate();
  let { number } = useParams();
  const root = useLocation();
  const [data, setData] = useState({});
  const [ratio, setRatio] = useState({});
  const [currentImage, setCurrentImage] = useState(im1); // Image affichée
  const [fadeClass, setFadeClass] = useState(""); // Classe pour l'effet de fondu
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    color: "",
  }); // État de la pop-up

  useEffect(() => {
    fetch("http://148.113.45.177:3030/quizz/" + number, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.status !== 200) {
          navigate("/login");
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log("data useeffect", data);
        if (!data.response.rep) navigate("/Quizz/");
        else setData(data.response.rep);
        setRatio(data.response.ratio);
      });
  }, [number]);

  const Send = function (response) {
    fetch("http://148.113.45.177:3030/quizz/" + number, {
      method: "POST",
      body: JSON.stringify({ response: response }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("normal ", data);

        if (data === false) {
          navigate("/Quizz/");
          return;
        }

        const isCorrect = data.response.result;
        const explication =
          data.response.rep.explication || "Pas d'explication disponible.";

        // Afficher la pop-up
        setPopup({
          visible: true,
          message: isCorrect
            ? `Correct ! ${explication}`
            : `Incorrect ! ${explication}`,
          color: isCorrect ? "green" : "red",
        });

        // Masquer la pop-up après 2 secondes
        setTimeout(() => {
          setPopup({ visible: false, message: "", color: "" });
        }, 2000);

        // Navigation vers la question suivante
        number++;
        navigate("/Quizz/" + parseInt(number));
      });
  };

  const Picture = function (ratio) {
    console.log("ratio", ratio);
    if ((ratio >= 0 && ratio < 25) || ratio === undefined) return im1;
    else if (ratio >= 25 && ratio < 50) return im2;
    else if (ratio >= 50 && ratio < 75) return im3;
    else return im4;
  };

  // Effet de changement d'image
  useEffect(() => {
    const newImage = Picture(ratio);
    console.log("newImage", newImage);
    console.log("currentImage", currentImage);
    if (newImage !== currentImage) {
      setFadeClass("fade-out"); // Début de l'animation
      setTimeout(() => {
        setCurrentImage(newImage); // Changement d'image
        setFadeClass("fade-in"); // Fin de l'animation
      }, 300); // Durée de l'effet en ms
    }
  }, [ratio]);

  return (
    <>
      <div className="app">
        <div className="div_quizz">
          <h1>{data.question}</h1>
          <img
            src={currentImage}
            alt="Description de l'image"
            className={`image ${fadeClass}`}
            style={{ width: "150px" }}
          />
        </div>
        <div className="rep_quizz">
          <button onClick={() => Send("true")}>Vrai</button>
          <button onClick={() => Send("false")}>Faux</button>
        </div>

        {/* Pop-up */}
        {popup.visible && (
          <div
            className="popup"
            style={{
              backgroundColor: popup.color,
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              position: "fixed",
              top: "90px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            {popup.message}
          </div>
        )}
      </div>
    </>
  );
}

export default Quizz;
