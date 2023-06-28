import mongoose from 'mongoose';
const categorieSchema = mongoose.Schema({
nom:  String, 
idsmedecin: [{ type: mongoose.Schema.ObjectId, ref: 'Medecin' }],

});
const  categorie= mongoose.model('categorie', categorieSchema);
export default categorie; 