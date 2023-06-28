import axios from "axios";
const url1 = 'http://localhost:5030/user/signin';

const url2 ="http://localhost:5030/medecin/signup";
const url3= 'http://localhost:5030/user/forgetpassword';
const url4= 'http://localhost:5030/user/signup';
const url5= 'http://localhost:5030/user';




export const signUpus = ( signData ) => axios.post(url4, signData);

export const signUp = ( medecinData ) => axios.post(url2, medecinData);
export const signIn = (signinData) => axios.post(url1,signinData );
export const forgetpass = (emailData) => axios.put(url3,emailData);
export const updateUser =(id, userData) => axios.patch(`${url5}/${id}`, userData);
