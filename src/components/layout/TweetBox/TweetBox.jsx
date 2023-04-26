import React, { useState } from "react";
import "./Style/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../firebase";
import { useStateValue } from "../../../context/StateProvider";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

    const [{user}] = useStateValue()
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Rahul ",
      username: "rahulp",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-cute-boy-with-red-hat-mascot-logo-png-image_2968270.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user?.photoURL}
          alt={user?.displayName}
           />
          <input
            type="text"
            value={tweetMessage}
            placeholder="What's happening"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__ImageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
