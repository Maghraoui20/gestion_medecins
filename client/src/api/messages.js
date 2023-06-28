import axios from 'axios';
const url = 'http://localhost:5030/messages';
export const envoyer = (envoyermsg) => axios.post(url,envoyermsg, );
