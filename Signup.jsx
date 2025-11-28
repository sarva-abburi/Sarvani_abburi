import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("choose");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username.trim() &&
      email.trim() &&
      phone.trim() &&
      password.trim() &&
      role &&
      gender
    ) {
      // Save signup details (to backend or context)
      if (onSignup) {
        onSignup({ username, email, phone, password, role, gender });
      }

      // ✅ Immediately navigate to Payment page
      navigate("/payment");
    } else {
      alert("⚠ Please fill all fields");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create Account</h1>
      <p className="signup-subtitle">Join us and start streaming!</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="signup-select"
        >
          <option value="choose">Admin</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="kids">Kids</option>
          <option value="senior citizens">Senior</option>
        </select>

        {/* Gender Selection */}
        <div className="gender-group">
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Female
          </label>
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>

      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}
