import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/nikeShoesModel.js";


//fetch all products
export const getProducts =asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.json(products);
})

//fetch a single product
export const getProductById =asyncHandler(async(req,res)=>{
    const product =await Product.findById(req.params.id);
    if(product){
      res.json(product)
    }else{
       res.status(404).json({message:'Product not found'})
    }  
})