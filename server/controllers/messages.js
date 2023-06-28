import Message from '../models/messages.js';


export const envoyer = async (req, res) => {
const {
  nom,
  email,
  message,
  
}=req.body

    const newmessage = new Message({
        nom,
        email,
        message,
        
    });
    try {
     
      await newmessage.save((err, resultat) => {
        if (err) return res.status(400).json({ message:" Error "});
      })
      res.status(200).json({ message: "message envoyé avec succès, Merci "});
    
    
     
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
