import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';


//Auth user and get token
//post-  /api/users/login

export const authUsesr = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res,user._id);
   
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
  }
})

//Register user
//post  /api/users

export const registerUser = asyncHandler(async (req, res) => {
  const {name,email,password}=req.body;
  
  const userExists = await User.findOne({email});
  if(userExists){
    res.status(400);
  }

    const user = await User.create({
       name,
       email,
       password, 
    })

    if(user){
        generateToken(res,user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400);
    }
  
})

//logout user /clear cookie
//post  /api/users/logout

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
  });
  res.status(200).json({message:'Logged out successfully'});
})
