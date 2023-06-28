import express from 'express';
import { confirmerprescription,getprescription } from '../controllers/prescription.js';


const router = express.Router();
router.post('/',confirmerprescription);
router.get('/',getprescription);



export default router ;