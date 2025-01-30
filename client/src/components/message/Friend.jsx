import { useState } from "react";
import LeftSidebar from "./Leftsidebar";
import Message from "./message";
import RightSidebar from "./RightSidebar";
import Navbar from "../Navbar/Navbar";

function Friend() {
  const [selectedFriend, setSelectedFriend] = useState("");
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      <div
        className="flex  overflow-hidden "
        style={{ marginTop: "66px", height: "90vh" }}
      >
        <LeftSidebar
          className="flex-shrink-0"
          onFriendSelect={setSelectedFriend}
        />
        <Message className="flex-grow" friend={selectedFriend} />
        <RightSidebar className="flex-shrink-0" friend={selectedFriend} />
      </div>
    </div>
  );
}

export default Friend;
