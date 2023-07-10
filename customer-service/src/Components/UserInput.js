import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

function UserInput() {
  const [room, setRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      room: room,
      checkIn: checkIn,
      checkOut: checkOut,
      message: message,
    };
  }

  /*import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 function Userinput() {
  
  const currentDate = new Date();
  const [inquiry, setInquiry] = useState("");
  const [date, setDate] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [room, setRoom] = useState("");*/

  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
      <h3>Welcome to Customer Hub Service</h3>
      <p>Fill the form if you want a reply</p>

      <div className="input-container">
        <label htmlFor="room">Room Number:</label>
        <input type="number" id="room"></input>
      </div>
      <br />

      <div className="input-container">
        <label htmlFor="checkIn">Check In Date:</label>
        <input type="date" id="checkIn"></input>
      </div>

      <div className="input-container">
        <label htmlFor="checkOut">Check Out Date:</label>
        <input type="date" id="checkOut"></input>
      </div>

      <br />
      <p>Write your msg here:</p>
      <textarea></textarea>
      <button>Send</button>
      <div>
        <p>Inbox</p>
        <ul>
          <li>The msgs will appear here</li>
          <li>If you don't have msgs, you'll see "no new msgs"</li>
        </ul>
      </div>
    </div>
  );
}

export default UserInput;

/*<div>

        <label for="room">Room Number:</label>
        <input
          type="text"
          id="room"
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        ></input>
        <br></br>
        <label for="checkIn">Check In Date:</label>
        <DatePicker
          selected={checkIn}
          id="checkIn"
          dateFormat="dd/MM/yyyy"
          onChange={(e) => {
            setCheckIn(e);
          }}
        ></DatePicker>
        <br></br>
        <label for="checkOut">Check Out Date:</label>

        <DatePicker
          id="checkOut"
          selected={checkOut}
          dateFormat="dd/MM/yyyy"
          onChange={(e) => {
            setCheckOut(e);
          }}
        ></DatePicker>
      </div>
      <div>
        <p>Write your msg here:</p>
        <textarea
          onChange={(e) => {
            setInquiry(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            console.log(checkIn);
            console.log(checkOut);
            console.log(room);
            console.log(inquiry);
            console.log(currentDate);
          }}
        >
          Send
        </button>

      
        </div>*/
