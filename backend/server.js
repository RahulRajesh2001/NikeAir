import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js';
import userRoutes from './routes/userRoutes.js'
const port =process.env.PORT || 5000;



connectDB();// connect mongoDB
const app=express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Cookie parser middleware
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("APi is running...")
})

app.use('/api/products',productRoutes); 
app.use('/api/users',userRoutes);




app.listen(port,()=> console.log(`Server running on port ${port}`))