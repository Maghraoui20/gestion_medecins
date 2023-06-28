import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, FormLabel, Paper, Grid, Container, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Selectspecialty from '../Select/Selectspecialty';
import { useHistory } from 'react-router-dom';
import { signupmedecin } from '../../actions/authentification';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import Input from './inputsuser';
import Img3 from '../Pictures/doctor.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast, zoom } from "react-toastify";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import "react-toastify/dist/ReactToastify.css";
import Modal from './modal';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import { getgouvernorat } from '../../actions/gouvernorat';
import { getCity } from '../../actions/cities';

const Medecin = ({ currentId, setCurrentId }) => {


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
 

  const [medecinData, setmedecinData] = useState({ firstname: '', lastname: '', phone: '', price:'',  gouvernorate: '', city:'',  idgouvernorate:'', idcity:'', adressexact: '', idspeciality: [], namespeciality: [], Numbreofexperience: '', description:'', cin: '',  email: '', password: '', confirmerMotdepasse: '', selectedimage: '' , });
  const [helperTextimg, setHelperTextimg] = React.useState('');
  

  const valueimg = medecinData.selectedimage.indexOf("/");
  const valueimg2 = medecinData.selectedimage.indexOf(";");
  const fileimg = medecinData.selectedimage;
  const numberimg = valueimg2 - valueimg;
  const extensionimg = fileimg.substr(valueimg, numberimg);
  const [error, setError] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const [speciality, setspeciality] = useState([]);
  const dispatch = useDispatch();
  const [City, setCity] = useState([]);
  const [gouvernorat, setGouvernorats] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setspeciality(res);
    });
  }, []);
  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
       setGouvernorats(res);
    });
  }, []);
  useEffect(() => {
    dispatch(getCity()).then((res) => {
      setCity(res);

    });
  }, []);

  const onChangeData2 = (e, val) => {
    let tab =[];
    let tabname=[];
    val === null ? setmedecinData({ ...medecinData, idspeciality: null, namespeciality: null }) :
    val.map((e)=> 

{tab.push(e._id);
tabname.push(e.nom);}
    )
    setmedecinData({...medecinData, idspeciality : tab, namespeciality : tabname });

console.log('taab' , medecinData.idspeciality);
  }

const handleChangeemail = (event) => {
  setmedecinData({ ...medecinData, email: event.target.value })

}
const handleChangegouvernorat = (e, val) => {
  let nom = val.nom;

  val === null ? setmedecinData({ ...medecinData, gouvernorate: null }) :
 
    setmedecinData({ ...medecinData,  gouvernorate: nom, idgouvernorate: val._id })
  val === null ? setfiltredCity([]) :
    setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
};

const handleChangecity = (e, val) => {
  let nom = val.nom;
  console.log(nom);
  e.preventDefault();
  val === null ? setmedecinData({ ...medecinData,  city: null }) :

    setmedecinData({ ...medecinData, city: nom , idcity: val._id });

};

  const handleChangemotdepasse = (event) => {
    setmedecinData({ ...medecinData, password: event.target.value })
  };
  const handleChangeconfirme = (event) => {
    setmedecinData({ ...medecinData, confirmerMotdepasse: event.target.value })
  };
  const clear = () => {
    setHelperTextimg('');
    setmedecinData({ firstname: '', lastname: '', phone: '',  price:'' ,idspeciality: '',adressexact:'', gouvernorate: '', city:'',  idgouvernorate:'', idcity:'',namespeciality: '', Numbreofexperience: '', description:'', cin: '', email: '', password: '', confirmerMotdepasse: '', selectedimage: '' });
  } 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png") && medecinData.password === medecinData.confirmerMotdepasse && medecinData.password.length >= 8 && medecinData.phone.length === 8 && medecinData.cin.length === 8) {
    

    dispatch(signupmedecin(medecinData, history));
    clear();
      setError(false);
   
      setHelperTextimg('');
     
    }
  
if (extensionimg !== "/jpeg" || extensionimg !== "/jpg" || extensionimg !== "/png") {
      setHelperTextimg('Choisir un fichier de type image')
      setError(true);
    }
 

   if (medecinData.phone.length < 8) {
      toast.error('Le  Numéro de telephone doit contenir doit contenir exactement 8 chiffres  ');
    }

   if (medecinData.cin.length < 8) {
      toast.error('Le  Numéro de carte d identité doit contenir exactement 8 chiffres ');
    }
 if (medecinData.password !== medecinData.confirmerMotdepasse) {
  toast.error( 'Les mots de passe ne sont pas identiques');
}
    if (medecinData.password.length < 8) {
      toast.error('Le  Mot de passe doit contenir au minimum  8 caractères ');
    }
  };
  return (
    
    <Paper elevation={3} className={classes.papermedecin}  >
      
    <form onSubmit={handleSubmit} >
      <ToastContainer />
      
      <Grid container >
        <div className={classes.formu}>
        <Grid item lg={4} sm={3} md={3} xs={6} >
        <Button className={classes.return} href="/signin" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
          <h3 className={classes.comptemedecin}>Créer un compte</h3>
          <div className={classes.colf1}>
            <TextField required className={classes.textf} name='firstname' variant="outlined" label="nom " type="string" value={medecinData.firstname} onChange={(e) => setmedecinData({ ...medecinData, firstname: e.target.value })} autoFocus ></TextField>
            <TextField required className={classes.textf} name='lastname' variant="outlined" label="prénom" type="string" value={medecinData.lastname} onChange={(e) => setmedecinData({ ...medecinData, lastname: e.target.value })} ></TextField>
            <Selectspecialty  value={medecinData.idspeciality} onChangeData2={onChangeData2} speciality={speciality} />

            <TextField required className={classes.textf} name='phone' variant="outlined" label=" Telephone" type="number" value={medecinData.phone} onChange={(e) => setmedecinData({ ...medecinData, phone: e.target.value })} ></TextField>
            <TextField required className={classes.textf} name='Numbreofexperience ' variant="outlined" label=" Année  d'expérience (ans)" type="number" value={medecinData.Numbreofexperience} onChange={(e) => setmedecinData({ ...medecinData, Numbreofexperience: e.target.value })} ></TextField>
     
            

          </div>
        </Grid>
        <Grid item lg={4} sm={3} md={3} xs={6} >
          <div className={classes.colf22}>
            <TextField required className={classes.textf2} name='cin' variant="outlined" label=" Carte d'intentité" type="String" value={medecinData.cin} onChange={(e) => setmedecinData({ ...medecinData, cin: e.target.value })} ></TextField>
            <TextField required className={classes.textf2} name='adressexact' variant="outlined" label="Adresse exacte" type="string" value={medecinData.adressexact} onChange={(e) => setmedecinData({ ...medecinData, adressexact: e.target.value })} ></TextField>
            <Selectgouvernorat  onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat} />
                <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity} />  
                <TextField required className={classes.textf} name='prix' variant="outlined" label=" Prix" type="number" value={medecinData.price} onChange={(e) => setmedecinData({ ...medecinData, price: e.target.value })} ></TextField>

           
            
         
            </div>
          
        </Grid>
        <Grid item lg={4} sm={3} md={3} xs={6}>
        <div className={classes.colf3}>
            <TextField required name='description' type="string" variant="outlined" label="Déscription" value={medecinData.description} onChange={(e) => setmedecinData({ ...medecinData, description: e.target.value })} rows={5} cols={6} multiline className={classes.textf} ></TextField>
            <TextField name="email" label="Email" onChange={handleChangeemail} variant="outlined" required type="email" className={classes.email1}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon className={classes.mailicon} />
                  </InputAdornment>
                ),
              }}
            />
            <Input name="password" label="Mot de passe" handleChange={handleChangemotdepasse} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirme} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
            <Typography className={classes.labela}  >Ajouter une image </Typography>
            <div className={classes.filebase1}>
              <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setmedecinData({ ...medecinData, selectedimage: base64 })} />
            </div>
    {/*     <FormHelperText className={classes.error} >{helperTextimg}</FormHelperText> */}
     
            </div>
        </Grid>
        </div>
      </Grid>
      
      <Button className={classes.btnmedecin} variant="outlined" color="primary" type="submit" > S'inscrire</Button>

    </form>

  </Paper >

  );

}
export default Medecin;