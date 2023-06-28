import React, { useState,useEffect } from "react";

import Img from '../Pictures/Medicine.gif';
import Img1 from '../Pictures/Doctors.gif';
import Img2 from '../Pictures/Mobile.gif';
import Img3 from '../Pictures/Mobile2.gif';
import imgb from '../Pictures/backg.jpg'
import useStyles from "./styles";
import Imageback from "./imageback";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import "./index.css";
import Footer from "../Footer/footer";

const Accueil = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    const obj = document.getElementById("value");
    const obj2 = document.getElementById("value2");

    animateValue(obj, 0, 1859000, 50000);
    animateValue(obj2, 0, 105000, 50000);

    
  }, []);
  
  return (
    <div className={classes.page}>
      <div className={classes.div1}>
<Imageback/>

  </div>
      <div className={classes.sec1}>
        <div className={classes.parag1}>
        <h1>Pourquoi prendre rendez-vous avec Tbibi.tn?</h1>
<h3>Avec Tbibi, prenez rendez-vous en ligne avec votre médecin autrement</h3>
</div>
<div className={classes.photos}>
  <div  >
  <img src={Img1}  className={classes.photo1} alt="img" />
  <h3 className={classes.para}>Accédez rapidement à votre meilleure médecin</h3>

  </div>
  <div>
  <img src={Img2}  alt="img"  className={classes.photo1}/>
  <h3 className={classes.para}>Prenez rendez-vous en ligne à tout moment</h3>

  </div>
  <div>
  <img src={Img3}  className={classes.photo1} alt="img" />
<h3 className={classes.para}>Recevez des notifications en cas de besoins</h3>
  </div>
</div>

      </div>
<div className={classes.sec2}>
  <div className={classes.propos}>  <h1 >A propos de nous</h1>
</div>
  <p className={classes.parag2}>Tbibi s’est donné pour mission de faciliter l’accès aux soins des patients.
     


Pour délivrer l’information la plus complète qui soit, nous proposons sur notre site l’annuaire
      public des professions médicales référencées sur les sites officiels.
    </p>
<p className={classes.parag2}>Tbibi.fr n'utilise pas vos données médicales à des fins autres que la prise de rendez-vous et
 celles-ci ne sont pas réutilisées dans le cadre d’autres projets.</p>
</div>

<div>
<div className={classes.sec3} >
  <div className="box">
 <span ></span>
        <span ></span>
        <span></span>
        <span ></span>
        
  <div className="content">

 
<VisibilityIcon style={{fontSize:40, padding:10}} />
<div id="value">10</div>

<p>Visiteurs</p>
</div>
</div>

<div className="box">
 <span ></span>
        <span ></span>
        <span></span>
        <span ></span>
        
  <div className="content">

 
  <AssignmentTurnedInIcon style={{fontSize:40, padding:25}}/>
<div id="value2">5</div>

<p> inscrits</p>
</div>
</div>

</div>
<hr style={{with:"50%", textAlign:"left", marginLeft:0 ,backgroundColor:"#120a37", paddingTop:0, marginTop:-1, marginBottom:-1}}/> 
</div>

</div>
  );
};
export default Accueil;