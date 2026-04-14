import { useState } from "react";
import API from "../api/api";
 import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        username: email,
        password,
      });

      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <center>
      <div className={styles.Container}>
        <h2 className={styles.hContainer}>Login</h2>

        {error && <div className="alert alert-danger ">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-primary w-100 mb-3">Login</button>
        </form>
      </div>
    </center>
  );
};

export default Login;
