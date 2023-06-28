import * as api from "../api/medecin";

export const getMedecin =(pageNumber) => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchMedecin(pageNumber);
 
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const getallMedecin =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchallMedecin();
 
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const getsearchedMedecin =(pageNumber,InputSearch) => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchsearchedMedecin(pageNumber,InputSearch);
 
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const getOneMedecin = (idmedecin) => async (dispatch)  => {
  
    try {
      const {data} =  await api.fetchOneMedecin(idmedecin);
       dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };