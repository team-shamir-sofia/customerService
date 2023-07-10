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
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signup();
        }}
      >
        Signup
      </button>

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




// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");

//   function toLogin() {
//     navigate("/");
//   }

//   function signup() {
//     axios
//       .post("http://localhost:8000/user/signup", {
//         username,
//         email,
//         password,
//         phone,
//       })
//       .then((response) => {
//         if (response.data.token) {
//           localStorage.setItem("token", response.data.token);
//           navigate("/userinput");
//           console.log("Token Saved in local storage");
//         } else {
//           alert(`Error ${response.status}: ${response.message}`);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="App">
//       <h1>Customer Hub</h1>
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         type="email"
//         placeholder="email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="phone"
//         onChange={(e) => {
//           setPhone(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           signup();
//         }}
//       >
//         Signup
//       </button>

//       <p>
//         You already have an account? {""}
//         <a
//           href="/"
//           onClick={(e) => {
//             e.preventDefault();
//             toLogin();
//           }}
//         >
//           Login
//         </a>{" "}
//         {""}
//       </p>
//     </div>
//   );
// }

// export default Signup;


// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");

//   function toLogin() {
//     navigate("/");
//   }

//   function signup() {
//     axios
//       .post("http://localhost:8000/user/signup", {
//         username,
//         email,
//         password,
//         phone,
//       })
//       .then((response) => {
//         if (response.data.token) {
//           localStorage.setItem("token", response.data.token);
//           navigate("/userinput");
//           console.log("Token Saved in local storage");
//           // console.log(response.data.token);
//           // console.log(data.token);
//         } else {
//           alert(`Error ${response.status}: ${response.message}`);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="App">
//       <h1>Customer Hub</h1>
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         type="email"
//         placeholder="email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="phone"
//         onChange={(e) => {
//           setPhone(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           signup();
//         }}
//       >
//         Signup
//       </button>

//       <p>
//         You already have an account? {""}
//         <a
//           href="/"
//           onClick={(e) => {
//             e.preventDefault();
//             toLogin();
//           }}
//         >
//           Login
//         </a>{" "}
//         {""}
//       </p>
//     </div>
//   );
// }

// export default Signup;
