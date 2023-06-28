import Opinion from '../models/opinion.js';


export const Opinionmedecin = async (req, res) => {
const {
  idmedecin,
  comment,
  iduser,
  ratingvalueContenu,
  
}=req.body

    const newopinion = new Opinion({
        idmedecin,
        comment,
        iduser,
        ratingvalueContenu,
        
    });
    try {
     
      await newopinion.save((err, resultat) => {
        if (err) return res.status(400).json({ message:" Error : Le champ commentaire est obligator"});
      })
      res.status(200).json({ message: "Avis envoyé avec succès, Merci "});
    
    
     
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


  export const getOpinionsmedein= async (req,res) => {
    let idvalider=[];
    try {
      const idt = req.query.idmedecin;
      const Opinions = await  Opinion.find({idmedecin:idt});
      Opinions.map((el)=> {
        idvalider.push(el._id);
      }); 
    console.log(Opinions);
     const avis = await Opinion.aggregate([
        {
          $lookup: {
            from: "clients",
            localField: "iduser",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $unwind: "$users",
        },
            
        {
          $match:{
            _id: {$in:idvalider}
          },
        },
        {
          $sort:{
            createdAt: -1 
          }
        },
        { $project:{
          "users.firstname":1,
          "users.lastname":1,
          "users.selectedimage":1,
          "comment":1,
          "ratingvalueContenu":1,
          "createdAt":1,
        }},  
      
      ]);
      console.log('avishey',avis);
      res.status(200).json(avis);
  }
    catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err)
  }
  }