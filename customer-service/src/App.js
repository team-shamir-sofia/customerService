import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import AdminPage from "./Components/AdminPage";
import UserInput from "./Components/UserInput";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/userinput" element={<UserInput />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
