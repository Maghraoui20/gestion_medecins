import React, { useState, useEffect } from "react";
import useStyles from './styles';

import { Grid, Paper, Avatar,Typography,TextField, Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getOneMedecin } from '../../actions/medecin';
import EmailIcon from '@material-ui/icons/Email';

import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from "@material-ui/icons/Place";

import CardOne from '../Medecins/cardone';
import { Getfavoritebyid } from '../../actions/favorite.js';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import {createOpinion,getOpinions} from '../../actions/opinion';
import { Getreservationbyid } from '../../actions/booking';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'

const DetailsFormer = () => {
    const dispatch = useDispatch();
    const [OneMedecin, setOneMedecin] = useState([]);
    const [avis,setavis]=useState([]);

    const url = window.location.href;
    const [tablefav, settablefav] = useState([]);
    const [tableidvide , settableidvide] = useState([]);
    const [tableidannuler , settableidannuler] = useState([]);
    const [tableidvalider , settableidvalider] = useState([]);  
    const idmedecin = url.substr(30);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const id = user?._id;
    const iduser = id;
    const [newOpinion , setnewOpinion] = useState({iduser,idmedecin,comment:'',ratingvalueContenu:5,});

    useEffect(() => {

        dispatch(
            getOneMedecin(idmedecin)
        ).then((res) => {
            setOneMedecin(res.OneMedecin);
            console.log(res);
        });

        dispatch(Getfavoritebyid(iduser)).then((res) => {
            settablefav(res);
        });
        dispatch(getOpinions(idmedecin)).then((res)=> {
            setavis(res);
          });


        dispatch(Getreservationbyid(iduser)).then((res) => {
            settableidvide(res.medecinsvide);
            settableidvalider(res.medecinsvalider)
            settableidannuler(res.medecinsannuler);
          });
    }, [dispatch]);

    const [open , setOpen] = useState('false');
const clear=()=>{
setnewOpinion({iduser:'',idmedecin:'',comment:'',ratingvalueContenu:''})
}

    const  Donneravis = () => {
        dispatch(createOpinion(newOpinion));
        clear()
        setOpen(true);
   
   
    }
   




    const classes = useStyles();

console.log(avis,"avis");

    return (
        <div className={classes.root} >


            < Grid container >
                <div className={classes.forpaper}>

                    <Paper elevation={3} className={classes.paper}>


                        <div className={classes.div1}>
                            <h3 className={classes.resumé}>Résumé : </h3>
                            {OneMedecin.map((e) =>
                                <span className={classes.resumformer}>{e.description}</span>)}
                        </div>

                        <div className={classes.div2}>
                            <span className={classes.iconemail}><EmailIcon /> </span>

                            {OneMedecin.map((e) => (
                                <span className={classes.e_mail}>{e.email}</span>
                            ))}
                        </div>

                        <div className={classes.div}>
                            <span className={classes.iconphone}><PhoneIcon /></span>
                            {OneMedecin.map((e) =>
                                <span className={classes.e_mail}>{e.phone}</span>)}
                        </div>
                        <div className={classes.div}>

                            <span className={classes.iconemail}><PlaceIcon /></span>
                            {OneMedecin.map((e) =>
                                <span className={classes.e_mail}>{e.gouvernorate}</span>)} |  {OneMedecin.map((e) =>
                                    <span className={classes.e_mail}>{e.city}</span>)}
                        </div>

                        <div>
                            <h3 className={classes.resumé}>Disponible :</h3>
                            <p className={classes.e_mail}>Lundi jusqu'à Samedi </p>
                            <div className={classes.horaire}>
                                <p className={classes.horairep}>09:00</p>
                                <p className={classes.horairep}>09:30</p>
                                <p className={classes.horairep}>10:00</p>
                                <p className={classes.horairep}>11:00</p>

                            </div>
                            <div className={classes.horaire}>
                                <p className={classes.horairep}>12:00</p>

                                <p className={classes.horairep}>13:00</p>
                                <p className={classes.horairep}>14:00</p>
                                <p className={classes.horairep}>15:00</p>
                            </div>
                        </div>
                    </Paper>
                    <Grid item lg={3} className={classes.cardMed}>
                        {!OneMedecin
                            ? null
                            : OneMedecin.map((Medecin) => (
                                <CardOne Medecin={Medecin} key={Medecin._id} elevation={3}  Tableids={tableidvide} Tablevalider={tableidvalider} Tableannuler={tableidannuler}  Tablefav={tablefav} />
                            ))}
                    </Grid>



   

                </div>



                { user?.Role==="client"   && ( tableidvalider.indexOf(idmedecin) > -1 ) ?
  <div className={classes.opinionsstar}>
        <Paper className={classes.papercomment} elevation={3} id="section1" >
        <ToastContainer />

            <h5 className={classes.title}>Quelle note donnez-vous à ce spécialite ?</h5>
            <div className={classes.rootRating1}>
        <div className={classes.stars}>
        <Box component="fieldset" className={classes.box1}  borderColor="transparent">
      <Rating name="half" 
          value={newOpinion.ratingvalueContenu}
          onChange={(e) => setnewOpinion({ ...newOpinion, ratingvalueContenu: e.target.value })} 
          precision={0.5}
          className={classes.opinions}           size="large"
          />
</Box>

             </div>
      </div>
      <div className={classes.diva}>
      <ToastContainer />

        <div className={classes.divou}>
        <Avatar alt={user?.email} src={user?.selectedimage} className={classes.avatar}>{user?.lastname.charAt(0)}</Avatar>
        <Typography className={classes.fullname}>{user?.lastname} {user?.firstname}</Typography>
        </div>
        <form >
        <ToastContainer />

        <TextField required className={classes.textfield} value={newOpinion.comment} onChange={(e) => setnewOpinion({ ...newOpinion, comment: e.target.value })}  
         placeholder="Ecrivez votre text ici..."multiline  name="comment"></TextField>
                 <ToastContainer />

        <Button  className={classes.btnpub}  size='large' onClick={Donneravis} >Publier</Button>
        <ToastContainer />

        </form>
        </div>
        </Paper>
       </div>
    : null } 
 
{ avis?.map((e) =>(

<Grid container   spacing={0} direction="column"
  alignItems="center"
  justify="center">
   
        <Paper className={classes.papercomment2}  elevation={2} >

        <Typography   className={classes.datesm}>Le {moment(e.createdAt).format("Do MMM  YYYY")}</Typography>
      <div className={classes.diva}>
        <Avatar alt={e.users.lastname} src={e.users.selectedimage} className={classes.avatar2}>{e.users.lastname.charAt(0)}</Avatar>
        
       <div  className={classes.descrptionname}>
        <Typography className={classes.fullname2}>{e.users.lastname} {e.users.firstname}</Typography>
        <div className={classes.rootRating}>
        <div className={classes.stars}>
        <Box component="fieldset" className={classes.box2}  borderColor="transparent">
        <Rating name="read-only"   precision={0.5}  value={e.ratingvalueContenu} className={classes.opinions}  size="medium" readOnly
    />
</Box>

     </div>
      </div>
        < Typography className={classes.desc}   name="comment">{ e.comment}</Typography>
     
        </div>
        </div>
      
       
        </Paper>
   
       </Grid> 
       
))} 
            </Grid>
        </div>

    );

};
export default DetailsFormer;