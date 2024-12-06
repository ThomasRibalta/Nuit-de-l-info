import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../coconfor.css";
import logo from "../image/logo.webp";
import { useAuth } from "../context/Auth";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeCGU, setAgreeCGU] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeCGU) {
      alert("Vous devez accepter les CGU.");
    } else {
      fetch("http://148.113.45.177:3030/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200 || response.status === 201) {
            return response.json();
          }
          navigate("/register");
        })
        .then((data) => {
          if (data.status === 201 || data.status === 200) {
            login(data.response.client);
            navigate("/Quizz");
          } else {
            navigate("/register");
          }
        })
        .catch((error) => {
          navigate("/register");
        });
    }
  };

  return (
    <div className="login-div">
      <img src={logo} className="login-logo" alt="Logo" />
      <h1>S'enregistrer</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="confirmPassword">Entrez username</label>
          <br />
          <input
            type="text"
            id="confirmPassword"
            placeholder="ex: Jean"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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

        <div>
          <input
            type="checkbox"
            id="agreeCGU"
            required
            checked={agreeCGU}
            onChange={(e) => setAgreeCGU(e.target.checked)}
          />
          <label htmlFor="agreeCGU">
            J'accepte les <a href="/cgu">CGU</a>
          </label>
          <br />
        </div>

        <input type="submit" id="submit" value="S'enregistrer !" />
      </form>
    </div>
  );
};

export default RegisterForm;
