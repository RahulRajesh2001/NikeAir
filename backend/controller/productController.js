import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/nikeShoesModel.js";

// Fetch all products
export const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: "i" } } : {};
  const category = req.query.category ? { category: req.query.category } : {};

  const products = await Product.find({ ...keyword, ...category });
  res.json(products);
});

//fetch a single product
export const getProductById =asyncHandler(async(req,res)=>{
    const product =await Product.findById(req.params.id);
    if(product){
      res.json(product)
    }else{
       res.status(404).json({message:'Product not found'})
    }  
})