import { Button, Paper, TextField } from "@material-ui/core";
import React,{useState} from "react";
import useStyles from "./styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PlaceIcon from '@mui/icons-material/Place';
import { TextareaAutosize } from "@mui/material";
import { useDispatch } from "react-redux";
import {envoyer} from '../../actions/messages';
import { ToastContainer, toast, zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [envoyermsg, setenvoyermsg] = useState({
        nom:'',email: '', message: ''
      });
      const handleChange = (e) => {
        setenvoyermsg({ ...envoyermsg, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        return dispatch(envoyer(envoyermsg));
    };
    return (
        <div>
            <div className={ classes.center}>
          
            <Paper className={classes.paper} elevation={10} >
            <div className={classes.div1}>
                    <h1 className={classes.titre1}>Entrer en contact
</h1>
<p className={classes.titre2 } >N'hésitez pas à nous envoyer une ligne ci-dessous</p>

<div >
<form  onSubmit={handleSubmit} className={classes.inputs}>
<ToastContainer />

<TextField name="nom" label="Nom"  variant="outlined"  type="text" style={{width :400, margin:10 }}   onChange={handleChange} />
<TextField name="email" label="Email"  variant="outlined"  type="email"  style={{width :400, margin:10 }}  onChange={handleChange} />
<TextareaAutosize   aria-label="Message"  onChange={handleChange}  name="message"
  placeholder="Entrer votre message"
  style={{ width: 400, margin:10, height:80 }}  />
<div className={classes.button}>
<Button type="submit" className={classes.btn}>Envoyer</Button>

</div>
</form>
</div>
                </div>
            <div className={classes.right}>
                    <div>
                        <h2 className={classes.titre}>Contacter nous </h2>
                        <div className={classes.email}>
              <PlaceIcon className={classes.color} /> <p >Tunis - Ariana</p>  

              </div>
                        <div className={classes.email} >
                  <MailOutlineIcon  className={classes.color} /><p >Contact@Tbibi.tn</p>                 

                             
                </div>
                <div className={classes.email}>
                <PhoneInTalkIcon className={classes.color} /> <p >46569303</p>  
              </div>
             
              <div className={classes.social}>
            <FacebookIcon className={classes.size}/>
            <LinkedInIcon className={classes.size} />
            <InstagramIcon className={classes.size} />
          
        </div>
                    </div>
                    </div>
              
            </Paper>
            
            </div>
        </div>
    )
}
export default Contact;