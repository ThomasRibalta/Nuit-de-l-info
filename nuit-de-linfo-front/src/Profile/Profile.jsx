
function Profile(){
	useEffect(()=>{ fetch('http://localhost:3030/user', {
		method: 'GET', // ou 'POST', 'PUT', 'DELETE', etc.
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then((data) => {console.log(data);if (data == false) navigate('/Quizz/') ; else setData(data.response.rep);setRatio(data.response.ratio)})},[number])
}