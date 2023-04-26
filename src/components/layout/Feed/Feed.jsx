import React, { useEffect, useState } from "react";
import "./Style/Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../../firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from "../../../context/StateProvider";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [{user}] = useStateValue()
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
 
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
         <>
        
          <Post
         
            key={post.text}
            displayName={user?.displayName}
            username={post.username}
            avatar={user?.photoURL}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
          
          </>
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
