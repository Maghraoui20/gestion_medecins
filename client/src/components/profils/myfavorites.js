import React, { useState, useEffect } from 'react';
import {Getfavoritemedecins} from '../../actions/favorite';
import { useDispatch } from 'react-redux';
import Cards from './myfavcards';
import { Getfavoritebyid } from '../../actions/favorite';

import useStyles from "./styles";

import {
 Grid,
    Button,
    
  } from "@material-ui/core";

const   Myfavorites = () => {
   const classes = useStyles();
    const dispatch = useDispatch();
    const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(infos);
    const [iduser,setiduser]= useState(Data._id);
    const [page, setPage] = useState(1);
    const [pageNumber, setpageNumber] = useState(1);
    const [Medecinfavorite, setMedecinfavorite]=  useState([])
    const [shownext, setShownext]= useState(true);
    const [tablefav, settablefav] = useState([]);

    
    useEffect(() => {
        dispatch(Getfavoritemedecins(iduser,page)).then((res) => {
            if(res.length === 0)
            { setShownext(false);
            }
            else {
            setMedecinfavorite(res);
            setpageNumber(pageNumber + 1);
            }
        

        });
        dispatch (Getfavoritebyid(iduser)).then((res) => {
            settablefav(res);
          });
        
    }, [dispatch]);

    const handlemore = () => {

        dispatch(Getfavoritemedecins(iduser,pageNumber)).then((res) => {
            if(res.length === 0)
                {
                    setMedecinfavorite([...Medecinfavorite, ...res]);
    
                        setShownext(false);
                }
                else{
                    setMedecinfavorite([...Medecinfavorite, ...res]);
    
                }
       
        });
    }
    const showMore = (pageNumber) => {
        handlemore();
      };
      const showMorebtn = () => {     
        showMore(pageNumber);
        setpageNumber(pageNumber + 1);
        setPage(page + 1); 
          };    
console.log(Medecinfavorite.length);
    return (
        <div>
               {Medecinfavorite.length ===0 ? <div className={classes.div}><p>Vous n'avez pas encore des favoris</p> </div>:
      <Grid container >
   
     { Medecinfavorite.map((medecin) => (
 <Grid  item lg={6} md={4} sm={4} xs={12}       key={medecin._id}>
   <Cards Medecin={medecin}  Tablefav={tablefav}/>
 </Grid>

 ))}
 { shownext ?  <Button className={classes.voirplus} onClick={showMorebtn} size="large">
  Voir Plus
      </Button> : null}

     </Grid> 



     }


 </div>
        
    )

}
export default Myfavorites;