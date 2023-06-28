export default (prescription = [], action) => {
    switch (action.type) {
case 'CREATE3' :
    return [...prescription, action?.payload];
    case 'FETCH_ALL':
        return action.payload;
   case 'Update3':
   return action?.data;
case 'DELETE3':
    return prescription.filter((prescription) => prescription.idmedecin !== action.payload);
default:
    return prescription;
    }
};