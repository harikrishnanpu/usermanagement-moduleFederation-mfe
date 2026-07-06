import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, getErrorMessage } from "../api";
import { authStore } from "host/store";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      authStore.setAuth(data.user, data.token);
      navigate("/profile");
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to="signup">Go to Signup</Link>
    </div>
  );
}

export default Login;
