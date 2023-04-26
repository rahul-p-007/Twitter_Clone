import React, { forwardRef, useEffect, useState } from "react";
import "./Style/Post.css";
import { Avatar } from "@material-ui/core";
import { Twitter, Verified } from "@mui/icons-material";
import {
  TextsmsOutlined,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  Repeat,
} from "@material-ui/icons";
import { Publish } from "@mui/icons-material";
import Comment from "../Comment/Comment";
import db from "../../../firebase";
import PostComments from "../Comment/PostComment/PostComments";
import Retweet from "../ReTweet/Retweet";
import Postretweet from "../ReTweet/PostRetweet/PostRetweet";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar}, ref) => {
    const [liked, setliked] = useState(false);

    const [commentOpen, setCommentOpen] = useState(false);
    const [showcomments, setShowComments] = useState([]);

    const [ToggleReTweet, setToggleReTweet] = useState(false);
    const [showReTweet, setShowReTweet] = useState([]);

    useEffect(() => {
      db.collection("comments").onSnapshot((snapshot) =>
        setShowComments(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);

    useEffect(() => {
      db.collection("retweet").onSnapshot((snapshot) =>
        setShowReTweet(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);

    return (
      <>
        <div className="post" ref={ref}>
          <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                    {verified && <Verified className="post__bage" />} @
                    {username}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
              <div
                className="item"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <TextsmsOutlined
                  fontSize="small"
                  style={{ color: "#50b7f5" }}
                />
              </div>
              <div
                className="item"
                onClick={() => setToggleReTweet(!ToggleReTweet)}
              >
                <Repeat fontSize="small" style={{ color: "#50b7f5" }} />
              </div>

              <div className="item" onClick={() => setliked(!liked)}>
                {liked ? (
                  <FavoriteOutlined fontSize="small" />
                ) : (
                  <FavoriteBorderOutlined
                    fontSize="small"
                    style={{ color: "#50b7f5" }}
                  />
                )}
                <span>12 Likes</span>
              </div>
              <div className="item">
                <Publish fontSize="small" style={{ color: "#50b7f5" }} />
              </div>
            </div>
          </div>
        </div>
        <br />
        {ToggleReTweet && <Postretweet />}
        {ToggleReTweet &&
          showReTweet.map((retweet) => (
            <Retweet
              profilePic={retweet.profilePic}
              userName={retweet.userName}
              userID={retweet.userID}
              text={retweet.text}
              verified={retweet.verified}
            />
          ))}
        {commentOpen && <PostComments />}
        {commentOpen &&
          showcomments.map((comment) => (
            <Comment
              profilePic={comment.profilePic}
              userName={comment.userName}
              text={comment.text}
            />
          ))}
      </>
    );
  }
);

export default Post;
