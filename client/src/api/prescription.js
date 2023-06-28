import axios from "axios";

const url6= 'http://localhost:5030/prescription';
const url1= 'http://localhost:5030/prescription';


export const confirmerprescription =(Datauser) => axios.post(url6,Datauser);
export const getprescription =(iduser, idmedecin) => axios.get(url1,{params:{iduser,idmedecin}});