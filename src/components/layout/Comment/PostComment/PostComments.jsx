import React, { useState } from "react";
import db from "../../../../firebase";
import "../Style/Comment.css";

const PostComments = () => {
  const [postcomments, setPostComments] = useState("");
  const sendComment = (e) => {
    e.preventDefault();
    db.collection("comments").add({
      profilePic:
        "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-cute-boy-with-red-hat-mascot-logo-png-image_2968270.jpg",
      text: postcomments,
      userName: "Rohan",
    });
    setPostComments("");
  };
  return (
    <div className="comments">
      <div className="write">
        <input
          type="text"
          placeholder="write a comment"
          value={postcomments}
          onChange={(e) => setPostComments(e.target.value)}
        />
        <button onClick={sendComment} type="submit">
          send
        </button>
      </div>
    </div>
  );
};

export default PostComments;
