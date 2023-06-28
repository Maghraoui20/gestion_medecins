import Prescription from "../models/prescription.js";




export const confirmerprescription = async (req, res) => {

    try {

        const {
          iduser,
          comment,
          prescription,
    
          idmedecin,
    
        } = req.body
        console.log('icii');
        const newPrescription= new Prescription({
          iduser,
          comment,
          prescription,
    
          idmedecin,
        });
    
        await newPrescription.save();

      }
      catch (err) {
        res.status(500).json({ message: err.message });
      }
  };
  export const getprescription = async (req, res) => {
    try{
     const iduser=req.query.iduser;
     const idmedecin=req.query.idmedecin;

      const prescription = await Prescription.find({iduser:iduser, idmedecin:idmedecin});
     res.status(200).json(prescription);

    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }