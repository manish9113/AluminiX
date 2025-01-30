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
    universityregno:{
        type:Number,
        required:true,
    },
    passbatchyear:{
        type:Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= 100000 && v <= 999999; // Check if the number is within the 6-digit range
            },
            message: props => `${props.value} is not a valid 5-digit number!`
        },

    },
    pictureurl:{
        type:String,

    },
    password:{
        type:String,
        required:true,
        minlength:5,
    },
    // confirmpassword:{
    //     type:String,
    //     required:true,
    //     validate: {
    //         // Custom validator to check if confirmpassword matches password
    //         validator: function (value) {
    //             return value === this.password; // `this` refers to the current document
    //         },
    //         message: "Confirm password must match the password."
    //     }
    // }

})


const User=mongoose.model('AluminiUser',userSchema);

export default User;
