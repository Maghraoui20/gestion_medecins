import * as api from '../api/messages';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const envoyer = (envoyermsg) => async (dispatch) => {
    try {
      const { data } = await api.envoyer(envoyermsg);
  
      dispatch({ type: 'CREATE', data });
      toast.success(`Merci pour votre message ! `);

    } catch (error) {
      console.log(error);
    }
  };