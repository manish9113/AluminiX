import React, { useState,useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
const friends = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Harry",
  "Ivy",
  "Jack",
  "Kelly",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Pete",
  "Quincy",
  "Rachel",
  "Sam",
  "Tina",
  "Uma",
  "Vince",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
]; 
function LeftSidebar({onFriendSelect}) {
  const [searchTerm, setSearchTerm] = useState("");
 

 

  return (
    <div className="w-[18vw] bg-gray-100 flex flex-col h-screen">
      <div className="p-5 bg-[#96DEDA] border-b border-gray-300">
        <img
          src="/assets/person/1.jpeg"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-lg font-semibold mt-2">Username</h2>
        <div className="py-2">
          <div className="flex items-center mb-1 text-sm">
            <HomeIcon className="mr-2 text-gray-800" />
            <span>Lives in City, Country</span>
          </div>
          <div className="flex items-center mb-1 text-sm">
            <WorkIcon className="mr-2 text-gray-800" />
            <span>Working at Company Name</span>
          </div>
        </div>
        <div className="h-0.5 bg-black"></div>
      </div>
      <div className="p-2">
        <input
          type="text"
          placeholder="Search friends..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 box-border"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
        {friends
          .filter((friend) =>
            friend.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((friend, index) => (
            <div
              key={index}
              className="bg-gray-300 mb-1 p-2"
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => onFriendSelect(friend)}
            >
              {friend}
            </div>
          ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
