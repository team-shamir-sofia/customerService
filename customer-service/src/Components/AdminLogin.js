/*import { useNavigate } from "react-router-dom";
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
      <h1>Welcome, {username}!</h1>
<<<<<<< HEAD
=======
      <input
        type="username"
        placeholder="email"
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

export default AdminLogin;*/

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
      <h1>Welcome, {username}!</h1>
>>>>>>> 493d4c0e72edb5d59896ce0639a3cacb16431fc1
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



// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import axios from "axios";

// function AdminLogin() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function login() {
//     axios
//       .post("http://localhost:8000/admin/login", {
//         username,
//         password,
//       })
//       .then(({ data }) => {
//         console.log(data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("username", data.username);
//           navigate("/adminpage");
//         } else {
//           alert(data.msg);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         alert(" An error occurred. Please try later");
//       });
//   }

//   return (
//     <div className="App">
//       <h1>Welcome, {username}!</h1>
//       <input className="admin-username"
//         type="username"
//         placeholder="username"
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input className="admin-password"
//         type="password"
//         placeholder="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button className="admin-login"
//         onClick={() => {
//           login();
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// }

// export default AdminLogin;

