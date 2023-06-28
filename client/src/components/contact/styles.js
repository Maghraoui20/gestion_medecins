import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    paper: {
        marginTop: '8%',
        width: 930,

        height: 500,
        borderRadius: 10,
        '@media  screen and (max-width:1400px)':
        {
            width: 800,
            marginBottom:150,


        },

        '@media  screen and (max-width:950px)':
        {
            width: 800,
            marginBottom:150,


        },
        "@media (max-width: 850px)": {
            width: 700,
            height:900
        },
        "@media (max-width: 700px)": {
            width: 650,
            height:950
        },
        "@media (max-width: 650px)":{
            width: 600,
            height: 900,

        },
        "@media (max-width: 600px)": {
            width: 480,
            height: 900,
            marginBottom:200,
        },

    },

div1:{
    '@media  screen and (max-width:1400px)':
    {
        marginLeft:170     

    },
    '@media  screen and (max-width:950px)':
    {
        marginLeft:170     

    },
    "@media (max-width: 850px)": {
        marginTop:400,
        marginLeft:-50     },
    "@media (max-width: 700px)": {
        marginTop:400,
        marginLeft:-50     },
    "@media (max-width: 650px)": {
        marginTop:400,
        marginLeft:-50    },
    "@media (max-width: 600px)": {
     marginTop:400,
     marginLeft:0
    },

},



    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,

    },
    right: {
        background: '#120a37',
        width: 300,
        height: 350,
        marginLeft: -100,
        marginTop: -370,
        '@media  screen and (max-width:950px)':
        {
            width: 300,
            height: 350,
            marginLeft: -40,
            marginTop: -370,    
    
        },
        "@media (max-width: 850px)": {
            marginTop:-800,
            width:400,
            marginLeft:100          },
        "@media (max-width: 700px)": {
            marginTop:-800,
            width:400,
            marginLeft:50           },
        "@media (max-width: 650px)": {
            marginTop:-800,
            width:400,
            marginLeft:50        },
        "@media (max-width: 600px)": {
         marginTop:-800,
         width:400,
         marginLeft:10
        },

    },
    titre: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        paddingTop: 30,
        fontFamily: 'Noto Serif'

    },
    color: {
        color: "#3cbbbb",
        padding: 10,
    },
    email: {
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        paddingLeft: 20,
        margin: 0
    },
    social: {
        color: "#3cbbbb",
        display: "flex",
        justifyContent: "center",
    },
    size: {
        fontSize: 35,
    },
    titre1: {
        display: "flex",
        justifyContent: "center",
        fontFamily: 'Noto Serif'
    },
    titre2: {
        display: "flex",
        justifyContent: "center",
        fontFamily: 'Noto Serif',
        fontSize: 18,
    },
    inputs: {
display:"grid",
justifyContent:"center",
    },
    btn:{
        color: " #f5f5f5",
        border: "2px solid",
        borderColor: "#120a37",
        backgroundColor: "#120a37",
        borderRadius: 20,
        width:100,
        fontSize: 13,
      
    
        '&:hover': {
          background: "#ffffff",
          color: " #4e3e8c",
          marginTop: 0,
        },
    },
    button:{
        display:"flex",
        justifyContent:"center",
    }
}));
