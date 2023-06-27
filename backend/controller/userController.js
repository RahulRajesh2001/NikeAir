import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Auth user and get token
// POST /api/users/login
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
     generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Register user
// POST /api/users
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
     res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    name,
    email,
    password
  });

  if(user){
    generateToken(res, user._id); 
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email
    })
  }else{
    res.status(400).json({message:"Invalid user data"})
  }
  

  
});

// Logout user / clear cookie
// POST /api/users/logout
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
  });
  res.status(200).json({message:'logged out successfully'});
});
