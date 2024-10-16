/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { username },
        {
          withCredentials: true, // This allows the session cookie to be sent
        }
      );
      setUser(response.data.data); // Set the user in the parent component
      setError("");
    } catch (err) {
      setError(err.response?.data || "Error logging in");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
