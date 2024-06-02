import "./register.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const registerWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/"); // Redirect to home page after registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={registerWithEmailAndPassword}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
