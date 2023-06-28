import Medecin from "../models/medecin.js";
import jwt from 'jsonwebtoken'; 
import User from '../models/user.js';
import Categorie from "../models/categorie.js";
import bcrypt from 'bcryptjs';


export const  signupMedecin = async (req, res) => {

    const { 
       firstname,
      lastname,
       gender,
      Numbreofexperience,
      idspeciality,
      phone,
      namespeciality,
     description,
      cin,
      selectedimage,
       email, 
       adressexact,
       password, 
       idgouvernorate,
       city,
       gouvernorate,
       idcity,
       price,
       confirmerMotdepasse } = req.body;
     try {
      const userexist = await User.findOne({ email });
      const Medecinexist = await Medecin.findOne({email});
      if (userexist || Medecinexist ) return res.status(400).json({ message: 'Email exist déjà' });
        if (password !== confirmerMotdepasse ) return res.status(400).json({message:'confimer votre mot de passe'});
        const hashedpassword = await bcrypt.hashSync(password, 12);
        const result = await Medecin.create({
          firstname,
          lastname,
          gender,
          
          phone,
          Numbreofexperience,
          idspeciality,
          namespeciality,
          description,
          cin,
          selectedimage,
           email, 
           adressexact,
           idgouvernorate,
           city,
           gouvernorate,
           idcity,
           price,
           password: hashedpassword,});
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn:"1d"});
        let tabCateg = [];
        const spe=  await Categorie.find({_id:{$in : idspeciality}});
        spe.map(async(el)=> {
         tabCateg.push(el._id);
         } )
         await Categorie.updateMany({_id : {$in : tabCateg }}, {$push:{ idsMedecin : result._id}})
        res.status(200).json({result, token});
     }
     catch (error) {
         res.status(500).json({message:"erreur "});
         console.log(error);
     }
    };





    export const getAllMedecins = async (req, res) => {
      try {
        const page = parseInt(req.query.pageNumber || "1");
        const PAGE_SIZE = 3;
        const AllMedecin = await Medecin.find().limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));;
        res.status(200).json({
          AllMedecin,
        });

      } 
      catch (error) {
        res.status(404).json({ message: error.message });
      }
    };
    
    export const gettoutMedecins = async (req, res) => {
      try {
      
        const tousmedecins = await Medecin.find();
        res.status(200).json({
          tousmedecins,
        });

      } 
      catch (error) {
        res.status(404).json({ message: error.message });
      }
    };
    export const getsearchedMedecin = async (req, res) => {
      try {
        //console.log("hello");
        //console.log(req.query.InputSearch,"gg");
        const page = parseInt(req.query.pageNumber || "1");
        const PAGE_SIZE = 3;
        const inputsearched = req.query.InputSearch.replace(/\s\s+/g, " ");

        const AllMedecin = await Medecin.find({      
           $or: [
  
          
            {firstname:{$regex : inputsearched}},
            {lastname:{$regex : inputsearched}}, 
      
            ],
      
        }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));;

        res.status(200).json({
          AllMedecin,
        });

      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    };
     
    
    export const getOneMedecin = async (req, res) => {
      try {
        
        const  ids  = req.query.idmedecin;
      
        const OneMedecin = await Medecin.find({_id:ids});
    
       
       
        res.status(200).json({
          OneMedecin,
         
        });
      } catch (error) {
        res.status(404).json({ message: error.message });
      };
    };