import express from 'express';
import {Reservermedecin,getreservedmedecin,Reservationcancled,CancelReservation,Getreservationbyid,getBookingsmedecin,Reservationvalidated, Annulerreservation} from '../controllers/booking.js';
const router = express.Router();
router.post ('/reserver',Reservermedecin);
router.get ('/getvalider',getreservedmedecin)
router.post ('/delete', Reservationcancled)
router.delete ('/annuler', CancelReservation)
router.get ('/getbyid',Getreservationbyid)

router.get('/bookingmedecin', getBookingsmedecin);
router.post('/validation',Reservationvalidated)
router.post('/canceled',Annulerreservation);

export default router ;
  
