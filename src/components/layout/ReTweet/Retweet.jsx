import React from "react";
import "./Style/Retweet.css";
import { Verified } from "@mui/icons-material";
function Retweet({ profilePic, userName, text, userID, verified }) {
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <div className="comments">
        <div className="comment">
          <img src={profilePic} alt="" />
          <div className="info">
            <div className="userInfo">
              <span>{userName}</span>
              {verified && <Verified className="post__bage" />}
              <span className="userID">@{userID}</span>
            </div>
            <p>{text} </p>
          </div>
          <span className="date">{time}</span>
        </div>
      </div>
    </>
  );
}

export default Retweet;
