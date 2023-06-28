import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 80,
    width: 300,
    height: 470,
    marginLeft: 80,

    backgroundColor: " #f5f5f5",

    '@media  screen and (max-width: 960px)': {
      marginTop: 100,
      marginLeft: 60,
    },

    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1.05)"
    }




  },
  btnreservez:{
    marginLeft: 100,
    color: " #4e3e8c",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#ffffff",
    borderRadius:5,
    fontSize:12,
    
    '&:hover': {
      background: "#4e3e8c",
      color: " #f5f5f5",
      marginTop:0,
  },
  "@media  screen and (max-width: 800px)": {
    
    marginLeft:"40%", 
       },
       "@media  screen and (max-width: 600px)": {
    
        marginLeft:"35%", 
           },
},
  booked :{
    marginRight:10,
    marginLeft:-10,
    },
  recherche: {
    display: "flex",
    justifyContent: "center",
  },
  skelton: {
    display: 'flex',
    marginTop: 40,
    marginLeft: 150,
  },
  sekel: {
    marginRight: 100,
    marginLeft: 0,
  },
  carre: {
    marginBottom: 10,
  },
  circle: {
    marginLeft: 40,
    marginBottom: 10,
  },


  media: {
    height: 50,
    paddingTop: "56.25%",
    marginTop: -152,

  },
  voirplus: {
    marginTop: 36,

    color: "#4e3e8c",
    borderColor: "#4e3e8c",
    border: "2px solid",
    borderRadius: 6,
    fontSize: 12,
    '&:hover': {
      background: "#4e3e8c",
      color: " #ffffff",
    },


  },
  btnvoir: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  avatar1: {
    marginLeft: 60,
    width: 160,
    borderRadius: 100,
    paddingTop: "56.25%",
    marginTop: -112,

  },
  buttonVoir: {
    color: " #f5f5f5",
    border: "2px solid",
    borderColor: "#4e3e8c",
    backgroundColor: "#4e3e8c",
    borderRadius: 5,
    fontSize: 12,

    '&:hover': {
      background: "#ffffff",
      color: " #4e3e8c",
      marginTop: 0,
    },
  },
  dr: {
    fontSize: 25,
    textTransform: "capitalize",
    marginLeft: 10,
    color: "#4e3e8c",
  },

  title1: {
    fontSize: 25,
    textTransform: "capitalize",
    marginLeft: 10,
    color: "#4e3e8c",


  },
  title2: {
    fontSize: 25,
    textTransform: "capitalize",
    marginLeft: 0,
    color: "#4e3e8c",


  },
  MuiCardContentroot: {
    marginTop: 5,

  },
  nbh: {
    fontSize: 18,
    marginRight: 15,

    marginTop: 18,
  },
  lieu: {
    fontSize: 18,
    textTransform: "capitalize",
    marginTop: 20,
  },
  place: {
    display: 'flex',
  },
  Placeicon: {
    fontSize: 30,
    marginRight: 10,
    marginTop: 15,
    color: " #3cbbbb",


  },


  btns: {
    display: "flex",
    justifyContent: "center",
  },
  

  barre: {
    marginTop: 130,
    marginBottom: 0,


  },

  //barre de recherche : 
  search1: {
    borderRadius: theme.shape.borderRadius,

    display: 'flex',
    position: 'realative',
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: "#f5f5f5",
    },
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
    },

  },
  searchIcon1: {
    position: 'absolute',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    color: '#3cbbbb',
  },


  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: 50,
    paddingTop: 5,
    paddingBottom: 5,

  },

  svg: {
    display: "flex",

  },
  mauve: {
    marginLeft: 220,
    '@media screen and (max-width: 1400px)': {
      marginLeft: 200,


    },
    '@media screen and (max-width: 1200px)': {
      marginLeft: 230,


    },
    '@media screen and (max-width: 900px)': {
      marginLeft: 220,


    },
    '@media screen and (max-width: 800px)': {
      marginLeft: 220,


    },
    '@media screen and (max-width: 600px)': {
      marginLeft: 220,


    },
    '@media screen and (max-width: 700px)': {
      marginLeft: 180,


    }
  },
  Container: {
    position: "relative",
  },
  price: {
    marginLeft: 193,
    position: "absolute",
    marginTop: 5,
    '@media screen and (max-width: 1400px)': {
      marginLeft: 170,
    },
    '@media screen and (max-width: 1200px)': {
      marginLeft: 200,
    },
    '@media screen and (max-width: 1100px)': {
      marginLeft: 200,
    },
    '@media screen and (max-width: 950px)': {
      marginLeft: 200,
    },
    '@media screen and (max-width: 800px)': {
      marginLeft: 190,
    },
    '@media screen and (max-width: 600px)': {
      marginLeft: 180,



    },
    '@media screen and (max-width: 700px)': {
      marginLeft: 150,



    },
  },
  prix: {
    color: '#ffffff',
    fontSize: 24,
    marginLeft: 50,

  },
  tnd: {
    marginLeft: 50,
    color: '#ffffff',
    fontSize: 14,
    '@media screen and (max-width: 1400px)': {
      marginLeft: 47,


    },
    '@media screen and (max-width: 1100px)': {
      marginLeft: 48,


    },
    '@media screen and (max-width: 900px)': {
      marginLeft: 48,


    }
  },
  favoris: {
    marginLeft: 30,
    fontSize: 40,
    color: '#f5f5f5',

  },
  iconbtn: {

    '&:hover': {
      backgroundColor: "transparent"
    },
    '&:active': {
      backgroundColor: "transparent"

    }


  },


  paper1: {
    backgroundColor: "#f5f5f5",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400,
    height: 400,
    outline: 0,
    marginTop: 10,
    marginLeft: 150,
    '@media  screen and (max-width: 1200px)':
    {

      width: 510,
      height: 400,
    },

   
    '@media  screen and (max-width: 900px)':
    {
      marginTop: 100,
      marginLeft: -260,
      width: 400,
      height: 400,
    },
  },
  openicon: {
    fontSize: 25,
    marginLeft: 350,

    color: 'transparent',

    '&:hover': {

      background: 'transparent',

    },
    '@media  screen and (max-width: 1200px)':
    {
      marginLeft: 450,

    },
    '@media  screen and (max-width: 900px)':
    {
      marginLeft: 350,

    },
    '@media  screen and (max-width: 320px)':
    {

    },
  },
  modal: {
    marginTop: 150,
    marginLeft: 320,
  },
  iconclose: {
    fontSize: 25,
    color: "#4C4C4C",
  },
  phonenumber: {
    marginTop:" 10%",
    width:360,
  },
  buttonac: {
    marginTop: 20,
marginLeft:50,
display:"flex",
    width:300

  },
  reser:{
    color:"#3cbbbb",
    fontSize:22,

    marginTop:-30,
    marginBottom:30,
  },
  confirmer:{
    marginRight:50,
    width:250,
    color: " #f5f5f5",
    border: "2px solid",
    borderColor: "#3cbbbb",
    backgroundColor: "#3cbbbb",
    borderRadius: 5,
    fontSize: 12,
    '&:hover': {
      background: "#ffffff",
      color: " #3cbbbb",
      marginTop: 0,
    },
  },
  Annuller:{
    width:250,

    color: " #f5f5f5",
    border: "2px solid",
    borderColor: "#3cbbbb",
    backgroundColor: "#3cbbbb",
    borderRadius: 5,
    fontSize: 12,
    '&:hover': {
      background: "#ffffff",
      color: " #3cbbbb",
      marginTop: 0,
    },
  }

}));