import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import Router from './router/Router.js';
import Connection from './database/db.js';

dotenv.config();
const app=express()

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({
    limit: '50mb',          // Adjust size limit
    parameterLimit: 100000, // Set a higher limit for parameters
    extended: true,
}));
app.use('/',Router)


const PORT=process.env.PORT;
const URL=process.env.MONGO_URI

app.listen(PORT,()=>{
    console.log(`App listening at port ${PORT}`)
})

Connection(URL)




