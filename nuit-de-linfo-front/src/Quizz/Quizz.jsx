import { useNavigate, useParams, useEffect, useLocation} from 'react-router-dom';

function Quizz() {
  //const [count, setCount] = useState(0)
	const navigate = useNavigate()
	const { number } = useParams();
	const root = useLocation();

	useEffect() = fetch('https://', {
		method: 'GET', // ou 'POST', 'PUT', 'DELETE', etc.
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => data)
	.catch(error => err);

	const Send = function(response){
		fetch('https://', {
			method: 'POST', // ou 'POST', 'PUT', 'DELETE', etc.
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => data)
		.catch(error => err);
	}
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
	
  )
}

export default Quizz;