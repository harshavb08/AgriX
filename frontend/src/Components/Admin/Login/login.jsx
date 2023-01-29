import React, { useState, useContext } from "react";
import "./login.css";
import logo from "../../../Images/AmazonLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../../store/FirebaseContext";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div >
      <section className="adminLoginContainer">
          <h2
            style={{
              color: "#558a2e",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            AgriX
          </h2>
        <div className="logincontainer">
          <div className="signinContainer">
            <p className="AdminText">Admin Panel</p>
            <p className="signInText">Sign In</p>
          </div>
          <div className="signinInputDiv">
            <div className="signinEmailInputDiv">
              <i class="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Username"
                className="usernameInput"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
            </div>
            <div className="signinPasswordInputDiv">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="passwordInput"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
            </div>
          </div>
          <Link to={"/"} className="adminLoginReturn">
            Return to home page
          </Link>
          <button className="btn btn-warning btn-login" onClick={handleLogin}
            style={{
              backgroundColor: "#85de45",
              border: "none",
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Login
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
