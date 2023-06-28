import mongoose from 'mongoose';
const favoriteSchema = mongoose.Schema({
idmedecin:  {type: mongoose.Schema.ObjectId, ref : 'medecin'}, 
iduser: {type: mongoose.Schema.ObjectId, ref : 'client'},
});
const  favorite = mongoose.model('favorite', favoriteSchema);
export default favorite;