import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AdminLogin from "./Components/AdminLogin";
import AdminPage from "./Components/AdminPage";
import Userinput from "./Components/UserInput";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/userinput" element={<Userinput />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
