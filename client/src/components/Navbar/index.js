import Imglogo from '../Pictures/logo.jfif';

import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useSelector } from 'react-redux'

import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  Avatar,

} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";

import { Menu } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();

  const dispatch = useDispatch();
  const location = useLocation();
  const test  = useSelector(state => state)

  const classes = useStyles();
  const [token, settoken] = useState(localStorage.getItem('token'));
  const [anchorell, setanchorell] = useState(null);

  const logout = () => {
    dispatch({ type: 'logout' });
    history.push('/signin');
    setUser(null);
  };
  const handleClick = (event) => {
    setanchorell(event.currentTarget);
  };

  const handleClose = () => {
    setanchorell(null);
  };
  const Profil = () => {
    history.push('/myaccount');
    setanchorell(null);
  };
  const Favorite = () => {
    history.push('/mesfavoris');
  };

  const Reservation = () => {
    history.push('/mesreservations');
  }
  const RDV = () => {
    history.push('/rendezvous');
  }
  useEffect(() => {
    
    if (token) {
      const tokendecode = decode(token);
      if (tokendecode.exp * 1000 < new Date().getTime()) logout();
    }
    settoken(localStorage.getItem('token'));
  

  }, [location]);

  useEffect(() =>{
    setUser(JSON.parse(localStorage.getItem('profile')));
  
  }, [test]);
 

  const links = [
    { link: "Accueil", path: '/', id: "1", },
    { link: "Nos médecins", path: '/nosmedecin', id: "2",  },
    { link: "Contact", path: '/contact', id: "3",  },

   

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
                <Link underline="none" href={l.path} onClick={() => { }} >
                  <div className={classes.divicon}>
                    <span className={classes.icons}> {l.icon}</span>
                    <span className={classes.linkicon}> {l.link}</span>
                  </div>
                </Link>

              </Typography>
            ))}
          {user ? null:

            <Button className={classes.buttonmobile} size="large" variant="contained">Connexion</Button>}
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
          {user ?
          <div>
            <Button className={classes.btn} onClick={handleClick} >
              <div className={classes.avatardesgin}>
                <Avatar alt={user?.email} src={user?.selectedimage}>{user?.lastname.charAt(0)}</Avatar>
                <ArrowDropDownIcon className={classes.arrow} />
              </div>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorell}
              keepMounted
              open={Boolean(anchorell)}
              onClose={handleClose}
            >
               <MenuItem onClick={Profil} className={classes.item}> <PersonOutlineIcon className={classes.iconuser} /> Mon profil</MenuItem>
                { user.Role==="client" ?  <MenuItem className={classes.item}  onClick={Favorite}>  <FavoriteBorderIcon  className={classes.iconuser} />  Mes favoris</MenuItem>  : null }
                { user.Role==="client" ?  <MenuItem className={classes.item} onClick={Reservation} >    <EventAvailableIcon  className={classes.iconuser} />  Mes réservations</MenuItem>  : null }
                { user.Role === "medecin" ?  <MenuItem className={classes.item} onClick={RDV} >  
                  <EventAvailableIcon  className={classes.iconuser} />  Mes réservations</MenuItem>  : null }
                <MenuItem onClick={logout} className={classes.item}> <ExitToAppIcon className={classes.iconuser} /> Déconnexion</MenuItem>
              </Menus>
              </div>     :null        }
          <Button className={classes.button} href="/signin" size="medium" variant="contained">Connexion</Button>
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
            {user ?
          <div>
            <Button className={classes.btn} onClick={handleClick} >
              <div className={classes.avatardesgin}>
                <Avatar alt={user?.email} src={user?.selectedimage}>{user?.lastname.charAt(0)}</Avatar>
                <ArrowDropDownIcon className={classes.arrow} />
              </div>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorell}
              keepMounted
              open={Boolean(anchorell)}
              onClose={handleClose}
            >
               <MenuItem onClick={Profil} className={classes.item}> <PersonOutlineIcon className={classes.iconuser} /> Mon profil</MenuItem>
                               
                { user.Role==="client" ?  <MenuItem className={classes.item}  onClick={Favorite}>  <FavoriteBorderIcon  className={classes.iconuser} />  Mes favoris</MenuItem>  : null }
                { user.Role==="client" ?  <MenuItem className={classes.item} onClick={Reservation} >    <EventAvailableIcon  className={classes.iconuser} />  Mes réservations</MenuItem>  : null }
                { user.Role === "medecin" ?  <MenuItem className={classes.item} onClick={RDV} >  
                  <EventAvailableIcon  className={classes.iconuser} />  Mes réservations</MenuItem>  : null }
                <MenuItem onClick={logout} className={classes.item}> <ExitToAppIcon className={classes.iconuser} /> Déconnexion</MenuItem>
              </Menus>
              </div>
        :
        <Button className={classes.button} href="/signin" size="medium" variant="contained">Connexion</Button>
      }

        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Navbar;