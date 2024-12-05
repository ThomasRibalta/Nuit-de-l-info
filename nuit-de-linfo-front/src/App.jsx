import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Quizz/Acceuil.jsx";
import Quizz from "./Quizz/Quizz.jsx";
import LoginForm from "./pages/Login.jsx";
import RegisterForm from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Quizz" element={<Acceuil />}></Route>
        <Route path="/Quizz/:number" element={<Quizz />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
