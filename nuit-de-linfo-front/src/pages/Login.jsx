import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../coconfor.css";
import logo from "../image/logo.webp";
import { useAuth } from "../context/Auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://148.113.45.177:3030/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        }
        navigate("/");
      })
      .then((data) => {
        if (data.status === 201 || data.status === 200) {
          login(data.response.client);
          navigate("/Quizz");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  return (
    <div className="login-div">
      <img src={logo} className="login-logo" alt="Logo" />
      <h1>Connectez-vous</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">E-mail</label>
          <br />
          <input
            type="email"
            id="login"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Mot de Passe</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="*******"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" id="submit" value="Se connecter !" />
        <p>
          Si vous n'avez pas de compte <a href="/register">inscrivez-vous</a> !
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
