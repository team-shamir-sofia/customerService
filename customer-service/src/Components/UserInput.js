import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function UserInput() {

  const [room, setRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMesage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {

      room: room,
      checkIn: checkIn,
      checkOut: checkOut,
      message: message,
    };



  }


  return (
    <div>
      <button>Sign Out</button>
      <h3>Welcome to Customer Hub Service</h3>
      <p>Fill the form if you want a reply</p>

      <div className="input-container" >
        <label htmlFor="room"  >Room Number:</label>
        <input type="number" id="room"></input>
      </div>
      <br />

      <div className="input-container" >
        <label htmlFor="checkIn">Check In Date:</label>
        <input type="date" id="checkIn"></input>
      </div>
      <br />

      <div className="input-container" >
        <label htmlFor="checkOut">Check Out Date:</label>
        <input type="date" id="checkOut"></input>
      </div>

      {/* <div>
        <label for="room">Room Number:</label>
        <input type="text" id="room"></input>
        <br></br>
        <label for="checkIn">Check In Date:</label>
        <input type="date" id="checkIn"></input>
        <br></br>
        <label for="checkOut">Check Out Date:</label>
        <input type="date" id="checkOut"></input>
      </div> */}
      <div>
        <p>Write your msg here:</p>
        <textarea></textarea>
        {/* <button>Send</button> */}
      </div>
      <br />
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
