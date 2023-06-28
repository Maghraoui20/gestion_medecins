import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 120,
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

      rootres: {
        marginTop: 50,
        width: 300,
        height: 470,
        marginLeft: 80,
    marginBottom:50,
        backgroundColor: " #f5f5f5",
    
        '@media  screen and (max-width: 960px)': {
          marginTop: 50,
          marginLeft: 60,
        },
    
        '&:hover': {
          transform: "scale3d(1.05, 1.05, 1.05)"
        }
    
    
    
    
      },



      div:{
display:'flex',
justifyContent:"center"  ,
alignContent:"center"   ,
margin:350,

fontSize:25,
color:"#3cbbbb" ,
fontWeight:'bold'},
      voirplus :{
      
        color:"#4e3e8c",
        borderColor: "#4e3e8c",
        border:"2px solid",
        borderRadius:6,
       marginTop:"40%",
       marginLeft:"40%",
       marginBottom:"3%",
        fontSize:12,
        '&:hover': {
          background: "#4e3e8c",
          color: " #ffffff",
      },
      
    },
      svg: {
        display: "flex",
    
      },
      Container: {
        position: "relative",
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
      avatar1: {
        marginLeft: 60,
        width: 160,
        borderRadius: 100,
        paddingTop: "56.25%",
        marginTop: -112,
    
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
      place: {
        display: 'flex',
      },
      Placeicon: {
        fontSize: 30,
        marginRight: 10,
        marginTop: 15,
        color: " #3cbbbb",
    
    
      },lieu: {
        fontSize: 18,
        textTransform: "capitalize",
        marginTop: 20,
      }, nbh: {
        fontSize: 18,
        marginRight: 15,
    
        marginTop: 18,
      },
      btns: {
        display: "flex",
        justifyContent: "center",
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
typo:{
 color:"#3cbbbb",
 fontSize:16,
 marginTop:20,
 fontWeight:'bold',
 display:"flex",
 justifyContent:"center",
}, 
dire:{
  color:"#3cbbbb",
  fontWeight:"bold",
  fontSize:18,
  marginLeft:-90,
  marginBottom:10,
  marginTop:30,
  display:"flex",
  justifyContent:"center",
},
 buttonac: {
  marginTop: 0,
  display: "flex",

  

},
confirmer:{
  marginRight:20,
  marginLeft:30,
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

num:{
marginLeft:10,
'@media screen and (max-width: 1100px)': {
  margin:20,
  
      },
      '@media screen and (max-width: 960px)': {
        margin:20
  
  
      },
      '@media screen and (max-width: 800px)': {
        margin:10
  
  
  
      },
      '@media screen and (max-width: 700px)': {
        width:350,margin:10
  
  
      },
      '@media screen and (max-width: 600px)': {
        width:350,margin:10
  
  
      },
      '@media screen and (max-width: 560px)': {
      width:350,margin:10
        
  
      },
},

      paper2 :{
        marginTop:220,
        width:400,
        height:200,
        display:"flex",
        marginLeft:500,
        justifyContent: "center",
        borderRadius:0,
     backgroundColor:"#f5f5f5",
        '@media screen and (max-width: 900px)': {
         width:800,
     
        } , 
        '@media screen and (max-width: 800px)': {
         width:700,
     
        }   ,
        '@media screen and (max-width: 700px)': {
         width:600,
     
        } ,
        '@media screen and (max-width: 600px)': {
         width:500,
     
        } ,
        '@media screen and (max-width: 560px)': {
         width:500,
     
        } ,
     
      },
      paper3 :{
        marginTop:220,
        width:400,
        height:300,
        display:"flex",
        marginLeft:280,
        justifyContent: "center",
        borderRadius:0,
     backgroundColor:"#f5f5f5",
        '@media screen and (max-width: 900px)': {
         width:800,
     
        } , 
        '@media screen and (max-width: 800px)': {
         width:700,
     
        }   ,
        '@media screen and (max-width: 700px)': {
         width:600,
     
        } ,
        '@media screen and (max-width: 600px)': {
         width:500,
     
        } ,
        '@media screen and (max-width: 560px)': {
         width:500,
     
        } ,
     
      },
      paper4 :{
        marginTop:100,
        width:400,
        height:550,
        marginLeft:280,
        borderRadius:0,
     backgroundColor:"#f5f5f5",
        '@media screen and (max-width: 900px)': {
         width:800,
     
        } , 
        '@media screen and (max-width: 800px)': {
         width:700,
     
        }   ,
        '@media screen and (max-width: 700px)': {
         width:600,
     
        } ,
        '@media screen and (max-width: 600px)': {
         width:500,
     
        } ,
        '@media screen and (max-width: 560px)': {
         width:500,
     
        } ,
     
      },
    paper1: {
        marginTop: 120,
        width: 1050,
        height: 500,
        justifyContent: "center",
        borderRadius: 0,
        marginBottom:70,

        '@media screen and (max-width: 1100px)': {
            width: 950,
            height:700,

        },
        '@media screen and (max-width: 960px)': {
            width: 850,
            height:700,

        },
        '@media screen and (max-width: 800px)': {
            width: 700,
            height: 1000,


        },
        '@media screen and (max-width: 700px)': {
            width: 600,
            height:900,


        },
        '@media screen and (max-width: 600px)': {
            width: 500,
            height:900,

        },
        '@media screen and (max-width: 560px)': {
            width: 450,
height:1000
        },

    },
    papermed: {
      marginTop: 120,
      width: 1050,
      height: 700,
      justifyContent: "center",
      borderRadius: 0,
      marginBottom:30,

      '@media screen and (max-width: 1100px)': {
          width: 950,

      },
      '@media screen and (max-width: 960px)': {
          width: 850,
          height:1000

      },
      '@media screen and (max-width: 800px)': {
          width: 700,
          height: 1300,


      },
      '@media screen and (max-width: 700px)': {
          width: 600,
          height:1400

      },
      '@media screen and (max-width: 600px)': {
          width: 500,
          height:1600

      },
      '@media screen and (max-width: 560px)': {
          width: 450,
height:1600
      },

  },


    infosgeneral: {
   margin:50,
   paddingTop:20,
        color:"#3cbbbb",
        fontSize:22
    },
    avatar: {
        width: 130,
        height: 130,
    },
    all:{
        margin:30,

    },
    inputs:{
        display:"inline-flex",
        marginTop:30,
        '@media screen and (max-width: 800px)': {
display:"block"
        },

    },
    cin:{
        marginTop:15,
    },
    pass:{
        display:'flex',
        marginTop:30,
        '@media screen and (max-width: 800px)': {
            display:"block"
                    },
    },
    btn:{
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
    button:{
        display:'flex',
        justifyContent:"center"
    },
    avatar : {
      width:130,
      height:130,
      margin:20,
     },
     div1:{
       marginLeft:70,



       '@media screen and (max-width: 1100px)': {
margin:0,

    },
    '@media screen and (max-width: 960px)': {
      margin:0


    },
    '@media screen and (max-width: 800px)': {
      marginTop:250,
      marginLeft:-250,


    },
    '@media screen and (max-width: 700px)': {
      marginTop:250,
      marginLeft:-250,

    },
    '@media screen and (max-width: 600px)': {
      marginTop:250,
      marginLeft:-250,

    },
    '@media screen and (max-width: 560px)': {
      marginTop:200,
      marginLeft:-250,


    },







     },
     divall:{
       display:"inline-flex"
     },
     textfil1:{
       margin:10,
       '@media screen and (max-width: 1100px)': {
        margin:20,
        
            },
            '@media screen and (max-width: 960px)': {
              margin:20
        
        
            },
            '@media screen and (max-width: 800px)': {
              margin:10
        
        
        
            },
            '@media screen and (max-width: 700px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 600px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 560px)': {
            width:350,margin:10
              
        
            },
     },
     textfil2:{
      marginLeft:20,
      marginTop:20,
      '@media screen and (max-width: 1100px)': {
        margin:20,
        
            },
            '@media screen and (max-width: 960px)': {
              margin:20
        
        
            },
            '@media screen and (max-width: 800px)': {
              margin:10
        
        
        
            },
            '@media screen and (max-width: 700px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 600px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 560px)': {
            width:350,margin:10
              
        
            },
    },
    input1:{
margin:15,
'@media screen and (max-width: 1100px)': {
  margin:20,
  
      },
      '@media screen and (max-width: 960px)': {
        margin:20
  
  
      },
      '@media screen and (max-width: 800px)': {
        margin:10
  
  
  
      },
      '@media screen and (max-width: 700px)': {
        width:350,margin:10
  
  
      },
      '@media screen and (max-width: 600px)': {
        width:350,margin:10
  
  
      },
      '@media screen and (max-width: 560px)': {
      width:350,margin:10
        
  
      },


},
desc:{
  width:300,
  marginLeft:-30,
    '@media screen and (max-width: 1100px)': {
        margin:20,
        
            },
            '@media screen and (max-width: 960px)': {
              margin:20
        
        
            },
            '@media screen and (max-width: 800px)': {
              margin:10
        
        
        
            },
            '@media screen and (max-width: 700px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 600px)': {
              width:350,margin:10
        
        
            },
            '@media screen and (max-width: 560px)': {
            width:350,margin:10
              
        
            },
},


visuallyHidden: {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: 20,
  width: 1,
},
scrolbar:{
  marginTop:100,
  margin:'auto',
  color :'#000000',

  width:320,
  },
  rootr:{
height:700
  },
  indicator:{
    '.MuiTabs-indicator':{
      color:" #4e3e8c",
    },
  },
  paperreserv: {
    width: '80%',
    marginBottom: 100,
    marginTop:40,
    marginLeft:120,
  },
  table: {
    minWidth: 750,
  },
  icons1: {
  color:" #3cbbbb",
},

bgc:{
  backgroundColor:'#ffffff',
},


rese:{
display:"flex",
justifyContent:"center",
margin:50,
color:"#3cbbbb",
fontSize:22,
fontFamily: 'Noto Serif',
fontWeight:200
},

colorchec:{
  color:'#3cbbbb',
},


error: {
  color: ' #ff1744',
},
openicon:{
  position:'relative'
},
imgcard:{
  position:"absolute",
  width:400,
  height:400,
  margin:0,
  display:"flex",
  justifyContent:"center"
},
message:{
marginTop:350},
iconsu1:{
marginLeft:10,
color:"#3cbbbb"
},
}));