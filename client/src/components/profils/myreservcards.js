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

import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from 'react-redux';
import { réservationCancled,Annuleréservation } from "../../actions/booking";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';
import HistoryIcon from '@material-ui/icons/History';
import TaskIcon from '@mui/icons-material/Task';
import {getprescription} from '../../actions/prescription.js'
const Cards = ({Medecin,Tablevalider,Tableids}) => {
  const classes = useStyles();
  const  dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const idmedecin= Medecin._id;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [presc, setPresc] = React.useState();
 const handleOpen = () => {
    setOpen(true);
  };
  const iduser = user?._id;
  
  const Annuler= () =>{
    dispatch( réservationCancled(iduser,idmedecin));
    window.location.reload(false);
   
  }
const OpenPrescription=()=>{
  setOpen2(true);

  dispatch( getprescription(iduser,idmedecin)).then((res) => {
    setPresc(res);
      });


}
const handleClose2 = () => {
  setOpen2(false);
}


    const Handleclick = () => {
      dispatch(Annuleréservation(iduser,idmedecin));
        setOpen(!open);
      window.location.reload(false);
      }
      const handleClose = () => {
        setOpen(false);
      }
 
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
    <Card className={classes.rootres} onMouseOver={()=>setState({ raised: true, shadow:1})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
      
          <div className={classes.svg}>
          <div className={classes.Container}>
            
          <div className={classes.price}>
        <span  className={classes.prix}>{Medecin.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
         
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

  
        { user?.Role ==="client" && Tablevalider && ( Tablevalider.indexOf(Medecin._id) > -1 )  ? 
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        <Button  className={classes.btnupdates} {...bindTrigger(popupState)} >
        <MoreVertIcon className={classes.iconupdates}/>
        </Button>
        <Menu {...bindMenu(popupState)}>
            <MenuItem   onClick={Annuler}> Annuler la réservation  <CancelIcon  className={classes.iconsu1}/></MenuItem>
            <MenuItem   onClick={OpenPrescription}> Voir prescription  <TaskIcon  className={classes.iconsu1}></TaskIcon></MenuItem>

          </Menu>
        </React.Fragment>
      )}

    </PopupState>
        : user?.Role ==="client" && Tableids && ( Tableids.indexOf(Medecin._id) > -1 ) ?   <Button className={classes.btnreservez}
           onClick={handleOpen} variant="outlined" size="large">
        < HistoryIcon className={classes.booked} />  en attente   
    
        
      </Button> : null  }

    
      <Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={open2}
onClose={handleClose2}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
    timeout: 500,
}}
>
<Fade in={open2}>
    <div className={classes.paper4}>
   {presc?.length ===0 ? <div style={{display:"flex", justifyContent:"center", alignContent:"center", color:'#3cbbbb', alignItems:"center", fontSize:22, fontWeight:"bold"}}><p style={{marginTop:250, marginLeft:30, marginRight:20}}>Vous n'avez pas de prescription pour le moment, Veuillez contacter votre médecin !</p> </div>:
     <Card sx={{ maxWidth: 345 }}>
       
     {presc?.map((e)=>
      <CardMedia
        component="img"
        alt="green iguana"
      
        image={e.prescription}
        className={classes.imgcard}
      />)}
      <div className={classes.openicon}>
       <Button
                className={classes.openicon}
                onClick={() => {
                  setOpen2(!open2);
                }}
            >
                <CloseIcon className={classes.iconclose} />
            </Button>
            </div>
      <CardContent>
      
        <h3 gutterBottom variant="h5" component="div" className={classes.message}>
          Message
        </h3>
      
        {presc?.map((e)=> 

        <p variant="body2" color="text.secondary" >
      
        {e.comment} 
        </p>)}
      </CardContent>
     
    </Card> 
   
        }
           
       
        
    </div>

</Fade>
</Modal>

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
                <div className={classes.paper2}>
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
                    <Typography className={classes.typo} >Voulez vous vraiment annuler cette réservation ? </Typography> 
                        </Grid>   
                        <Grid item xs={12} lg={8} sm={4} md={4}>
                            <div className={classes.buttonac}>
                        <Button className={classes.confirmer} onClick={Handleclick}>Confirmer </Button>

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