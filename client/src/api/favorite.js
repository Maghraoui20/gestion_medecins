import axios from 'axios';

const url = 'http://localhost:5030/favorite';
const url2= 'http://localhost:5030/favorite/delete';
const url1= 'http://localhost:5030/favorite/getfavorite';
const url3= 'http://localhost:5030/favorite/favoritemedecins';




export const favoritemedecin = (favoritedata) => axios.post(url,favoritedata);
export const  deletefavoritemedecin = (iduser,idmedecin) => axios.delete(url2, {params: {iduser,idmedecin}});
export const  getfavoritebyid = (iduser) => axios.get(url1, {params: {iduser}});
export const  getfavoritemedecins = (iduser,page) => axios.get(url3, {params: {iduser,page}});
