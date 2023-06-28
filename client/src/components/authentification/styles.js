import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { Block } from '@material-ui/icons';

export default makeStyles((theme) => ({

  Sign: {
    marginTop: '8%',
    width: 930,

    height: 500,
    borderRadius: 10,
    '@media  screen and (max-width:950px)':
    {
      width: 800,

    },
    "@media (max-width: 850px)": {
width:700,   
     },
     "@media (max-width: 700px)": {
      width:650,   
           },
           "@media (max-width: 650px)": {
            width:600,   
                 },
                 "@media (max-width: 600px)": {
                  width:480,  
                  height:"auto", 
                       },
   
  },

  email: {
    marginBottom: 20,
    width: 300,
    color: '#4e3e8c',
    '@media  screen and (max-width: 960px)':
    {
      marginBottom: 20,
      width: 270,
      color: '#4e3e8c',
    },

    '@media  screen and (max-width: 600px)':
    {
      marginBottom: 20,
      width: 400,
      color: '#4e3e8c',

    },
    '@media  screen and (max-width: 560px)':
    {
      marginBottom: 20,
      width: 400,
      color: '#4e3e8c',

    },
    '@media  screen and (max-width: 320px)':
    {
      marginBottom: 20,
      width: 400,
      color: '#4e3e8c',

    },
  },
  mdp: {
    width: 300,
    marginBottom: 20,
    '@media  screen and (max-width: 960px)':
    {
      marginBottom: 20,
      width: 270,

    },
    '@media  screen and (max-width: 600px)':
    {
      marginBottom: 20,
      width: 400,

    },
    '@media  screen and (max-width: 560px)':
    {
      marginBottom: 20,
      width: 400,

    },
    '@media  screen and (max-width: 320px)':
    {
      marginBottom: 20,
      width: 400,

    },
  },
  oublie: {
    textDecoration: "none",
    fontSize: 18,
    color: "#3cbbbb",
    '&:hover ': {
      fontWeight: "bolder",

    },
    display:"flex",
    justifyContent:"center",
    '@media  screen and (max-width: 950px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 10,

    },
    '@media  screen and (max-width: 850px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 10,

    },
    '@media  screen and (max-width: 700px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 10,

    },

    '@media  screen and (max-width: 700px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 30,

    },
    '@media  screen and (max-width: 680px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 20,

    },
    '@media  screen and (max-width: 650px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 8,

    },
    '@media  screen and (max-width: 600px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 150,

    },
    '@media  screen and (max-width: 560px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 150,

    },
    '@media  screen and (max-width: 320px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#3cbbbb",
      marginLeft: 150,

    },
  },
  mailicon: {
    color: '#4e3e8c',
  },
  input: {
    marginTop: 35,
    marginLeft: 50,
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 35,
      marginLeft: 15,
  

    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 15,
      marginLeft: 15,
  

    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 15,
      marginLeft: 25,
  

    },
  },

  btn: {
    marginTop: 25,
    marginLeft: 100,
    marginBottom: 20,
    width: 200,
    color:'#ffffff',
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",

    },
    '@media  screen and (max-width: 960px)':
    {
      marginTop: 25,
      marginLeft: 80,
      marginBottom: 20,
      width: 200,
      background: '#4e3e8c',

    },
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 25,
      marginLeft: 170,
      marginBottom: 20,
      width: 150,
      background: '#4e3e8c',
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 25,
      marginLeft: 170,
      marginBottom: 20,
      width: 150,
      background: '#4e3e8c',
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 20,
      marginLeft: 170,
      marginBottom: 10,
      width: 170,
      background: '#4e3e8c',
    },
  },
  inscrit: {
    textDecoration: "none",
    fontSize: 14,
    marginLeft: -8,
    color: '#3cbbbb',
    '&:hover ': {
      fontWeight: "bolder",
      background: 'transparent',
    },
    '@media  screen and (max-width: 950px)':
    {
      textDecoration: "none",
      fontSize: 14,
      color: '#3cbbbb',
      marginLeft:20,
    },
    '@media  screen and (max-width: 600px)':
    {
      textDecoration: "none",
      fontSize: 14,
      color: '#3cbbbb',
    },
    '@media  screen and (max-width: 560px)':
    {
      textDecoration: "none",
      fontSize: 14,
      color: '#3cbbbb',
    },
    '@media  screen and (max-width: 320px)':
    {
      textDecoration: "none",
      fontSize: 14,
      color: '#3cbbbb',
    },
  },
  inscription: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 52,
    '@media  screen and (max-width: 980px)':
    {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 50,
      marginRight:-40,
  
    },
       '@media  screen and (max-width: 900px)':
    {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 50,
      marginRight:-90,
  
    },
    '@media  screen and (max-width: 800px)':
    {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 60,
      marginRight:-140,
  
    },
    '@media  screen and (max-width: 650px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 45,
      marginRight:-160,

  
    },
    '@media  screen and (max-width: 600px)':
    {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 15,
      marginRight:-117,

  
    },
    '@media  screen and (max-width: 320px)':
    {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 18,
      marginRight:-117,

  
    },
  },
 
  title: {
    fontSize: 24,
    color: "#3cbbbb",
    marginLeft: 50,
    marginTop: 75,
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 98,
      marginTop: 75,

    },
    '@media  screen and (max-width: 800px)':
    {
      marginLeft: 75,
      marginTop: 75,
    },
    '@media  screen and (max-width: 750px)':
    {
      marginLeft: 65,
      marginTop: 75,
    },
    '@media  screen and (max-width: 700px)':
    {
  
      marginLeft: 60,
      marginTop: 75,
    },
    '@media  screen and (max-width: 600px)':
    {
      fontSize: 20,
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 680px)':
    {
      fontSize: 20,
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 650px)':
    {
      fontSize: 20,
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 560px)':
    {
      fontSize: 20,
      marginLeft: 35,
      marginTop: 75,

    },
    '@media  screen and (max-width: 320px)':
    {
      fontSize: 22,
 
      marginLeft: 58,
      marginTop: 45,

    },
  },


  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
    marginLeft:-50,
    marginTop:20,
    '@media  screen and (max-width: 1280px)':
    {
    
      marginLeft:78,
      marginTop:-101,

    },
    '@media  screen and (max-width: 960px)':
    {
    
      marginLeft:-10,
      marginTop:-101,

    },
  },
  gif: {
    paddingLeft:50, 
    width:300,
    height:300,
    paddingTop:80,

    "@media (max-width: 950px)": {
   paddingLeft:100,

  },
  "@media (max-width: 850px)": {
    paddingLeft:120,
 
  },
  "@media (max-width: 650px)": {
    paddingLeft:100,
 
  },
  "@media (max-width: 600px)": {
flex:"none", 
  },
  },
  paper1: {
    borderRadius:30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 750,
    height: 350,
    outline: 0,
    marginTop: 10,
    marginLeft:5,
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 100,
      marginLeft:5,
      width: 310,
      height: 660,
    },
    '@media  screen and (max-width: 650px)':
    {
      
      width: 490,
    },
  },

  openicon: {
    marginLeft: 515,

    color: 'transparent',
    '&:hover': {
      background: 'transparent',
    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 260,

    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 220,

    },
  },
  iconclose: {
    fontSize: 25,
    color: "#4C4C4C",
  },
  titleicon: {
    display: "flex",
  },
tant: {
display:"flex",
justifyContent:"center",
},
  tantque: {
    color: '#3cbbbb',
   
    
    '@media  screen and (max-width: 560px)':
    {
      fontSize:16,
      marginLeft:0,
      marginRight:-160,
    },
    '@media  screen and (max-width: 650px)':
    {
      fontSize:16,
      marginLeft:0,
      marginRight:-180,
    },
  },
  pic:{
    display: "flex",
    justifyContent: "space-around",
    '@media  screen and (max-width: 560px)':
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    },
  },
  picbtn:{
    '@media  screen and (max-width: 560px)':
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    },
  },
  img1: {
    width:200,
    height:200,
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 20,
    marginLeft: -25,

    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 20,
    marginLeft: -15,

    },
  },

  client: {
    marginLeft: 60,
    marginRight: 40,
    color: '#120a37',
    fontWeight: "bolder",
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 80,
      paddingTop:-200,

    },
  },
    modalresponsive:{
      '@media  screen and (max-width: 560px)':
      {
        marginLeft: -50,
  
      }
          
  },
  modalresponsive2:{
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: -10,
    

    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 170,
      marginTop:-100,

    },
},
modalresponsive3:{
  '@media  screen and (max-width: 560px)':
  {
    marginLeft: 210,
    marginTop:-100,

  },
  '@media  screen and (max-width: 320px)':
  {
    marginLeft: 210,
    marginTop:-100,

  },
},
  medecin: {
    marginLeft: 52,
    color: '#120a37',
    fontWeight: "bolder",
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 0,

    },
  },
  formateur: {
    marginLeft: 95,
    marginRight: 40,
    color: '#fa7d39',
    fontWeight: "bolder",
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 0,

    },
  },

  btnc: {
    marginTop: 15,
    marginLeft: 25,
    borderRadius:20,
    background: '#3cbbbb',
    color: "#f5f5f5",
    width: 120,
    '&:hover ': {
      background: '#3cbbbb',
      color: "#f5f5f5",
      transform: " scale(1.1)",

    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 20,
     

    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 190,
     

    },
  },
  btncf: {
    marginTop: 15,
    marginLeft: 60,
    background: '#4e3e8c',
    color: "#f5f5f5",
    width: 120,
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",

    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 180,
     

    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 180,
     

    },
 

  },
  btnf: {
    marginTop: 15,
    marginLeft: 75,
    background: '#4e3e8c',
    color: "#f5f5f5",
    width: 120,
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",

    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 190,
     

    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 190,
     

    },
  
  },
  deuel:{
    display:"flex",
    flexDirection:"row",
    '@media  screen and (max-width: 740px)':{
      display:"flex",
      flexDirection:"column",
    }

 
  },
tout:{
  display:"flex",
  justifyContent:"center",
  alignContent:"center",
  marginTop:60,
},
  signupu: {
    
    width: 1000,
    height: "auto",
  

    borderRadius: 10,
  
   
  },

return : {
  marginTop: 10,
  marginLeft:3,
  color: 'transparent',
  '&:hover': {
    background: 'transparent',
    transform: " scale(1.2)",
  },
},
returnicon :{
fontSize:30,
color:'#4e3e8c',

},
  gr1: {
    marginTop: 30,
    marginLeft: 80,
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 10,
    },
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 50,

      marginLeft: 10,
    },
    '@media  screen and (max-width: 750px)':
    {
      marginLeft:10
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 50,

      marginLeft: 5,
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 30,

      marginLeft: 10,
    },
  },
  gr2: {
    marginTop: 117,
    marginLeft: 180,
    '@media  screen and (max-width: 750px)':
    {
      marginLeft:10,
      marginTop:0
    },
   
  },

  compte: {
    fontSize: 24,
    marginTop: 8,
    marginLeft: 83,
    color: '#3cbbbb',
'@media  screen and (max-width: 960px)':
    {
      marginLeft: 33,
    },
    '@media  screen and (max-width: 600px)':
    {
      marginLeft: 10,
      fontSize: 18,
      marginTop:22,

    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 15,
      fontSize: 20,
      marginTop: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 57,
      fontSize: 24,
      marginTop: 20,
      marginRight:-130,

    },
  },

  email1 : {
    marginBottom: 20,
    marginTop:20,
    width: 300,
    color: '#4e3e8c',
    '@media  screen and (max-width: 960px)':
    {
      width: 250,
    },
    '@media  screen and (max-width: 560px)':
    {
      width: 300,


    },
    '@media  screen and (max-width: 750px)':
    {
      width: 350,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },
  inputs : {
    width: 300,
    marginBottom: 20,
    '@media  screen and (max-width: 960px)':
    {
      width: 250,
      marginBottom: 20,
    },
    '@media  screen and (max-width: 560px)':
    {
      width: 300,


    },
    '@media  screen and (max-width: 750px)':
    {
      width: 350,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },
 
  imguser: {
    marginTop: 50,
    marginLeft: 70,
    width:350,
    height:350,
    padding:50,
    '&:hover':{
      transform: "scale3d(1.1, 1.1, 1)"},
  
  


    '@media  screen and (max-width: 960px)':
    {
      width: 300,
      marginLeft:130,
      marginTop: 110,

   
    },
    '@media  screen and (max-width: 600px)':
    {

      width: 120,
      marginLeft:130,
      marginTop: 20,
    },
    '@media  screen and (max-width: 560px)':
    {

      width: 120,
      marginLeft:30,
      marginTop: 20,
    },
    '@media  screen and (max-width: 320px)':
    {
      width: 0,

    },

  },
  buttonuser: {
    marginLeft: 150,
    marginBottom: 20,
    width: 200,
    marginTop: -100,
    background: '#3cbbbb',
    '&:hover ': {
      background: '#3cbbbb',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width: 960px)':
    {
      marginTop: 10,
      marginLeft: 180,
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 10,
      marginLeft: 150,
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 0,
      marginLeft: 80,
      width: 150,


    },

  },

 

  textf: {
    marginTop: 15,
    width: 300,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 15,
      width: 250,

    },
    '@media  screen and (max-width: 850px)':
    {
      width: 290,


    },
    '@media  screen and (max-width: 750px)':
    {
      width: 350,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
 
    
  },

  textf2: {
    marginTop: 15,
    marginBottom: 15,
    width: 300,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 15,
      width: 250,

    },
    '@media  screen and (max-width: 560px)':
    {
      width: 100,


    },
    '@media  screen and (max-width: 750px)':
    {
      width: 350,

    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },


  col1: {
    marginLeft: 30,
    marginTop: -15,
    '@media  screen and (max-width: 600px)':
    {

      marginLeft: 10,
      marginTop: 35,

    },
    '@media  screen and (max-width: 560px)':
    {

      marginLeft: 5,
      marginTop: 35,

    },
    '@media  screen and (max-width: 560px)':
    {

      marginLeft: 10,
      marginTop: 25,

    },
  },

  radio: {
    display: "flex",
    marginBottom: 0,
  },
  words: {
    fontSize: 12,
  },
  labeln: {
    color: '#3cbbbb',

  },
  labela: {
    color: '#3cbbbb',
    marginBottom: 5,
    '@media  screen and (max-width: 960px)':
    {
    width:180,
    },
    '@media  screen and (max-width: 600px)':
    {

    width:150,
    },
  },

  filebase: {
    marginTop: 15,
    '@media  screen and (max-width: 320px)':
    {
  
      marginTop: 10,


    },
  },
  col2: {
    marginLeft: 80,
    marginTop: 120,
    '@media  screen and (max-width: 600px)':
    {

      marginLeft: 160,
      marginTop: 145,

    },
    '@media  screen and (max-width: 560px)':
    {

      marginLeft: 100,
      marginTop: 145,

    },
    '@media  screen and (max-width: 320px)':
    {
  
      marginTop: 538,
      marginLeft:-95,

    },
  },
 
 
  
  labels: {
    color: '#3cbbbb',
    marginTop: 20,

  },
  imgmedecin: {
    marginLeft: 150,
    marginTop: 150,
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 110,
      marginTop: 120,
      width:350,
      height:400,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 120,
      marginLeft:130,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 120,
      marginLeft:50,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 0,
      marginLeft:50,
      marginTop: 20,
      height:120,

    },
  },
  colf1: {
    marginLeft: 60,
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 50,


    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 45,


    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 10,


    },
  },

  colf2: {
    marginLeft: 140,
    marginTop: 113,
    '@media  screen and (max-width:1280px)':{
      marginLeft: 190,
      marginTop:130,

    },

    '@media  screen and (max-width:960px)':
    {
      marginLeft: 140,
      marginTop: 138,

    },
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 50,
      margin:0
    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 45,
      margin:0



    },
    '@media  screen and (max-width:850px)':
    {
      marginLeft: 200,
      marginTop:80



    },
    '@media  screen and (max-width:950px)':
    {
      marginLeft: 200,
      marginTop:160



    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 0,
      marginTop: 570,

    },
  },


  colf3:{
    marginLeft: 50,
    marginTop: 100,
    '@media  screen and (max-width:1280px)':{
      marginLeft: 190,
      marginTop:130,

    },

    '@media  screen and (max-width:960px)':
    {
      marginLeft: 140,
      marginTop: 138,

    },
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 40,
      marginTop:0,
    },
    '@media  screen and (max-width:850px)':
    {
      marginLeft: 30,
      marginTop:60,



    },
  },
colf22: {
    marginLeft: 50,
    marginTop: 113,
    '@media  screen and (max-width:1280px)':{
      marginLeft: 190,
      marginTop:130,

    },

    '@media  screen and (max-width:960px)':
    {
      marginLeft: 140,
      marginTop: 138,

    },
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 35,
      marginTop:0,
    },
    '@media  screen and (max-width:850px)':
    {
      marginLeft: 30,
      marginTop:60,



    },
   
    
  },
  papermedecin:{
    width: 1400,
    height: "auto",
    display:"flex",
    marginLeft:100,
    marginTop:50,
    '@media  screen and (max-width:1280px)':{
      width: 1400,


    },

    '@media  screen and (max-width:960px)':
    {
      width: 1000,


    },
    '@media  screen and (max-width:650px)':
    {
      width: 600,

    },
    '@media  screen and (max-width:850px)':
    {
      width: 900,




    },
   
  },

  formu:{
    display:"flex",
  
    flexDirection:"row",
    '@media  screen and (max-width:560px)':{
      display:"flex",
      flexDirection:"column",
    },

    '@media  screen and (max-width:750px)':{
      display:"flex",
      flexDirection:"column",
    }
  
  },
  filebase1: {
    marginTop: 10,
    marginBottom: 22,
    '@media  screen and (max-width:960px)':
    {
      marginBottom: 15,


    },
  },
  comptemedecin: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 60,
    color: '#3cbbbb',
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 57,
      marginTop: 35,


    },
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 30,
      fontSize: 22,
      marginRight:-60,


    },
    '@media  screen and (max-width:850px)':
    {
      marginLeft: 50,
      fontSize: 22,
      margin:0,
      marginRight:-100,


    },
    '@media  screen and (max-width:320px)':
    {
      fontSize: 24,
      marginTop: 20,
      marginLeft: 57,
      marginRight: -130,
        },
  },
  btnmedecin: {
    marginLeft: 500,
    marginBottom: 20,
    marginTop:0,
    width: 200,
    color: "#f5f5f5",
    background: '#3cbbbb',
    '&:hover ': {
      background: '#3cbbbb',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 250,
      marginBottom: 20,
      marginTop: 20,
      width: 200,


    },
    '@media  screen and (max-width:650px)':
    {
      marginLeft: 200,
      marginBottom: 20,
      marginTop: 10,
      width: 180,


    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 160,
      marginBottom: 20,
      marginTop: 5,
      width: 180,


    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 65,
      marginBottom: 20,
      marginTop: 5,
      width: 180,


    },
  },
  error: {
    color: ' #ff1744',
  },


  forget: {
    width: 900,
    height: 500,
    marginTop: 100,
    marginLeft: 300,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 250,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 180,

    },
    '@media  screen and (max-width:1150px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 80,
    },
    '@media  screen and (max-width:960px)':
    {
      width: 850,
      height: 485,
      marginTop: 100,
      marginLeft: 40,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 560,
      height: 405,
      marginTop: 100,
      marginLeft: 15,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 520,
      height: 390,
      marginTop: 130,
      marginLeft:10 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 310,
      height: 340,
      marginTop: 25,
      marginLeft:-3 ,
    },
  },
  paragraph: {
    fontSize: 18,
    fontFamily: "Arial",
    marginLeft: 15,
    '@media  screen and (max-width:960px)':
    {
      width: 500,
      marginTop: 25,
      marginLeft:15 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 280,
      marginTop: 15,
      marginLeft:15 ,
      fontSize: 14,

    },
  },
  emailforget: {
    marginTop: 50,
    marginLeft: 50,
    width: 280,
    '@media  screen and (max-width:600px)':
    {
      marginTop: 30,
      marginLeft: 120,
      width: 280,

    },
    '@media  screen and (max-width:320px)':
    {
      marginTop: 10,
      marginLeft: 10,
      width: 280,

    },
  },
  btnforget: {
    marginTop: 30,
    marginLeft: 110,
    marginBottom: 20,
    width: 150,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop: 30,
      marginLeft: 180,
      marginBottom: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginTop: 20,
      marginLeft: 70,
      marginBottom: 20,

    },
  },
  imgforget: {
    marginTop: 25,
    '@media  screen and (max-width:960px)':
    {
      marginTop:80,
      marginLeft:-80,
      width:350,
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop:0,
      width:0,
      height:0,
    },
    '@media  screen and (max-width:320px)':
    {
      width:0,
      height:0,
      marginLeft:-21,
    
    },
  },
  retrouver: {
    marginTop: 50,
    color: '#fa7d39',
    fontSize: 24,
    marginLeft: 15,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 100,
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop: 40,
      marginLeft: 100,

    },

    '@media  screen and (max-width:320px)':
    {
      marginTop: 20,
      fontSize: 18,
      marginLeft: 13,

    },
  },

  reset: {
    marginLeft: -55,
    marginTop:0,
    '@media  screen and (max-width:1280px)':
    {
      marginLeft: 5,
      marginTop:0,
    },
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 85,
      marginTop:0,
      height:400,
    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 15,
      marginTop:45,
      height:300,
      width:270,
    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: -1,
      marginTop:55,
      height:300,
      width:260,
    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 5,
      marginTop:85,
      height:0,
      width:0,
    },
  },
  colreset: {
    marginLeft: 50,
    marginTop: 30,
    '@media  screen and (max-width:600px)':
    {
    marginLeft: 20,
    marginTop: 30,
    },
    '@media  screen and (max-width:320px)':
    {
    marginLeft: 10,
    marginTop: 30,
    },
  },
  changer: {
    marginTop: 40,
    color: '#fa7d39',
    fontSize: 24,
    marginLeft: 45,
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 20,
      fontSize: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 20,
      fontSize: 20,
      marginTop: 20,

    },
  },
  btnreset: {
    marginTop: 10,
    marginLeft: 130,
    marginBottom: 20,
    width: 150,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 60,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 80,

    },
  },

  forget2: {
    width: 900,
    height: 500,
    marginTop: 100,
    marginLeft: 300,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 250,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 180,

    },
    '@media  screen and (max-width:1150px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 80,
    },
    '@media  screen and (max-width:960px)':
    {
      width: 850,
      height: 485,
      marginTop: 100,
      marginLeft: 40,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 560,
      height: 405,
      marginTop: 100,
      marginLeft: 15,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 520,
      height: 390,
      marginTop: 130,
      marginLeft:10 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 310,
      height: 340,
      marginTop: 25,
      marginLeft:-3 ,
    },

  },

}));
