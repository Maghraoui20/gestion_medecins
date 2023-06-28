import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Button,
  Typography,
  TextField
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import useStyles from "./styles";
import PlaceIcon from "@material-ui/icons/Place";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import MaterialUIPickers from '../datepicker/datepicker.js'
import { useDispatch } from 'react-redux';
import { Favoritemedecin,Deletefavoritemedecin } from '../../actions/favorite.js';
import { Reservermedecin } from "../../actions/booking";
import Time from '../timepicker/timepicker';
import { ToastContainer, toast } from 'react-toastify';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HistoryIcon from '@material-ui/icons/History';
const Cards = ({Medecin,Tablefav,Tableids,Tablevalider,Tableannuler}) => {
  const classes = useStyles();
  const  dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [favoris, setfavoris] = useState(false);
  const idmedecin= Medecin._id;
  const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
    setOpen(true);
  };
  const [favoris1, setfavoris1] = useState(false);
  const iduser = user?._id;
  const phone = user?.phone;

  const [favoritedata, setfavoritedata]= useState({iduser, idmedecin});
  const [RerservationData, setRerservationData]= useState({ iduser,phone,idmedecin,date:'',heure:'',status:''});
  const [anuuler, setannuler] = useState(false);

  const Handleclick = () => {
   
    dispatch(Reservermedecin(idmedecin,RerservationData));
    console.log('yep');
    setannuler(true);
    setOpen(!open);
    }

  const handlefavoris = () => {
    dispatch(Favoritemedecin(favoritedata));
    setfavoris(true);
    
  }
  const handleannulerfavoris = () => {
    dispatch(Deletefavoritemedecin(iduser,idmedecin));
    setfavoris(false);
  }
  const handleannulerfavoris1 = () => {
    dispatch(Deletefavoritemedecin(iduser,idmedecin));
    setfavoris1(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const onChangeDate = (e) => {
    console.log("hola");
    setRerservationData({ ...RerservationData, date: e.target.value })
    console.log(RerservationData.date,'date');

    }
    const onChangeHeure = (e) => {
      setRerservationData({ ...RerservationData, heure: e.target.value })
      }
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  console.log(Tableannuler,"rrr");
  return (
    <Card   className={classes.root} onMouseOver={()=>setState({ raised: true, shadow:1})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
      
          <div className={classes.svg}>
          <div className={classes.Container}>
            
          <div className={classes.price}>
        <span  className={classes.prix}>{Medecin.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
          { user?.Role==="client" && !favoris &&  Tablefav && ( Tablefav.indexOf(Medecin._id) ===-1 ) ?
          <IconButton className={classes.iconbtn} onClick={handlefavoris}>
          <FavoriteBorderIcon  className={classes.favoris}/>
          </IconButton>
: user?.Role==="client"  && favoris? <IconButton  className={classes.iconbtn}  onClick={handleannulerfavoris} >
<FavoriteIcon  className={classes.favoris}/>
</IconButton>  
: user?.Role==="client"   && favoris1 && Tablefav && (Tablefav.indexOf(Medecin._id) > -1 ) ?
   <IconButton className={classes.iconbtn} onClick={handlefavoris}>
   <FavoriteBorderIcon  className={classes.favoris}/>
   </IconButton>
 : user?.Role ==="client"   && !favoris1 && Tablefav && (Tablefav.indexOf(Medecin._id) > -1 ) ? <IconButton  className={classes.iconbtn} onClick={handleannulerfavoris1} >
 <FavoriteIcon  className={classes.favoris}/>
 </IconButton> 
   :
  null}
   </div>
          <div>
          <ReactLogo className={classes.mauve} />
          </div>
          </div>
        </div>
        <CardMedia className={classes.avatar1} image={Medecin.selectedimage} />


    <CardContent >
   
        <div >
          <span className={classes.dr}>Dr</span>
        
        <span className={classes.title1}>{Medecin.firstname} </span>
        <span className={classes.title2}>{Medecin.lastname} </span>

        </div>
       
        <div className={classes.place}>
           <WbIncandescentIcon className={classes.Placeicon} />   
           <span className={classes.lieu}>  Spécialité : { Medecin.namespeciality} </span>
        </div>
        <div className={classes.place}>
          <Filter9PlusIcon className={classes.Placeicon} />
          <span className={classes.nbh}> Expérience : {Medecin.Numbreofexperience}  Ans</span>
          
      
          </div>
          <div className={classes.place}>
          <PlaceIcon className={classes.Placeicon} /> 
          <span className={classes.nbh}> {Medecin.adressexact}</span>
          
      
          </div>
      </CardContent>
       <CardActions className={classes.btns}>
       <Button className={classes.buttonVoir} variant="outlined" size="large" href={`/medecin/${Medecin._id}`}>
          Details
        </Button>
        
       
      





{user?.Role === "client" && Tablevalider && (Tablevalider.indexOf(Medecin._id) > -1) ? <Button className={classes.btnreservez} variant="outlined" size="large">
          < CheckCircleIcon className={classes.booked} /> Réservée
        </Button>
          : user?.Role === "client" && Tableids && (Tableids.indexOf(Medecin._id) > -1) ? <Button className={classes.btnreservez} variant="outlined" size="large">
            < HistoryIcon className={classes.booked} />  en attente

          </Button> : user?.Role === "client" && anuuler ? <Button className={classes.btnreservez} variant="outlined" size="large">
            < HistoryIcon className={classes.booked} />  en attente

          </Button> : user?.Role === "client" && Tableannuler && (Tableannuler.indexOf(Medecin._id) > -1) ? <Button className={classes.buttonVoir} onClick={handleOpen} variant="outlined" size="large">
          Prendre RDV

          </Button> :
            user?.Role === "medecin"  ? null : user && user?.Role === "client" ? <Button className={classes.buttonVoir} variant="outlined" size="large" onClick={handleOpen} >
          Prendre RDV

            </Button> :
            <Button className={classes.buttonVoir} variant="outlined" size="large" href="/signin">
                        Prendre RDV


            </Button> }






        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper1}>
                    <div className={classes.titleicon}>
                        <Button
                            className={classes.openicon}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <CloseIcon className={classes.iconclose} />
                        </Button>
                    </div>
                    <Grid container>
                    <Grid item xs={12} lg={8} sm={4} md={4} >
                    <Typography className={classes.reser}> Réserver un rendez-vous </Typography> 
                    <div className={classes.inp}> 
                    <MaterialUIPickers onChangeDate={onChangeDate}  />
                    <Time onChangeHeure={onChangeHeure} heure={RerservationData.heure} />

                     <TextField name="phone" label="Numéro de téléphone" type="string" variant="outlined" value={RerservationData.phone} onChange={(e)=> setRerservationData({...RerservationData, phone: e.target.value ,})} className={classes.phonenumber}> </TextField>
                    </div>
                   
                     <div className={classes.buttonac}>
                        <Button className={classes.confirmer} onClick={Handleclick} >Confirmer </Button>

                            <Button className={classes.Annuller} onClick={() => {
                            setOpen(!open);
                            }}>Annuler</Button>
                            
                            </div>
                        </Grid>   
                        
                        
                        
                        </Grid>
                </div>

            </Fade>
        </Modal>
      
      </CardActions>
     
 

    
    </Card>
  );
};
export default Cards;