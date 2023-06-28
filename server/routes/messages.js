import express from 'express';
import {envoyer} from '../controllers/messages.js';
const router = express.Router();
router.post ('/',envoyer);
export default router ;
