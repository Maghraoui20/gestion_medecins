import Categorie from '../models/categorie.js';


export const getcategorie = async (req, res) => {
    try {
      const categories = await Categorie.find();
      res.status(200).json(categories);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
};