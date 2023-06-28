import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({

  paper: {
    margin: "15%",
    width: 700,
    height: 550,
    "@media screen and (max-width: 1200px)": {
      width: 400,
      height: 600,
      marginTop: "15%"


    },

    "@media screen and (max-width: 900px)": {
      width: 400,
      height: 600,
      marginTop: "30%",


    },
    "@media screen and (max-width: 800px)": {
      width: 400,
      height: 600,
      marginTop: "30%",

    },
  },
  forpaper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 0,

    "@media screen and (max-width: 900px)": {
      display: "block",
    },
    "@media screen and (max-width: 800px)": {
      display: "block",
    },

  },
  resumé: {
    color: "#4e3e8c",
    margin: 20,
    fontSize: 22,
    fontFamily: "cursive",

  },
  resumformer: {
    margin: 30,
    width: 1500,
    fontSize: 20,
  },
  iconemail: {
    color: "#3cbbbb",

  },
  iconphone: {
    color: "#3cbbbb",

  },
  div2: {
    display: "inline-flex",
    alignContent: "center",
    marginLeft: 30,
    marginTop: 30

  },
  div: {

    marginLeft: 30,
    marginTop: 30

  },

  mail: {
    fontSize: 22,
    marginTop: 0,
    color: "#120a37",
    fontFamily: "cursive",

  },
  e_mail: {
    fontSize: 20,
    fontFamily: "Roboto, sans-serif",
    paddingLeft: 10,

  },
  cardMed: {

    marginTop: '7%',
    "@media screen and (max-width: 1200px)": {
      display: "flex",
      justifyContent: "center",
      marginTop: "5%",
      marginBottom: "5%",


    },
    "@media screen and (max-width: 900px)": {
      display: "flex",
      justifyContent: "center",
      margin: 20,
    },
    "@media screen and (max-width: 800px)": {
      display: "flex",
      justifyContent: "center",
      margin: 20,


    },

  },
  horaire: {
    display: "flex",
    // justifyContent:"space-between",
    fontSize: 20,
    fontFamily: "Roboto, sans-serif",

  },
  horairep: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    margin: 10,
    '&:hover': {
      transform: "scale3d(1.1,1.1,1.1)"
    }
  },
  opinionsstar: {
    marginBottom: 50,
    marginLeft: 20,
  },
  papercomment: {
    height: 300,
    width: 1000,
    marginTop: 0,
    marginBottom:50,
    marginLeft:20,
  },
  title: {
    marginLeft: 80,
    fontSize: 22,
    color: "#4e3e8c",
    paddingTop: 20,
  },
  rootRating1: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *':
    {
      marginTop: theme.spacing(1),
    },
    marginLeft: 200,
  }, stars: {
    display: 'flex',

  },
  titlestar: {
    marginLeft: 100,
  },
  box1: {
    marginTop: -10,
  },

  opinions: {
    marginLeft: 80,
  },
  diva: {
    paddingTop: 0,
    display: "flex",
  },
  divou: {
    display: 'block',
  },

  avatar: {
    width: 60,
    height: 60,
    marginLeft: 30,
    marginTop: -15,
  },
  fullname: {
    marginLeft: 25,
    marginTop: 12,
    fontSize: 16,
    textTransform: "capitalize",
    color: "#4e3e8c",
    width: 150,


  },

  textfield: {
    marginLeft: 0,
    marginTop: 0,
    width: 650,
  },
  btnpub: {
    marginLeft: '100%',
    marginTop: 30,
    color: '#ffffff',
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
  },
  papercomment2: {
    height: 230,
    width: 1000,
    marginTop: 0,
    background: '#F3F3F3',
    marginBottom:30
  }, 
  datesm: {
    marginLeft: '81%',
    marginTop: 18,
    fontSize: 18,
    fontWeight:"bold",
    textTransform: "capitalize",
    color: '#6A55BC',
  },
   diva: {
    paddingTop: 0,
    display: "flex",
  },
   avatar2: {
    width: 50,
    height: 50,
    marginLeft: 30,
    marginTop: 0,
  }, 
  fullname2: {
    marginLeft: 50,
    marginRight: 80,
    marginTop: 0,
    fontSize: 21,
    fontWeight:'bold',
    textTransform: "capitalize",
    color: '#6A55BC',
  },
   desc: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 18,

  }, rootRating: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginLeft: 0,
  }, stars: {
    display: 'flex',

  },
  box2: {
    marginLeft: -50,
    marginTop: 10,
  },
  titlestar1: {
    marginLeft: 100,
    color: '#4e3e8c',
  },
  opinionsstar: {
    marginLeft: 240,
  },






}));