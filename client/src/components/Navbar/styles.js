import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    justifyContent: "flex-end",
    backgroundColor: "#120a37",
    display: "flex",
  
  },
logo1:{
  flex:"auto",

  "@media (max-width: 900px)": {
    flex:"none",
  },
},
  toulBar: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 900px)": {
      justifyContent: "space-between",
    },
  },
  linksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
 
 
  title1: {
    margin: "20px 25px",
  },



  links: {
      color:"#ffffff",
      fontSize:25,
      fontFamily:"Noto Sans KR",
      '&:hover': {
        color: "#3cbbbb",
   

},

    },

   
   

    logo:{
      height:50,
      backgroundColor:"#120a37",
display:"flex",


    },
  
    buttonmobile: {
      padding :"5px 10px",
      margin:"0px 5px",
      color:"#ffffff",
      borderRadius:50,
      marginLeft:50,
      marginTop:40,
      width:150,
      backgroundColor:" #3cbbbb",
      '&:hover': {
        background: "#3cbbbb",
   

},

  },
  button:{
    padding :"5px 10px",
    margin:"0px 5px",
    color:"#ffffff",
    borderRadius:50,
  
    width:130,
    backgroundColor:" #3cbbbb",
    '&:hover': {
      background: "#3cbbbb",
 

},
  },
    icons:{
    fill:"#f5f5f5",
    

},
linkicon :{
  color:"#f5f5f5",
  padding:"10px 10px",
marginTop:30,
},
divicon:{
  display:"flex",
  marginTop:5,

},
iconcolor:{
  color: "#3cbbbb",

},

typicon:{
 

  backgroundColor:"#120a37",
  height:"100%",
paddingLeft:10,},

iconopenclose: {
  fontSize: 40,
  color: "#3cbbbb",
paddingLeft:210,
paddingTop:30,

},

iconmenu:{
  fontSize: 40,
  color: "#3cbbbb",
paddingLeft:10,
paddingTop:20,
},
iconmenu1:{
  fontSize: 40,
padding:10
},


openicon: {
   marginLeft: 100,
   
   color: 'black',
   '&:hover': {
      background: 'transparent',
   },
   '@media  screen and (max-width: 960px)': {
      marginLeft: "79%",
   },
      '@media  screen and (max-width: 600px)': {
         marginLeft: "73%",
      },
      '@media screen and (max-width: 500px)': {
         marginLeft:"62%",


      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: "42%",
      },

},
btn :{
  color:'transparent',
  '&:hover': {
    background: 'transparent',


},
},
avatardesgin : {
  display:'flex',
  marginLeft:10,
},
arrow :{
  marginTop:10,
  marginLeft:5,
  color:'#ffffff',
    }, 
    item :{
      fontSize:20,
      marginRight:25,
      overflow:'visible',
      '&:hover': {
        background: 'transparent',
   
  
    },
    },
    iconuser : {
      fontSize:28,
      marginRight:5,
      marginLeft:15,
    },

}));