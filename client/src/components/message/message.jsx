
import PostComments from "./post_comments";


function Message({friend}) {
  return (
    <div className="flex-grow overflow-y-auto p-1 bg-[#96DEDA] scrollbar-hide">
        <PostComments />
    </div>
  );
}

export default Message;
