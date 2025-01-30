import "./rightbar.css";
import { Paper } from "@mui/material";

export default function Rightbar() {
  return (
    <Paper elevation={3} style={{ padding: "15px", marginTop: "30px",marginRight:"10px" }}>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Kolkata</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Newtown</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/img11.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Rahul Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img12.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Maloti Mondal</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img13.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Praveen Das</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img14.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Sayantan Haz</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img15.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Ankita Kundu</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img16.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Saptrishi Saha</span>
        </div>
      </div>
      <h4 className="rightbarTitle">People you may know</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/img17.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Anup Samanta</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img18.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Deva Giri</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img19.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Mona khair</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/img20.jpg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Souvik Maity</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/1.jpeg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Kirti Yadav</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/2.jpeg"
            alt=""
            className="rightbarFollowingImg"
            style={{ height: 135 }}
          />
          <span className="rightbarFollowingName">Debakar Ghosh</span>
        </div>
      </div>
    </Paper>
  );
}
