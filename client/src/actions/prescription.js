import * as api from "../api/prescription.js";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const confirmerprescription = (Datauser) => async (dispatch) => {
    try {
      const { data } = await api.confirmerprescription(Datauser);
      dispatch({ type: 'CREATE3', data });
      console.log(data,"data");
      toast.success(`Vous avez bien modifier vos informations `);

    } catch (error) {
      console.log(error);
    }
  };
  export const getprescription = (iduser,idmedecin) => async (dispatch) => {
    try {
      const { data } = await api.getprescription(iduser,idmedecin);
      dispatch({ type: 'FETCH_ALL', payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };