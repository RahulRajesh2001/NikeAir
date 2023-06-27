import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

//Protected routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  //read the jwt from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    } catch(error) {
      console.log(error);
      res.status(401).json("token is not decoded")
    }
  } else {
    res.status(401).json("token is not decoded")
  }
})
