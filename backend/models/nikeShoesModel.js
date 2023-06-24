import mongoose from 'mongoose';

const ShoeSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:true,   
    },
    image:{
        type:String,
        required:true,
    },
    image2:{
        type:String,
        required:true,
    },
    image3:{
        type:String,
        required:true,
    },
    image4:{
        type:String,
        required:true,
    },
    image5:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
       type:String,
       required:true, 
    },
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    numOfReviews:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    },
    size:{
        type:Number,
        required:true,
        default:0,
    },
    color:{
        type:String,
        required:true,
    },
    season:{
        type:String,
        required:true,
    },
    
});

const NikeShoes=mongoose.model("NikeShoes",ShoeSchema);

export default NikeShoes;