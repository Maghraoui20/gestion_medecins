import axios from "axios";

const url1 = 'http://localhost:5030/user';

export const fetchuser = (iduser) => {
    return   axios.get(url1, {params:{iduser}});
  };