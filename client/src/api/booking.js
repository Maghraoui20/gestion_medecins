import axios from 'axios';
const url = 'http://localhost:5030/booking/reserver';
const url2= 'http://localhost:5030/booking/getvalider';
const url3= 'http://localhost:5030/booking/delete';

const url4= 'http://localhost:5030/booking/annuler';
const url5= 'http://localhost:5030/booking/getbyid';

const url6 = "http://localhost:5030/booking/bookingmedecin";
const url7="http://localhost:5030/booking/validation";
const url8="http://localhost:5030/booking/canceled";

export const Reservermedecin = (idmedecin, RerservationData) => axios.post(url,RerservationData, {params:{idmedecin}});
export const getreservedmedecin = (iduser,page) => axios.get(url2,{params:{iduser,page}});
export const réservationCancled = (iduser,idmedecin) => axios.post(url3,null,{params:{iduser,idmedecin}});
export const annulerréservation = (iduser,idmedecin) => axios.delete(url4,{params:{iduser,idmedecin}});
export const getreservationbyid = (iduser) => axios.get(url5, {params:{iduser}});
export const reservationmedecin = (iduser)=> axios.get(url6, {params:{iduser}});

export const validation = (id)=>axios.post(url7,null,{params:{id}});
export const annulation = (selected)=> axios.post(url8,null,{params:{selected}});