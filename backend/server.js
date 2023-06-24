import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js';
const port =process.env.PORT || 5000;



connectDB();// connect mongoDB
const app=express();

app.get('/',(req,res)=>{
    res.send("APi is running...")
})

app.use('/api/products',productRoutes)




app.listen(port,()=> console.log(`Server running on port ${port}`))