import axios from "axios";


const url1 = 'http://localhost:5030/medecin/pagemedecin';
const url2 = 'http://localhost:5030/medecin/pagemedecinsearched';
const url3 = 'http://localhost:5030/medecin/one';
const url4 = 'http://localhost:5030/medecin/all';


export const fetchMedecin = (pageNumber) => {
    return axios.get(url1, { params: { pageNumber}}
    )
  };
  export const fetchallMedecin = () => {
    return axios.get(url4
    )
  };
  export const fetchsearchedMedecin = (pageNumber,InputSearch) => {
    return axios.get(url2, { params: { pageNumber,InputSearch}}
    )
  };
  export const fetchOneMedecin = (idmedecin) => {
    return axios.get(url3,{params:{idmedecin}})
  };