import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Getreserved } from '../../actions/booking';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './styles';
import RestoreIcon from '@material-ui/icons/Restore';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Cards from './myreservcards';
import { Grid } from '@material-ui/core';
import Footer from '../Footer/footer';

const   Myreservation = () => {
  const dispatch = useDispatch();
  const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
  const [Data, setData] = useState(infos);
  const [iduser,setiduser]= useState(Data._id);
  const [page, setPage] = useState(1);
  const [pageNumber, setpageNumber] = useState(1);
  const [Medecinreserved, setMedecinreserved]=  useState([])
  const [medecinvalider, setmedecinvalider]=  useState([])
  const [medecinatt, setmedecinatt]=  useState([])

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [shownext, setShownext]= useState(true);

  const handleChange = ( avent,newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (newValue===0){
      dispatch( Getreserved(iduser,page)).then((res) => {
        if(res.length === 0)
        { setShownext(false);
        }
        else{
          setMedecinreserved(res.medecinsatt);
          setmedecinatt(res.idsatt);
        setpageNumber(pageNumber + 1);
        }
  
    
  });
}
    else{
         dispatch( Getreserved(iduser,page)).then((res) => {
        if(res.length === 0)
        { setShownext(false);
        }
        else {

          setMedecinreserved(res.medecins);
          setmedecinvalider(res.ids);
        setpageNumber(pageNumber + 1);
        }
    });
  } 
}

  useEffect(() => {
    dispatch( Getreserved(iduser,page)).then((res) => {
      console.log(res.medecinsatt,'heh');
        if(res.length === 0)
        { setShownext(false);
        }
        else {
          setMedecinreserved(res.medecinsatt);
          setmedecinatt(res.idsatt);
        setpageNumber(pageNumber + 1);
        }
    

    });

    
}, [dispatch]);
console.log(Medecinreserved,"res");
  return (
    <div >
    <Paper square className={classes.scrolbar} >
      <Tabs
      className={classes.indicator}
              value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="En attente" icon={<RestoreIcon/>} value={0} />
        <Tab label="Réservée"  icon={<AssignmentTurnedInIcon/>} value={1}/>
      </Tabs>
    </Paper>

<Grid container  >
{Medecinreserved.map((medecin) => (
 <Grid  item lg={4} md={4} sm={4} xs={12}       key={medecin._id}>
     <Cards Medecin={medecin}  Tablevalider={medecinvalider} Tableids={medecinatt} />
 </Grid>
 ))
 }
</Grid>
<div style={{  marginTop:500}}>
  <Footer/>
</div>

</div>
  );
}
export default Myreservation;