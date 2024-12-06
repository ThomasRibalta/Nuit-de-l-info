import { useNavigate } from 'react-router-dom';

function Acceuil() {
  //const [count, setCount] = useState(0)
	const navigate = useNavigate()

	const start = function(){
		navigate('/Quizz/1')
	}
  return (
		<>
		<div style={{top :"60px", position :"relative"}}>
			<h1>"Quizz : </h1>
		<button onClick = {start}> </button>
		</div>
		</>
	
  )
}

export default Acceuil;