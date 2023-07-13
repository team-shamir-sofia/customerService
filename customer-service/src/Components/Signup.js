import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function toLogin() {
    navigate("/");
  }

  function signup() {
    axios
      .post("http://localhost:8000/user/signup", {
        username,
        email,
        password,
        phone,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/userinput");
          console.log("Token Saved in local storage");
        } else {
          alert("Enter valid email and password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Customer Hub</h1>
      <h3>Create an account</h3>
      <div className="form">
        <div className="input-container-one">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-container-one">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-container-one">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="input-container-one">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            placeholder="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            signup();
          }}
        >
          Signup
        </button>
      </div>

      <p>
        You already have an account? {""}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            toLogin();
          }}
        >
          Login
        </a>{" "}
        {""}
      </p>
    </div>
  );
}

export default Signup;
