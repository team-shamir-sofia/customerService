import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";

function AdminPage() {
  const [visibleReplyText, setVisibleReplyText] = useState(false);
  const [visibleCommentText, setVisibleCommentText] = useState(false);
  const [admin, setAdmin] = useState({ _id: "", username: "", password: "" });
  const [adminMsg, setAdminMsg] = useState([]);
  const [adminComment, setAdminComment] = useState("");
  const [reply, setReply] = useState("");
  const [adminId, setAdminId] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:8000/admin/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          if (data._id) {
            setAdmin(data);
            axios
              .get("http://localhost:8000/admin/inquiry")
              .then(({ data }) => {
                setAdminMsg(data);
                console.log(data);
              });
          } else {
            navigate("/adminlogin");
          }
        });
    } else {
      navigate("/adminlogin");
    }
  }, []);

  function deleteMsg(id) {
    axios
      .delete("http://localhost:8000/admin/delete/inquiry/" + id)
      .then(({ data }) => {
        axios.get("http://localhost:8000/admin/inquiry").then(({ data }) => {
          setAdminMsg(data);
          console.log(data);
        });
        alert(data.msg);
      });
    console.log(id);
  }

  function comment(id) {
    console.log(adminId);
    console.log(adminComment);
    axios
      .put("http://localhost:8000/admin/comment/inquiry/" + id, {
        comment: adminComment,
      })
      .then(({ data }) => {
        axios.get("http://localhost:8000/admin/inquiry").then(({ data }) => {
          setAdminMsg(data);
          console.log(data);
        });
        alert(data.msg);
        setVisibleCommentText(!visibleCommentText);
        setAdminComment("");
      });
  }

  function adminReply() {
    axios
      .post("http://localhost:8000/admin/reply", {
        usernameId: adminId,
        userId: userId,
        reply: reply,
      })
      .then(({ data }) => {
        alert(data.msg);
        setVisibleReplyText(!visibleReplyText);
        setReply("");
      });
    console.log(userId);
    console.log(adminId);
    console.log(reply);
  }

  function signOut() {
    localStorage.removeItem("token");
    navigate("/adminlogin");
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
      <h3>Welcome to Our Hotel customer service</h3>
      <h4>Admin page</h4>
      <div>
        <p>Inbox</p>
        <ul>
          {adminMsg.map((adminMsg) => {
            return (
              <li key={adminMsg._id}>
                <AiOutlineMail className="icon"></AiOutlineMail>
                {"date: " + adminMsg.date + " comment: " + adminMsg.comment}
                <br></br>
                {" room: " +
                  adminMsg.room +
                  " check in: " +
                  adminMsg.checkIn +
                  " check out: " +
                  adminMsg.checkOut}
                <br></br>
                {" message: " + adminMsg.inquiry}
                <br></br>
                <button
                  onClick={() => {
                    setVisibleReplyText(!visibleReplyText);
                    setAdminId(adminMsg._id);
                    setUserId(adminMsg.userId);
                  }}
                >
                  Reply
                </button>
                <button
                  onClick={() => {
                    setVisibleCommentText(!visibleCommentText);
                    setAdminId(adminMsg._id);
                  }}
                >
                  Comment
                </button>
                <button
                  onClick={() => {
                    deleteMsg(adminMsg._id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        {visibleReplyText && (
          <div>
            <textarea
              value={reply}
              onChange={(e) => {
                setReply(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                adminReply();
              }}
            >
              Send
            </button>
          </div>
        )}
        {visibleCommentText && (
          <div>
            <textarea
              value={adminComment}
              onChange={(e) => {
                setAdminComment(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                comment(adminId);
              }}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;




// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminPage() {
//   const [visibleReplyText, setVisibleReplyText] = useState(false);
//   const [visibleCommentText, setVisibleCommentText] = useState(false);
//   const [admin, setAdmin] = useState({ _id: "", username: "", password: "" });
//   const [adminMsg, setAdminMsg] = useState([]);
//   const [adminComment, setAdminComment] = useState("");
//   const [reply, setReply] = useState("");
//   const [adminId, setAdminId] = useState("");
//   const [userId, setUserId] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       axios
//         .post("http://localhost:8000/admin/verify", {
//           token: localStorage.getItem("token"),
//         })
//         .then(({ data }) => {
//           if (data._id) {
//             setAdmin(data);
//             axios
//               .get("http://localhost:8000/admin/inquiry")
//               .then(({ data }) => {
//                 setAdminMsg(data);
//                 console.log(data);
//               });
//           } else {
//             navigate("/");
//           }
//         });
//     } else {
//       navigate("/");
//     }
//   }, []);
// function deleteMsg(id) {
//     axios
//       .delete("http://localhost:8000/admin/delete/inquiry/" + id)
//       .then(({ data }) => {
//         axios.get("http://localhost:8000/admin/inquiry").then(({ data }) => {
//           setAdminMsg(data);
//           console.log(data);
//         });
//         alert(data.msg);
//       });
//     console.log(id);
//   }

//   function comment(id) {
//     console.log(adminId);
//     console.log(adminComment);
//     axios
//       .put("http://localhost:8000/admin/comment/inquiry/" + id, {
//         comment: adminComment,
//       })
//       .then(({ data }) => {
//         axios.get("http://localhost:8000/admin/inquiry").then(({ data }) => {
//           setAdminMsg(data);
//           console.log(data);
//         });
//         alert(data.msg);
//         setVisibleCommentText(!visibleCommentText);
//         setAdminComment("");
//       });
//   }

//   function adminReply() {
//     axios
//       .post("http://localhost:8000/admin/reply", {
//         usernameId: adminId,
//         userId: userId,
//         reply: reply,
//       })
//       .then(({ data }) => {
//         alert(data.msg);
//         setVisibleReplyText(!visibleReplyText);
//         setReply("");
//       });
//     console.log(userId);
//     console.log(adminId);
//     console.log(reply);
//   }

//   function signOut() {
//     localStorage.removeItem("token");
//     navigate("/adminlogin");
//   }
//  return (
//     <div className="App">
//       <button
//         onClick={() => {
//           signOut();
//         }}
//       >
//         Sign Out
//       </button>
//       <h3>Welcome to Our Hotel Customer Hub</h3>
//       <h4>Admin page</h4>
//       <div>
//         <p>Inbox</p>
//         <ul>
//           {adminMsg.map((adminMsg) => {
//             return (
//               <li key={adminMsg._id}>
//                 {"date: " +
//                   adminMsg.date +
//                   " comment: " +
//                   adminMsg.comment +
//                   " room: " +
//                   adminMsg.room +
//                   " check in: " +
//                   adminMsg.checkIn +
//                   " check out: " +
//                   adminMsg.checkOut +
//                   " message: " +
//                   adminMsg.inquiry}
//                 <button
//                   onClick={() => {
//                     setVisibleReplyText(!visibleReplyText);
//                     setAdminId(adminMsg._id);
//                     setUserId(adminMsg.userId);
//                   }}
//                 >
//                   Reply
//                 </button>
//                 <button
//                   onClick={() => {
//                     setVisibleCommentText(!visibleCommentText);
//                     setAdminId(adminMsg._id);
//                   }}
//                 >
//                   Comment
//                 </button>
//                 <button
//                   onClick={() => {
//                     deleteMsg(adminMsg._id);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//         {visibleReplyText && (
//           <div>
//             <textarea
//               value={reply}
//               onChange={(e) => {
//                 setReply(e.target.value);
//               }}
//             ></textarea>
//             <button
//               onClick={() => {
//                 adminReply();
//               }}
//             >
//               Send
//             </button>
//           </div>
//         )}
//         {visibleCommentText && (
//           <div>
//             <textarea
//               value={adminComment}
//               onChange={(e) => {
//                 setAdminComment(e.target.value);
//               }}
//             ></textarea>
//             <button
//               onClick={() => {
//                 comment(adminId);
//               }}
//             >
//               Save
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminPage;



// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminPage() {
//   const [visibleReplyText, setVisibleReplyText] = useState(false);
//   const [visibleCommentText, setVisibleCommentText] = useState(false);
//   const [admin, setAdmin] = useState({ _id: "", username: "", password: "" });
//   const [adminMsg, setAdminMsg] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       axios
//         .post("http://localhost:8000/admin/verify", {
//           token: localStorage.getItem("token"),
//         })
//         .then(({ data }) => {
//           if (data._id) {
//             setAdmin(data);
//             axios
//               .get("http://localhost:8000/admin/inquiry")
//               .then(({ data }) => {
//                 setAdminMsg(data);
//                 console.log(data);
//               });
//           } else {
//             navigate("/");
//           }
//         });
//     } else {
//       navigate("/");
//     }
//   }, []);

//   function signOut() {
//     localStorage.removeItem("token");
//     navigate("/");
//   }

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           signOut();
//         }}
//       >
//         Sign Out
//       </button>
//       <h3>Welcome to Our Hotel Customer Hub</h3>
//       <h4>Admin page</h4>
//       <div>
//         <p>Inbox</p>
//         <ul>
//           {adminMsg.map((adminMsg) => {
//             return (
//               <li key={adminMsg._id}>
//                 {"date: " +
//                   adminMsg.date +
//                   " message: " +
//                   adminMsg.inquiry +
//                   " comment: " +
//                   adminMsg.comment}

//                 {}
//               </li>
//             );
//           })}
//           <li>
//             username email new message{" "}
//             <button onClick={() => setVisibleReplyText(!visibleReplyText)}>
//               Reply
//             </button>
//             <button onClick={() => setVisibleCommentText(!visibleCommentText)}>
//               Comment
//             </button>
//             <button>Delete</button>
//             {visibleReplyText && (
//               <div>
//                 <textarea></textarea>
//                 <button onClick={() => {}}>Send</button>
//               </div>
//             )}
//             {visibleCommentText && (
//               <div>
//                 <textarea></textarea>
//                 <button>Save</button>
//               </div>
//             )}
//           </li>
//           <li>if you don't have msgs, you'll see "no new msgs"</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;





