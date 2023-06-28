import * as api from "../api/opinion";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const createOpinion = (newOpinion) => async (dispatch) => {
    try {
        const {data} = await api.createOpinion(newOpinion);
        dispatch({ type:'CREATE3', payload: data})
        toast.success('Votre avis a été envoyé avec succès ');

    }catch (error){
        console.log(error);
  
    }
  };


  export const getOpinions = (idmedecin) => async (dispatch) => {
    try {
      const { data } = await api.getmedecingopinions(idmedecin);
      dispatch({ type: 'FETCH_ALL', payload: data });
      return data;
    } catch (error) {
      console.log('error action', error.message);
    }
  };