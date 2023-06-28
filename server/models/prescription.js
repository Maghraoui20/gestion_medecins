import mongoose from 'mongoose';
const prescriptionSchema = mongoose.Schema({
idmedecin:  {type: mongoose.Schema.ObjectId, ref : 'medecin'}, 
iduser: {type: mongoose.Schema.ObjectId, ref : 'clients'},
comment:String,
prescription:String,

createdAt: {
    type: Date,
    default: new Date()
},
});
const  prescription = mongoose.model('prescription', prescriptionSchema);
export default prescription; 