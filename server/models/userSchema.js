import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    university:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    registrationNo:{
        type:Number,
        required:true,
    },
    batchYear:{
        type:Number,
        required: true,
    },
    // pictureurl:{
    //     type:String,

    // },
    password:{
        type:String,
        required:true,
        minlength:5,
    }

})


const User=mongoose.model('AluminiUser',userSchema);

export default User;
