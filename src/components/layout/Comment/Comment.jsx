import React from "react";
import "./Style/Comment.css";

const Comment = ({ text, userName, profilePic }) => {
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <div className="comments">
        <div className="comment">
          <img src={profilePic} alt="" />
          <div className="info">
            <span>{userName}</span>
            <p>{text} </p>
          </div>
          <span className="date">{time}</span>
        </div>
      </div>
    </>
  );
};

export default Comment;
