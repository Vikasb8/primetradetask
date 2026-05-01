import React, { useState } from "react";
import axios from "axios";
import { getApiMessage } from "../utils/apiMessage";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const register = async () => {
    if (!username || !password) {
      setMessage("Fill all fields");
      setMessageType("error");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/register/",
        {
          username: username,
          password: password,
          role: "user",
        }
      );

      setMessage(res.data.message || "Registered successfully");
      setMessageType("success");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (err) {
      console.log(err.response?.data);
      setMessage(getApiMessage(err, "Registration failed"));
      setMessageType("error");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <div className="brand-block">
          <span className="brand-mark">PT</span>
          <h1>Create Account</h1>
          <p>Join PrimeTrade and start tracking tasks.</p>
        </div>

        {message && <div className={`message ${messageType}`}>{message}</div>}

        <label>
          Username
          <input
            placeholder="Choose username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="primary-btn" onClick={register}>Register</button>

        <p className="form-switch">
          Already registered?{" "}
          <a href="/">Login</a>
        </p>
      </section>
    </main>
  );
}

export default Register;
