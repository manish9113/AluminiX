import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Paper } from "@mui/material";

import { useState } from "react";

export default function Post2() {
  const [like, setLike] = useState(2000);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Paper className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/3.jpeg" // Use a default picture if user is undefined
              alt=""
            />
            <span className="postUsername">Narendra Modi</span>
            <span className="postDate">21-3-2024</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">my schedule as intern</span>
          <img className="postImg" src="/assets/post/3.jpeg" alt="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">Comments...</span>
          </div>
        </div>
      </div>
    </Paper>
  );
}
