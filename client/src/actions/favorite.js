import * as api from '../api/favorite';


export const Favoritemedecin = (favoritedata) => async (dispatch) => {
    try {
      const { data } = await api.favoritemedecin(favoritedata);
  
      dispatch({ type: 'CREATE2', data });
    } catch (error) {
      console.log(error);
    }
  };
  export const Deletefavoritemedecin = (iduser, idmedecin) => async (dispatch) => {
    try {
      const { data } = await api.deletefavoritemedecin(iduser, idmedecin);
      dispatch({ type: 'Delete2', data });
      return data;
    } catch (error) {
      console.log('error action', error.message);
    }
  };
  export const Getfavoritebyid = (iduser) => async (dispatch) => {
    try {
      const { data } = await api.getfavoritebyid(iduser);
      dispatch({ type: 'FETCH_ALL2', data });
      return data;
    } catch (error) {
      console.log('error action', error.message);
    }
  };
  export const Getfavoritemedecins = (iduser, page) => async (dispatch) => {
    try {
      const { data } = await api.getfavoritemedecins(iduser, page);
      dispatch({ type: 'FETCH_ALL2', data });
      console.log('data',data);
      return data;
    } catch (error) {
      console.log('error action', error.message);
    }
  };
  export const Filtrerfavorite = (iduser, idmedecin) => async (dispatch) => {
    try {
       await api.deletefavoritemedecin(iduser, idmedecin);
      dispatch({ type: 'Delete1', idmedecin });
    } catch (error) {
      console.log('error action', error.message);
    }
  };