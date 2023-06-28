import mongoose from 'mongoose';
const bookingSchema = mongoose.Schema({
idmedecin:  {type: mongoose.Schema.ObjectId, ref : 'medecin'}, 
phone: String,
date:String,
heure:String,
status:String,

iduser: {type: mongoose.Schema.ObjectId, ref : 'clients'},
status:String,
createdAt: {
    type: Date,
    default: new Date()
},
});
const  booking = mongoose.model('booking', bookingSchema);
export default booking; 