import express from 'express';
import { signupMedecin,getAllMedecins,getsearchedMedecin,getOneMedecin,gettoutMedecins} from '../controllers/medecin.js';
const router = express.Router();
router.post('/signup', signupMedecin);
router.get('/pagemedecin', getAllMedecins );
router.get('/all', gettoutMedecins );

router.get('/pagemedecinsearched', getsearchedMedecin );

router.get('/one', getOneMedecin);


 export default router;