/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Registration.jsx
import React, { useState } from "react";
import axios from "axios";

const Registration = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // Handle registration
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        { username },
        {
          withCredentials: true, // Include credentials (session) in the request
        }
      );

      // Set the user in the parent component if registration is successful
      setUser(response.data.user);

      // Display success message
      setMessage(response.data.message);
    } catch (err) {
      // Display error message if the user already exists or there's another error
      if (err.response && err.response.status === 400) {
        setMessage(err.response.data.message); // Username already exists
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleRegister}>Register</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default Registration;
