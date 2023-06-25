import express from 'express'
const router = express.Router()
import {
  authUsesr,
  registerUser,
  logoutUser,
} from '../controller/userController.js';

router.route('/login').post(authUsesr);
router.route('/register').post(registerUser);
router.route('/logout').post(logoutUser);


export default router;