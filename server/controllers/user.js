import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import Medecin from '../models/medecin.js';
import Mailgrid from "@sendgrid/mail";

Mailgrid.setApiKey(
  "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 "
);
const url = "http://localhost:3000";




export const signup = async (req, res) => {
  const { firstname, lastname, city, gouvernorate, idgouvernorate,idcity, cin, phone, email, password, confirmerMotdepasse, } = req.body;
  try {
    const userexist = await User.findOne({ email });
    const medecinexist = await Medecin.findOne({ email });
    if (userexist || medecinexist ) return res.status(400).json({ message: 'Email exist déjà' });
    if (password !== confirmerMotdepasse) return res.status(400).json({ message: 'confimer votre mot de passe' });
    const hashedpassword = await bcrypt.hash(password, 12);
    const result = await User.create({firstname, lastname, city, gouvernorate, idgouvernorate,idcity,cin, phone, email, password: hashedpassword });
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1d" });
    
    res.status(200).json({ result, token });
  }
  catch (error) {
    res.status(500).json({ message: "erreur " });
    console.log(error);
  }
}








export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      const usermedecin = await Medecin.findOne({ email });
      if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "1d" });
        res.status(200).json({ result: user, token });
      }
      else
        if (usermedecin) {
          const isPasswordCorrect = await bcrypt.compare(password, usermedecin.password);
          if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
          const token = jwt.sign({ email: usermedecin.email, id: usermedecin._id }, 'test', { expiresIn: "1d" });
          res.status(200).json({ result: usermedecin, token });
        }
       
          else {
            if (!user && !usermedecin ) return res.status(404).json({ message: "utilisateur inexistant" });
          }
    } catch (err) {
      res.status(500).json({ message: "il ya une erreur" });
    }
  };



 

export const forgetpassword = async (req, res) => {
const { email } = req.body;
console.log(email);
try {
const user = await User.findOne({ email });
const usermedecin = await Medecin.findOne({ email });
if (user) {
const token = jwt.sign({ email: user.email, id: user._id }, 'resetpass2022', { expiresIn: "1d" });
const emailinfos = {
  from: 'amani.maghraoui@esen.tn',
  to: email,
  subject: "changer Mot de passe ",
  html: `   
  <h1>Clicker ce lien pour changer votre mot de passe </h1>
   <a href ="${url}/user/resetpassword/${token}" > link </a> 
  <hr />
  <p>Ce link va expirer dans 30 minutes </p>
        `,
};
return user.updateOne({ resetLink: token }, (err, user) => {
  if (err || !user) {
    return res.status(400).json({
      errors: "reset password link error",
    });
  } else {/*
    Mailgrid
      .send(emailinfos)
      .then(() => {
        return res.send(`a reset password link has been sent to ${email}`);
      })
      .catch((err) => {

        return res.status(400).json({
          err,
                }
                
                
                );
      }
      
      );*/
  }
});
}
else if (usermedecin) {
const token = jwt.sign({ email: usermedecin.email, id: usermedecin._id }, 'resetpass2022', { expiresIn: "2min" });
console.log(token);
const emailinfos = {
  from: 'maghraouiameni20@gmail.com',
  to: email,
  subject: "changer Mot de passe ",
  html: `
    <h1>Clicker ce lien pour changer votre mot de passe </h1>
    <p> ${url}/user/resetpassword/${token} </p>
    <hr />
    <p>Ce link va expirer dans 30 minutes </p>
          `,
};
console.log("heloo");
let done=    usermedecin.updateOne({ resetLink: token });
console.log("lena",done);
  console.log("b3ath");
  Mailgrid
  .send(emailinfos)
  .then(() => {
    return  res.send(`a reset password link has been sent to ${email}`);
    
  })
  .catch((err) => {
    console.log("88");
    console.log(err.toString());

    return res.status(400).json({
      err,
    });
  });


}
else {
  if (!user && !usermedecin ) return res.status(404).json({ message: "utilisateur inexistant" });
  }
  
  } catch (err) {
  res.status(500).json({ message: err.message });
  }

return  usermedecin.updateOne({ resetLink: token }, (err, usermedecin) => {
  console.log("hi");

  if (err || !usermedecin) {
    return  res.status(400).json({

      errors: "reset password link error",
    });
  } else {
    Mailgrid
      .send(emailinfos)
      .then(() => {
        return  res.send(`a reset password link has been sent to ${email}`);
      })
      .catch((err) => {
        console.log("mm");
        console.log(err.message);

        return res.status(400).json({
          err,
        });
      });
  }
}); }


export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const infos = req.body;
  try {
console.log(infos,"infor");
    const user = await User.findOne({ _id });
    const medecin = await Medecin.findOne({ _id });
    const email = infos.email;
    const userexist = await User.findOne({ email });
    const medecinexist = await Medecin.findOne({ email });
   

  if (user) {
      if (user?.email !== infos.email && !userexist && !medecinexist && !centerexist && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname,
           lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword,
            cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      if (user?.email !== infos.email && !userexist && !medecinexist && !centerexist && !infos.mdpactuel) {
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, 
          phone: infos.phone, email: infos.email, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, 
        }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (user && user?.email === infos.email && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos?.mdpactuel, user?.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe actuel incorrect" });
        const hashedpassword = await bcrypt.hash(infos?.password, 12);
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone,
          
          
          email: infos.email, password: hashedpassword, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate,
          }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (user && user?.email === infos.email && !infos.mdpactuel) {
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone,
           email: infos.email, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, }, { new: true });
        const message = "success!";
        res.json({ result, message });
        console.log('ici');
      }
    }
if(medecin) {

      if (medecin?.email !== infos.email && !userexist && !medecinexist&& infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, medecin.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await Medecin.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin,  selectedimage: infos.selectedimage, Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description , price:infos.price,adressexact:infos.adressexact }, { new: true });
        const message = "success!";

        res.json({ result, message });
      }
      if (medecin?.email !== infos.email && !userexist && !medecinexist && !infos.mdpactuel) {
        const result = await Medecin.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin,  selectedimage: infos.selectedimage, Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description,price:infos.price,adressexact:infos.adressexact }, { new: true });
        const message = "success!";
        res.json({ result, message });

      }
      else if (medecin && medecin?.email === infos.email && infos.mdpactuel) {
     
        const isPasswordCorrect = await bcrypt.compare(infos?.mdpactuel, medecin?.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos?.password, 12);
        const result = await Medecin.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin,  selectedimage: infos.selectedimage, Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description ,price:infos.price,adressexact:infos.adressexact }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (medecin && medecin?.email === infos.email && !infos.mdpactuel) {
        const result = await Medecin.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin,  selectedimage: infos.selectedimage, Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,price:infos.price,adressexact:infos.adressexact }, { new: true });
        const message = "success!";
        res.json({ result, message });
    }
  }

    
 else {if (!user && !medecin ) return res.status(404).json({ message: "utilisateur inexistant" });
}
}
  catch (err) {

    res.status(500).json({ message: err.message });
  }
};


export const getuser = async (req, res) => {
  try {
    
    const  ids  = req.query.iduser;
    const user = await User.find({ _id: ids });

   
    res.status(200).json({
      user,
     
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  };
};

