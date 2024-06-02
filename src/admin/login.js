import "./Login.css";
import { useState, useEffect } from "react";
import image from "../assets/backup.svg";
import MaterialTable, { MTableToolbar } from "material-table";
import db from "../firebase";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const signInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={signInWithEmailAndPassword}>
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
        <button type="submit">Sign In</button>
      </form>
     

    </div>
  );
};

export default SignIn;

