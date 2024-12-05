import React, { useState } from "react";
import "../coconfor.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Mot de passe: ", password);
  };

  return (
    <div className="login-div">
      <img src="image/logo.webp" className="login-logo" alt="Logo" />
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
      </form>
    </div>
  );
};

export default LoginForm;
