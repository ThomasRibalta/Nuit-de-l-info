import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Quizz/Acceuil.jsx";
import Quizz from "./Quizz/Quizz.jsx";
import LoginForm from "./pages/Login.jsx";
import RegisterForm from "./pages/Register.jsx";
import MentionLegale from "./pages/Mention.jsx";
import Admin from "./pages/Admin.jsx";
import Cgu from "./pages/Cgu.jsx";
import Header from "./composant/Header.jsx";
import { AuthProvider, useAuth } from "./context/Auth.jsx";
import Logout from "./pages/Logout.jsx";
import Users from "./pages/Users.jsx";
import Classement from "./pages/Classement.jsx";
import LogViewer from "./pages/Log.jsx";
import Profile from "./pages/Profil.jsx";
import ContributorsPage from "./pages/Credit.jsx";

function App() {
  const { Auth } = useAuth();
  return (
    <>
      <Header Auth={Auth} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/Quizz" element={<Acceuil />}></Route>
          <Route path="/Quizz/:number" element={<Quizz />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/mention" element={<MentionLegale />}></Route>
          <Route path="/credit" element={<ContributorsPage />}></Route>
          <Route path="/cgu" element={<Cgu />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/logs" element={<LogViewer />}></Route>
          <Route path="/admin/user/:id" element={<Users />}></Route>
          <Route path="/profil" element={<Profile />}></Route>
          <Route path="/classement" element={<Classement />}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
