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
      <input
        type="username"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default AdminLogin;
