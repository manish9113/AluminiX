import express from 'express'

const Router=express.Router();
import { getAllPosts, savePosts } from '../controllers/postControllers.js';
import { saveUser,loginUser } from '../controllers/usercontrollers.js';
import Uploadimg from '../controllers/imgControllers.js';
import upload from '../middlewares/multerStorage.js'


Router.get('/',(req,res)=>{
    res.send("hello sever running")
})
Router.post('/postAlumini',savePosts);
Router.get('/allPosts',getAllPosts);
Router.post('/studentsignup',saveUser);
Router.post('/studentlogin',loginUser);
Router.post('/upload', upload.single('file'), Uploadimg);





export default Router;