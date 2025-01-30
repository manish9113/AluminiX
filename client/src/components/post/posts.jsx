import axios from 'axios';
import {useEffect,useState} from 'react';
import Post from './Post';

const Posts=()=>{
     const [likeCount, setLikeCount] = useState(10);
     const [isLiked, setIsLiked] = useState(false);
     const [postProfileUrl,setPostProfileUrl]=useState('');
     const [postData,setPostdata]=useState('');
     const [postDate,setPostdate]=useState('');
     const [res,setRes]=useState([])

     useEffect(() => {
       const fetchPosts = async () => {
         try {
           const response = await axios.get("http://localhost:5000/allPosts");
           console.log(response.data.posts[0].postProfileUrl);
           setRes(response.data.posts);
           //    console.log(res);
         } catch (error) {
           console.log("error while fetching posts", error.message);
         }
       };

       fetchPosts();

       // Poll every 5 seconds
       const interval = setInterval(fetchPosts, 2000);

       // Cleanup on unmount
       return () => clearInterval(interval);
     }, []);


     useEffect(() => {
       console.log(res); 
     }, [res]); 
    return (
      <>
        {res.map((post, index) => (
          <Post
            key={index}
            like={post.likeCount} 
            isLiked={post.isLiked} 
            postProfileUrl={post.postProfileUrl} 
            postData={post.postData} 
            postDate={post.postDate} 
          />
        ))}
      </>
    );
}

export default Posts;