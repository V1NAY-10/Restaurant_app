import { useState } from "react";
import { loginUser } from "../api/authApi";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      console.log("Logged in user:", res.data.user);
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New user?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
