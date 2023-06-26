import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
} from '../controller/userController.js';

router.route('/login').post(authUser);
router.route('/register').post(registerUser);
router.route('/logout').post(logoutUser);


export default router;