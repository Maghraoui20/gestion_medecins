import * as api from "../api/user";

export const getuser = (iduser) => async (dispatch)  => {
  
    try {
      const {data} =  await api.fetchuser(iduser);
       dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };