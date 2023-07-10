import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserInput() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [replyList, setReplyList] = useState([]);
  const navigate = useNavigate();
  const currentDate = new Date();

  //get user's msgs after verification
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:8000/user/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          if (data._id) {
            setUser(data);
            console.log(data._id);
            axios
              .get("http://localhost:8000/user/getReply/" + data._id)
              .then(({ data }) => {
                console.log(data);
                setReplyList(data);
              });
          } else {
            navigate("/"); //go to login
          }
          console.log(data);
        });
    } else {
      navigate("/"); // go to login
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      userId: user._id,
      inquiry: inquiry,
      checkIn: checkIn,
      checkOut: checkOut,
      room: room,
      date:
        currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear(),
      comment: "New Message",
    };
    console.log(formData);

    // Axios Post function
    axios
      .post("http://localhost:8000/user/inquiry", formData)
      .then((res) => {
        console.log(res);
        // alert("Your message has been submitted successfully!");
        toast.success("Your message has been submitted successfully!");
        setInquiry("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
      <p>Fill the form with your request</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="checkOut">Check In Date:</label>
          <DatePicker
            id="checkIn"
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        </div>

        <div className="input-container">
          <label htmlFor="checkOut">Check Out Date:</label>
          <DatePicker
            id="checkIn"
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        </div>
        <div className="input-container">
          <label htmlFor="room">Room Number:</label>
          <input
            type="number"
            id="room"
            value={room}
            onChange={(e) => setRoom(Number(e.target.value))}
          />
        </div>

        <p>Write your msg here:</p>
        <textarea
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
        ></textarea>
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Send
        </button>
      </form>
      <div>
        <p>Inbox</p>
        <ul>
          {replyList.map((replyList) => {
            if (replyList.reply) {
              return <li key={replyList._id}>{replyList.reply}</li>;
            } else {
              return <li>You have no new messages</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserInput;
