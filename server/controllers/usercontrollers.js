import User from "../models/userSchema.js";
import bcrypt from 'bcryptjs'; 

export const saveUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, university, registrationNo, batchYear, password, confirmpassword } = req.body;

        // Check if password and confirm password match
        if (password !== confirmpassword) {
            return res.status(400).json({
                message: "Password and confirm password do not match."
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = new User({
            name, email, university, registrationNo, batchYear, password: hashedPassword
        });

        
        const savedUser = await newUser.save();

       
        res.status(201).json({
            message: "User saved successfully",
            user: savedUser
        });
    } catch (error) {
        console.log("Error while saving user to the database:", error);

       
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email is already in use. Please choose a different email."
            });
        }

       
        res.status(500).json({
            message: "User not saved",
            error: error.message,
        });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found. Please check your email or sign up."
            });
        }

      
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password. Please try again."
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error while logging in user:", error);
        res.status(500).json({
            message: "Error while logging in user",
            error: error.message
        });
    }
};

