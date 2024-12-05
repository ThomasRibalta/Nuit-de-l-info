import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Quizz/Acceuil.jsx'
import Quizz from './Quizz/Quizz.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
			<Routes>
				<Route path="/Quizz" element={<Acceuil/>}></Route>
				<Route path="/Quizz/:number" element={<Quizz/>}></Route>
				</Routes>
    </>
  )
}

export default App
