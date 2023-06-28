import express from 'express';
import {Getfavoritebyid,Favoritemedecin,Deletefavoritemedecin,Getfavoritemedecins} from '../controllers/favorite.js';
const router = express.Router();
router.post ('/', Favoritemedecin)
router.get ('/getfavorite',Getfavoritebyid)
router.delete('/delete',Deletefavoritemedecin)
router.get('/favoritemedecins',Getfavoritemedecins);


export default router ;


