import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Quizz() {
  const navigate = useNavigate();
  let { number } = useParams();
  const root = useLocation();
	const [data, setData] = useState({});

	useEffect(()=>{ fetch('http://localhost:3030/quizz/' + number, {
		method: 'GET', // ou 'POST', 'PUT', 'DELETE', etc.
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then((data) => {if (data == false) navigate('/Quizz/') ; else setData(data.response.rep)})},[number])
	const Send = function(response){
		fetch('http://localhost:3030/quizz/' + number, {		
			method: 'POST',
			body : JSON.stringify({response : response}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then((data) => {if (data == false) navigate('/Quizz/'); 
			else if (data.response.result == true)
				console.log("good rep");
			else
				console.log("Faux")
			if (data.response.result == false || data.response.res.response == false)
				console.log(data.response.rep.explication);})
		console.log("")
		number++;
		navigate('/Quizz/' + (parseInt(number)))}
  return (	
		<>
		<div>
		<div>
			<h1>{data.question}</h1>
			<button onClick={() => Send("True")}>Vrai</button>
			<button onClick={() => Send("False")}>Faux</button>

		</div>
		</div>
		</>
	
  )
}

export default Quizz;
