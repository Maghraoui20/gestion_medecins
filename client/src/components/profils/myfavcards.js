import React,{useState} from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  
  
} from "@material-ui/core";
import useStyles from './styles';
import { Filtrerfavorite } from '../../actions/favorite';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import { useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import PlaceIcon from "@material-ui/icons/Place";


const  Cards = ({ Medecin }) => {
  const classes = useStyles();
  const  dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const iduser = user?._id;
  const idmedecin= Medecin._id;
  const [favoris, setfavoris] = useState(false);
  const supprimerfavoris =() => {
    dispatch(Filtrerfavorite(iduser,idmedecin));
  }
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
    
    <Card className={classes.root} onMouseOver={()=>setState({ raised: true, shadow:1})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
      
          <div className={classes.svg}>
          <div className={classes.Container}>
            
          <div className={classes.price}>
        <span  className={classes.prix}>{Medecin.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
          <IconButton className={classes.iconbtn} onClick={supprimerfavoris}>
          <FavoriteIcon  className={classes.favoris}/>
          </IconButton>

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
      
        </CardActions>
        </Card>
  );
}
export default Cards;