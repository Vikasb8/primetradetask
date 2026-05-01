import React, { useState } from "react";
import axios from "axios";
import { getApiMessage } from "../utils/apiMessage";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const login = async () => {
    // Prevent empty request
    if (!username || !password) {
      setMessage("Please enter username and password");
      setMessageType("error");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/login/",
        {
          username: username,
          password: password,
        }
      );

      localStorage.setItem("token", res.data.access);

      setMessage(res.data.message || "Login successful");
      setMessageType("success");

      // Redirect after small delay
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (err) {
      console.log(err.response?.data);
      setMessage(getApiMessage(err, "Invalid credentials"));
      setMessageType("error");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <div className="brand-block">
          <span className="brand-mark">PT</span>
          <h1>PrimeTrade</h1>
          <p>Sign in to manage your assigned tasks.</p>
        </div>

        {message && <div className={`message ${messageType}`}>{message}</div>}

        {/* IMPORTANT: value added */}
        <label>
          Username
          <input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="primary-btn" onClick={login}>Login</button>

        <p className="form-switch">
          New here?{" "}
          <a href="/register">Register</a>
        </p>
      </section>
    </main>
  );
}

export default Login;
