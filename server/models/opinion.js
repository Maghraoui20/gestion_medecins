import mongoose from 'mongoose';
const opinionSchema = mongoose.Schema({
idmedecin:  {type: mongoose.Schema.ObjectId, ref : 'medecin'}, 
comment:{ type: String, required:true},
iduser: {type: mongoose.Schema.ObjectId, ref : 'clients'},
createdAt: {
    type: Date,
    default: new Date()
},
ratingvalueContenu :Number,

});
const  opinion = mongoose.model('opinion', opinionSchema);
export default opinion; 