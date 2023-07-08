import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

function Userinput() {
  return (
    <div>
      <button>Sign Out</button>
      <h3>Welcome to Customer Hub Service</h3>
      <p>Fill the form if you want a reply</p>
      <div>
        <label for="room">Room Number:</label>
        <input type="text" id="room"></input>
        <br></br>
        <label for="checkIn">Check In Date:</label>
        <input type="date" id="checkIn"></input>
        <br></br>
        <label for="checkOut">Check Out Date:</label>
        <input type="date" id="checkOut"></input>
      </div>
      <div>
        <p>Write your msg here:</p>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <div>
        <p>Inbox</p>
        <ul>
          <li>the msgs will appear here</li>
          <li>if you don't have msgs, you'll see "no new msgs"</li>
        </ul>
      </div>
    </div>
  );
}

export default Userinput;
