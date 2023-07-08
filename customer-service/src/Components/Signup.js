import { useNavigate } from'react-router-dom';
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toLogin() {
    navigate("/");
  }

  function signup() {
    axios.post("http://localhost:8000/user/signup", {
      email,
      password,
    }).then(({ data }) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/profile");
        console.log(data);
        // console.log(data.token);

      } else {
        alert(data.msg);
      }
    })
  }


return (
  <div className="App">

    <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={()=> {signup()}}>Signup</button>

    <p>
      You already have an account
      <button href='/'
    onClick={()=> {
      toLogin()
      }}
      >Login</button>
    </p>
    
  </div>
)
}

export default Signup;