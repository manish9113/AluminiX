import mongoose from 'mongoose'

// const commentSchema=mongoose.Schema({
//     username:{
//         type:String,
//         required:true
//     },
//     comment:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     }

// })

const postSchema=mongoose.Schema({
    likeCount:{
        type:Number,
        default:0
    },
    isLiked:{
        type:Boolean,
        default:false
    },
    // postUsername: { type: String, required: true }, // Username of the post owner
    postProfileUrl: { type: String, required: true }, // Profile URL of the post owner
    postDate: { type: Date, default: Date.now }, // Date the post was created
    postData: { type: String, required: true },  // Post content
    // comments: [commentSchema]                    // Array of comments
})


const Post=mongoose.model('PostAlumini',postSchema);

export default Post;