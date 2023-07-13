import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
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
      <div className="signout-header">
        <button
          className="signout"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>

      <div className="App">
        <h2>Welcome to Customer Hub Service</h2>
        <h3>We are here for you</h3>
        <p className="user-heading-text">
          Fill the form with your request, one of our associates will contact
          you in the next 24 hours
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="input-container input-container-two">
              <label htmlFor="checkOut">Check In Date:</label>
              <DatePicker
                id="checkIn"
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>

            <div className="input-container input-container-two">
              <label htmlFor="checkOut">Check Out Date:</label>
              <DatePicker
                id="checkIn"
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>
            <div className="input-container input-container-two">
              <label htmlFor="room">Room Number:</label>
              <input
                type="text"
                id="room"
                placeholder="Room number"
                value={room}
                onChange={(e) => setRoom(Number(e.target.value))}
              />
            </div>
          </div>

          <p>Write your msg here:</p>
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
          </button>
        </form>
        <div>
          <h3 id="inbox-header"> Inbox </h3>
        </div>
      </div>

      <ul>
        {replyList.map((replyList) => {
          return (
            <div className="msg-list">
              <li key={replyList._id}>
                <AiOutlineMail className="icon"></AiOutlineMail>
                {replyList.reply}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserInput;














// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function UserInput() {

//   const [checkIn, setCheckIn] = useState(null);
//   const [checkOut, setCheckOut] = useState(null);
//   const [room, setRoom] = useState("");
//   const [userMessage, setUserMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   // const [date, setDate] = useState("");
//   const navigate = useNavigate();

//   // Fetch backend Messages

//   useEffect (() => {
//     axios
//     .get("http://localhost:8000/user/getReply/userId")
//     .then((res) => {
//       console.log(res);
//       const fetchMessages = res.data.messages;
//       setMessages(fetchMessages);
//     })
//     .catch(() => {
//       console.log("Error fetching messages");
//     });
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Check if User is logged in
//     const isLoggedIn = localStorage.getItem("token");

//     if (!isLoggedIn) {
//       navigate("/");
//       return;
//     }

//     // Check empty messages or whitespaces

//     if (userMessage.trim() === "") {
//       alert("Please enter a text message");
//       return;
//     }

//     const formData = {
//       checkIn: checkIn,
//       checkOut: checkOut,
//       room: room,
//       message: userMessage,
//     };

//   // Axios Post function
// axios
// .post("http://localhost:8000/user/inquiry", formData)
// .then((res) => {
//     console.log(res);
//     alert("Your message has been submitted successfully!");
//     // toast.success("Your message has been submitted successfully!");
//     setUserMessage("");
//   })
//   .catch((error) => {
//     console.log(error);
//     // toast.error("An error occured. Please try later");
//   });
// }

//   function signOut() {
//     localStorage.removeItem("token");
//     navigate("/");
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           signOut();
//         }}
//       >
//         Sign Out
//       </button>
//       <h3 className="title-one">Welcome to Customer Hub Service</h3>
//       <p className="title">Fill the form with your request</p>
//       <form onSubmit={handleSubmit}>

//                 <div className="input-container-two">
//                   <label className="title" htmlFor="checkOut">Check In Date:</label>
//                   <DatePicker
//                   id="checkIn"
//                   selected={checkIn}
//                   onChange={(date) => setCheckIn(date)}
//                   dateFormat="dd/MM/yyyy"
//                   placeholderText="Select a date"
//                   />
//                 </div>

//                 <div className="input-container-two">
//                   <label className="title" htmlFor="checkOut">Check Out Date:</label>
//                   <DatePicker
//                   id="checkOut"
//                   selected={checkOut}
//                   onChange={(date) => setCheckOut(date)}
//                   dateFormat="dd/MM/yyyy"
//                   placeholderText="Select a date"
//                   />
//                 </div>

//                 <div className="input-container-two">
//                   <label className="room" htmlFor="room">Room Number:</label>
//                   <input
//                   type="text"
//                   id="room"
//                   value={room}
//                   onChange={(e) => setRoom(e.target.value)}
//                   />
//                 </div>

//       <p className="title" >Write your msg here:</p>
//       <textarea
//         value={userMessage}
//         onChange={(e) => setUserMessage(e.target.value)}
//       ></textarea>
//       <button type="submit" >Send</button>
//       </form>
//       <div>
//         <p>Inbox</p>
//         {messages?.length > 0 ? (
//            <ul>
//             {messages.map((message) => (
//               <li key={message.id}>{message.content}</li>
//         ))}
//         </ul>
//         ) : (<p className="title" >No Messages Yet!</p>
//         )}
//            {/* <li>New messages will appear here</li>
//           <li>If you don't have messages, you'll see "no new messages"</li> */}
//       </div>
//     </div>
//   );
// }

// export default UserInput;



