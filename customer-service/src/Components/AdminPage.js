import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  const [visibleReplyText, setVisibleReplyText] = useState(false);
  const [visibleCommentText, setVisibleCommentText] = useState(false);
  const [admin, setAdmin] = useState({ _id: "", username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //access the users diary
      axios
        .post("http://localhost:8000/admin/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          if (data._id) {
            //access users entries
            setAdmin(data);
            axios
              .get("http://localhost:8000/admin/inquiry")
              .then(({ data }) => {
                console.log(data);
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

  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
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
          <li>
            username email new message{" "}
            <button onClick={() => setVisibleReplyText(!visibleReplyText)}>
              Reply
            </button>
            <button onClick={() => setVisibleCommentText(!visibleCommentText)}>
              Comment
            </button>
            <button>Delete</button>
            {visibleReplyText && (
              <div>
                <textarea></textarea>
                <button>Send</button>
              </div>
            )}
            {visibleCommentText && (
              <div>
                <textarea></textarea>
                <button>Save</button>
              </div>
            )}
          </li>
          <li>if you don't have msgs, you'll see "no new msgs"</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
