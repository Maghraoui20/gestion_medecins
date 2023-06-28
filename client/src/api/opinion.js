import axios from 'axios';

const url = 'http://localhost:5030/opinion';
const url1 ='http://localhost:5030/opinion/get';


export const createOpinion = (newOpinion) => axios.post(url,newOpinion);
export const getmedecingopinions=(idmedecin) => axios.get(url1,{params:{idmedecin}});
