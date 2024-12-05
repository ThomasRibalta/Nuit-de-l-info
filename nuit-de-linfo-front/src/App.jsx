import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Quizz/Acceuil.jsx";
import Quizz from "./Quizz/Quizz.jsx";
import LoginForm from "./pages/Login.jsx";
import RegisterForm from "./pages/Register.jsx";
import MentionLegale from "./pages/Mention.jsx";
import Admin from "./pages/Admin.jsx";
import Cgu from "./pages/Cgu.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />}></Route>
        <Route path="/Quizz" element={<Acceuil />}></Route>
        <Route path="/Quizz/:number" element={<Quizz />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/mention" element={<MentionLegale />}></Route>
        <Route path="/cgu" element={<Cgu />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
