import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Quizz() {
  const navigate = useNavigate();
  let { number } = useParams();
  const root = useLocation();
	const [data, setData] = useState({});
	const [ratio, setRatio] = useState({});

	useEffect(()=>{ fetch('http://localhost:3030/quizz/' + number, {
		method: 'GET', // ou 'POST', 'PUT', 'DELETE', etc.
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then((data) => {console.log(data);if (data == false) navigate('/Quizz/') ; else setData(data.response.rep);setRatio(data.response.ratio)})},[number])
	const Send = function(response){
		fetch('http://localhost:3030/quizz/' + number, {		
			method: 'POST',
			body : JSON.stringify({response : response}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then((data) => {console.log(data); if (data == false) navigate('/Quizz/'); 
			else if (data.response.result == true)
				console.log("good rep");
			else
				console.log("Faux")
			if (data.response.result == false || data.response.res.response == false)
				console.log(data.response.rep.explication);})
		console.log("")
		number++;
		navigate('/Quizz/' + (parseInt(number)))}
	const Picture = function(ratio){
		console.log("ratio",ratio)
		if (ratio >= 0 && ratio < 25)
			return im1
		else if (ratio >= 25 && ratio < 50)
			return im2
		else if (ratio >= 50 && ratio < 75)
			return im3
		else 
			return im4
	}
  return (	
		<>
		<div>
		<div>
			<h1>{data.question}</h1>
			<button onClick={() => Send("True")}>Vrai</button>
			<button onClick={() => Send("False")}>Faux</button>
			<img src={() => Picture(data.ratio)}  alt="Description de l'image" />
		</div>
		</div>
		</>
	
  )
}

export default Quizz;
