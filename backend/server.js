import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
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



app.use('/api/products',productRoutes); 
app.use('/api/users',userRoutes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use('/uploads', express.static('/var/data/uploads'));
    app.use(express.static(path.join(__dirname, '/frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
  } else {
    const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }


app.listen(port,()=> console.log(`Server running on port ${port}`))