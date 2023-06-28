import * as api from '../api/booking';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Reservermedecin = (idmedecin, RerservationData) => async (dispatch) => {
  try {
    const { data } = await api.Reservermedecin(idmedecin, RerservationData);

    dispatch({ type: 'CREATE1', data });
    toast.success(`Merci`);

  } catch (error) {
    console.log(error);
  }
};

export const Getreserved = (iduser, page) => async (dispatch) => {
  try {
    const { data } = await api.getreservedmedecin(iduser, page);
    dispatch({ type: 'FETCH_ALL1', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};
export const réservationCancled = (iduser, idmedecin) => async (dispatch) => {
  try {
    const { data } = await api.réservationCancled(iduser, idmedecin);
    dispatch({ type: 'Update', data });
  } catch (error) {
    console.log(error.message);
  }
};
export const Annuleréservation = (iduser, idmedecin) => async (dispatch) => {
  try {
    await api.annulerréservation(iduser, idmedecin);
    dispatch({ type: 'DELETE1', payload: idmedecin });
  } catch (error) {
    console.log(error.message);
  }
};
export const Getreservationbyid = (iduser) => async (dispatch) => {
  try {
    const { data } = await api.getreservationbyid(iduser);
    dispatch({ type: 'FETCH_ALL1', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};

export const getBookingsmedecin = (iduser) => async (dispatch) => {

  try {
    const { data } = await api.reservationmedecin(iduser);


    dispatch({ type: 'FETCH_ALL1', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};
export const Reservationvalidated = (id) => async (dispatch) => {

  try {
    const { data } = await api.validation(id);
    dispatch({ type: 'Update', data });
    console.log(data ,"datahere");
  } catch (error) {
    console.log('error action', error.message);
  }
};

export const Annulation = (selected) => async (dispatch) => {
  try {
    const { data } = await api.annulation(selected);
    dispatch({ type: 'Update', data });
  } catch (error) {
    console.log('error action', error.message);
  }
};
