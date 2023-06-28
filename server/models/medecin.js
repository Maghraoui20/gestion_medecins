import mongoose from 'mongoose';

const medecinSchema = mongoose.Schema({
    firstname: {type: String , required:true },
     lastname:  {type: String , required:true },
    phone: { type: String , required:true , minlength:8},
    adressexact: {type: String , required:true },
    Numbreofexperience: Number ,
    description:{type: String, required:true},
    cin: {type: String , minlength:8} , 
    namespeciality: [{type : String}],
    selectedimage: String,
    email:{ type:String, required:true , unique:true},
    password : {type:String, required:true},
    createdAt: {
    type: Date,
    default: new Date()
    },
    idspeciality: [{ type: mongoose.Schema.ObjectId, ref: 'categorie' }],

    Role :{
        type: String, 
        default: "medecin",
    },
    resetLink: {
        data: String,
        default :'',
      },
      idcity:{type: mongoose.Schema.ObjectId, ref : 'cities'},
      idgouvernorate:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},

      city : {type: String, required:true, trim: true },
      gouvernorate : {type: String, required:true, trim: true },
      price:{ type: String , required:true}

});


const Medecin = mongoose.model('Medecin', medecinSchema);
export default Medecin;