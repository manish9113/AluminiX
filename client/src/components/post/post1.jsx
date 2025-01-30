import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";
import { Paper } from "@mui/material";

export default function Post1() {
  const [like, setLike] = useState(25);
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
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername">Shreya Kumari</span>
            <span className="postDate">22-12-2023</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">From intern to Full time SWE at Google Warshaw...</span>
          <img className="postImg" src="/assets/post/img222.jpg" alt="postimg" />
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
