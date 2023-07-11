import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post("http://localhost:8000/admin/login", {
        username,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          navigate("/adminpage");
        } else {
          alert(data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(" An error occurred. Please try later");
      });
  }

  return (
    <div className="App">
      <h1 className="admin-header">Customer Hub</h1>
      <h2>Admin page</h2>
      <h3>Welcome, {username}!</h3>
      <div className="form">
        <div className="input-container-one">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
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
        <button
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
