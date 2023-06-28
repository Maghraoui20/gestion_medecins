import express from 'express';
import {signin,forgetpassword, signup,updateUser,getuser} from '../controllers/user.js';
const router = express.Router();
router.post('/signin', signin);
router.put('/forgetpassword', forgetpassword);
router.post('/signup',signup);

router.patch('/:id', updateUser);


router.get('/', getuser);


export default router;