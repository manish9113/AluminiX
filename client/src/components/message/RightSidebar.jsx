import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

function RightSidebar({friend}) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
  };

  return (
    <div
      className="flex flex-col  w-[20vw] border-l border-black border-[2px]"
      style={{ height: "90vh" }}
    >
      <div className="flex items-center p-2 bg-[#96DEDA]">
        <img
          src="assets/person/1.jpeg"
          alt="pic"
          className="w-12 h-12 rounded-full ml-1"
        />
        <h3 className="ml-2 text-lg font-semibold">{friend}</h3>
      </div>
      <div className="h-0.5 bg-black"></div>
      <div className="flex-grow overflow-y-auto p-2 scrollbar-hide">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t border-black-300 bg-[#96DEDA]">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-grow mr-2 p-2 border rounded"
        />
       
          <button
            onClick={handleSendMessage}
            className=" text-gray-700"
          >
            <SendIcon />
          </button>
        
      </div>
    </div>
  );
}

export default RightSidebar;
