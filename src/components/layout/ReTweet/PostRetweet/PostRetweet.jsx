import React, { useState } from "react";
import db from "../../../../firebase";
import "../Style/Retweet.css";

const Postretweet = () => {
  const [postretweet, setPostRetweet] = useState("");
  const sendComment = (e) => {
    e.preventDefault();
    db.collection("retweet").add({
      profilePic:
        "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-cute-happy-boy-mascot-logo-png-image_2993610.jpg",
      text: postretweet,
      userName: "Rohan",
      userID: "@sunny",
      verified: true,
    });
    setPostRetweet("");
  };
  return (
    <div className="comments">
      <div className="write">
        <input
          type="text"
          placeholder="retweet"
          value={postretweet}
          onChange={(e) => setPostRetweet(e.target.value)}
        />
        <button onClick={sendComment} type="submit">
          send
        </button>
      </div>
    </div>
  );
};

export default Postretweet;
