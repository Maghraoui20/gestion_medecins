import express from 'express';
import { Opinionmedecin,getOpinionsmedein } from '../controllers/opinion.js';


const router = express.Router();
router.post('/',Opinionmedecin);

router.get ('/get',getOpinionsmedein)

export default router ;