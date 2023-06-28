import Favorite from '../models/favorite.js';
import Medecin from '../models/medecin.js';
export const Favoritemedecin = async (req, res) => {
    const {
      iduser,
      idmedecin,
    }= req.body
    const newfavorite = new Favorite({
      iduser,
      idmedecin,
    });
    try {
      await newfavorite.save();
      res.status(201).json(newfavorite);
    
     } 
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err.message)
    }
  }
  export const Deletefavoritemedecin = async (req, res) => {
    try {
      const id = req.query.iduser;
      const idt = req.query.idmedecin;
      await Favorite.findOneAndRemove({iduser: id, idmedecin:idt}) ;
      console.log('yess');

      res.json({ message: " succés !" });     } 

    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err.message)
    }
  }

  export const Getfavoritebyid = async (req, res) => {
    let medecinid=[];
    try {
      const id = req.query.iduser;
      const medecinfav = await Favorite.find({iduser: id}).select({"idmedecin":1, "_id":0});
      //console.log('medecinfav',medecinfav);
      medecinfav.map((el)=> {
        medecinid.push(el.idmedecin);

        })

        res.status(200).json(
          medecinid,
        )
    
    
    }
    catch (err) {
      res.status(500).json({ message: err.message });
  
    }
  
  }
  

   

export const Getfavoritemedecins= async (req, res) => {

  let medecinsid=[];

  try {
    const id = req.query.iduser;

    const page = parseInt(req.query.page || "1");
    const PAGE_SIZE = 4;
    const medecinsfav = await Favorite.find({iduser: id}).select({"idmedecin":1, "_id":0});
    medecinsfav.map((el)=> {
      medecinsid.push(el.idmedecin);

      })
      const medecins = await Medecin.find({ _id:{$in:medecinsid}}).limit(PAGE_SIZE).skip(PAGE_SIZE* (page - 1))
      res.status(200).json(
        medecins,
      )
  
  
  }
  catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err)

  }

}