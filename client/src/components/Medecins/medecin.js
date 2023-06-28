import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import Cards from "./cards";
import Skeleton from '@material-ui/lab/Skeleton';
import { getMedecin,getsearchedMedecin } from "../../actions/medecin.js";
import Recherche from "./recherche.js";
import {Getfavoritebyid} from '../../actions/favorite.js';
import { Getreservationbyid } from '../../actions/booking';

const Medecin = () => {
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);

  const [AllMedecin, setAllMedecin] = useState([]);
  const [InputSearch, setInputSearch] = useState("");
  const [tablefav, settablefav] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const id = user?._id;
  const iduser = id;
  const classes = useStyles();
  
  const [tableidvide , settableidvide] = useState([]);
  const [tableidannuler , settableidannuler] = useState([]);
  const [tableidvalider , settableidvalider] = useState([]); 
  useEffect(() => {
    dispatch(getMedecin(pageNumber)).then(
      (res) => {
       setAllMedecin(res.AllMedecin);
      }
    );
    dispatch (Getfavoritebyid(iduser)).then((res) => {
      settablefav(res);
    });


      dispatch(Getreservationbyid(iduser)).then((res) => {
            settableidvide(res.medecinsvide);
            settableidvalider(res.medecinsvalider)
            settableidannuler(res.medecinsannuler);
          });
    
  }, [dispatch]);
 
 console.log(tableidannuler,"taban");
  const showMorebtn = () => {
  
  
  dispatch(getMedecin((pageNumber + 1) , InputSearch)).then(
    (res) => {
      console.log(res);
      setAllMedecin([...AllMedecin, ...res.AllMedecin]);
    }
  );

  };const handlechangeRecherche = (e, value) => {
    console.log(e.target.value);
    setInputSearch(e.target.value);

    dispatch(getsearchedMedecin(pageNumber, InputSearch)).then(
      (res) => {
        setAllMedecin(res.AllMedecin);
      }
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.recherche}>
        <Recherche    handlechangeRecherche={handlechangeRecherche}
/>
        </div>
      <Grid container spacing={0}>
        
     
         <Grid container item lg={12} > 
        {!AllMedecin.length ?<div className={classes.skelton}>
              <div className={classes.sekel}>
            <Skeleton variant="circle" className={classes.circle} width={190} height={130} />
            <Skeleton variant="rect" width={280} height={310} />
            </div>
            <div className={classes.sekel}>
            <Skeleton variant="circle" className={classes.circle} width={190} height={130} />
            <Skeleton variant="rect" width={280} height={310} />
          </div>
          <div >
            <Skeleton variant="circle" className={classes.circle} width={190} height={130} />
            <Skeleton variant="rect" width={280} height={310} />
          </div>
          </div>
            : AllMedecin.map((Medecin) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={4}
                  key={Medecin._id}
                >
                  <Cards Medecin={Medecin} Tableids={tableidvide} Tablevalider={tableidvalider} Tableannuler={tableidannuler}  Tablefav={tablefav}  />
                </Grid>
              ))}
        
        </Grid>
      </Grid>
      <div className={classes.btnvoir}>
      <Button className={classes.voirplus} onClick={showMorebtn} size="large">
        Voir Plus
      </Button>
      </div>
    </div>
  );
};
export default Medecin;