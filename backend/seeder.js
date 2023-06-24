import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from "./models/userModel.js";
import NikeShoes from './models/nikeShoesModel.js';
import connectDB from "./config/db.js"


dotenv.config();

connectDB();

//for import data to database;
const importData = async()=>{
    try{
        await User.deleteMany();
        await NikeShoes.deleteMany();

        const createdUsers=await User.insertMany(users);

        const user=createdUsers[0]._id;

        const sampleProducts=products.map((product)=>{
            return {...product,user:user}
        })

        await NikeShoes.insertMany(sampleProducts);

        console.log("Data Imported");
        process.exit();

    }catch(error){
        console.error(`${error}`);
        process.exit(1);
    }
}

//for destroy data in database

const destroyData = async()=>{
    try{
        await User.deleteMany();
        await NikeShoes.deleteMany();

        console.log('Data Destroyed');
        process.exit();

    }catch(error){
        console.error(`${error}`);
        process.exit(1);
    }
}

if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}