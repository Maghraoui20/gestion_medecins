export default (favorite = [], action) => {
    switch (action.type) {
case 'CREATE2' :
    return [...favorite, action?.data];
case 'FETCH_ALL2':
   return action?.data;
   case 'Delete2':
    return action?.data;
    case 'Delete1':
   return favorite.filter((f) => f.idmedecin !== action.idmedecin);
    default:
    return favorite;
    }
};