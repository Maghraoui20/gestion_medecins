import * as api from "../api/authentification.js";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const signup = (signData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpus(signData);
   
    dispatch({ type: 'auth', data });
    history.push('/nosmedecin');
    toast.success(`Bienvenue ${data.result.lastname} !`);
  } catch (error) {
    console.log(error);
    toast.error('Email ou mot de passe invalide');

  }
};




export const signupmedecin = (medecinData, history) => async (dispatch) => {
    try {

      const { data } = await api.signUp(medecinData);
      dispatch({ type: 'auth', data });
     history.push('/nosmedecin');
    toast.success(`Bienvenue ${data.result.lastname} !`);
    } catch (error) {
      console.log(error);
    }
  }
  export const signinuser = (signinData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(signinData);
      dispatch({ type: 'auth', data });
      if (data.result.Role === 'medecin') {
      history.push('/nosmedecin') ;
      toast.success(`Bienvenue ${data.result.lastname} !`);
      console.log(data.result.lastname,"nomm");

    }
    else if 
      (data.result.Role === 'client'){
        console.log(data.result);
        toast.success(`Bienvenue ${data.result.firstname} !`);
        history.push('/') ;
    }
   
    } catch (error) {
      console.log(error);
      toast.error('Email ou mot de passe invalide');
    }
  };
  export const forgetpassword = (emailData) => async (dispatch) => {

    try {
      console.log(emailData);
      const  {data} = await api.forgetpass(emailData);
      console.log(data,"haha");
      dispatch({type :'forget', data});
      toast.success(' Un email a été  envoye, Verifier votre boite mail ');

    } catch (error) {
      console.log(error);
      toast.error('Email introuvable');
    }
  };
  export const updateUser = (id, userData) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(id, userData);

      dispatch({ type: 'UPDATE', data });
      toast.success(`Vous avez bien modifier vos informations `);

    } catch (error) {
      console.log(error);
    }
  };
 