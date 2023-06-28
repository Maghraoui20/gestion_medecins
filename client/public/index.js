import React, { useState, useEffect } from "react";
import Imglogo from '../Pictures/logo.jfif';


import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,

} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";

import { Menu } from '@material-ui/icons';


const Navbar = () => {

  const classes = useStyles();
  

  

  

 

  const links = [
    { link: "Accueil", path: '/', id: "1", },
    { link: "Nos médecins", path: '/nosmedecin', id: "2",  },
   

  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {


    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  useEffect(() => {
    if (drawerOpen) {
      document.getElementById("idnav").style.display = "none";

    }
    else {
      document.getElementById("idnav").style.display = "block";

    }

  });
  useEffect(() => {
    if (mobileView) {
      document.getElementById("idnav").style.display = "none";

    }
    else {
      document.getElementById("idnav").style.display = "block";

    }

  });

  const displayMobile = () => {

    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar className={classes.drawer}>
    
        <IconButton  className={classes.iconcolor}
          {...{
            edge: "start",
            "aria-label": "menu",
            "aria-haspopup": "true",
                 onClick: handleDrawerOpen,
          }}
        >
          <Menu className={classes.iconmenu1} />
     
        </IconButton>
        <Drawer
          open={drawerOpen}

        >
          <div className={classes.logo}>
            <Menu className={classes.iconmenu} />
            <Button onClick={handleDrawerClose}  >
              <CloseIcon className={classes.iconopenclose} /></Button>


          </div>

          <div className={classes.typicon}>
            {links.map((l) => (

              <Typography variant="h6" key={l.id} >
                <Link underline="none" href={l.path} onClick={() => { }}>
                  <div className={classes.divicon}>
                    <span className={classes.icons}> {l.icon}</span>
                    <span className={classes.linkicon}> {l.link}</span>
                  </div>
                </Link>

              </Typography>
            ))}

            <Button className={classes.buttonmobile} size="large" variant="contained">Connexion</Button>
          </div>
        </Drawer>

      </Toolbar>
    );
  };

  const displayDesktop = () =>{
  
    <AppBar >
      <Toolbar  >
      <img className={classes.logo1} src={Imglogo}/>

        <div id="idnav">
        
          <div className={classes.linksContainer}>
            
            {links.map((l) => (
              <Typography variant="h6" key={l.id} className={classes.title1}>
                <Link className={classes.links} underline="none" href={l.path} onClick={() => { }}>
                  {l.link}
                </Link>
              </Typography>
            ))}
          </div>
          </div>
       
           
      </Toolbar>
    </AppBar>
  };

  return (
    <Container maxWidth="lg">

      <AppBar className={classes.appBar} >

        <Toolbar className={classes.toulBar}>
          {mobileView ? displayMobile() : displayDesktop()}
          <div className={classes.logo1} > <img src={Imglogo}/></div> 

          <div id="idnav" >
      


            <div className={classes.linksContainer}>

              {links.map((l) => (
                <Typography variant="h6" key={l.id} className={classes.title1}>
                
                  <Link className={classes.links} underline="none" href={l.path} onClick={() => { }}>
                    {l.link}
                  </Link>

                </Typography>
              ))}


            </div>

            </div>
       
       
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Navbar;