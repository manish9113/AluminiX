import Post from "../models/postSchema.js";


export const savePosts = async (req, res) => {
    try {
        
        const {
            likeCount,
            isLiked,
            // postUsername,
            postProfileUrl,
            postDate,
            postData,
            // comments
        } = req.body;

       
        const newPost = new Post({
            likeCount,
            isLiked,
            // postUsername,
            postProfileUrl,
            postDate: postDate || Date.now(), 
            postData,
            // comments
        });

        
        const savedPost = await newPost.save();

      
        res.status(201).json({
            message: "Post saved successfully!",
            post: savedPost
        });
    } catch (error) {
        
        console.error("Error saving post:", error);
        res.status(500).json({
            message: "Failed to save the post",
            error: error.message
        });
    }
};

export const getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find();

        if(!posts||posts.length==0){
            return res.status(404).json({
                message:"No posts found",
            })
        }
        res.status(200).json({
            message: "Posts retrieved successfully",
            posts
        });
    }
    catch(error){
        console.error("Error loading post:", error);
        res.status(500).json({
            message: "Failed to load the post",
            error: error.message
        });
    }
}
