import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [visibleReplyText, setVisibleReplyText] = useState(false);
  const [visibleCommentText, setVisibleCommentText] = useState(false);
  return (
    <div className="App">
      <button>Sign Out</button>
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
