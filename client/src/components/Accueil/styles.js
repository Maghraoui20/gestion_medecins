import { makeStyles } from "@material-ui/core/styles";
import { maxHeight } from "@mui/system";

export default makeStyles((theme) => ({

    boutonmap:{
        marginTop:130,
        marginLeft:-700,
        
            },









div1:{
width:"auto",

"@media (max-width: 900px)": {
marginTop:"3%"   

},
"@media (max-width: 600px)": {
    marginTop:"9%",
     
    },
"@media (max-width: 450px)": {
    marginTop:"20%"   


},
},
divimg:{
display:"flex",
flexDirection:"column",
alignItems:"flex-end",
},
textimg:{
    display:"flex",
flexDirection:'column',
    position: "absolute",  fontFamily: 'revert' ,
    padding:140,
    fontSize:50,
    "@media (max-width: 900px)": {
        padding:50,
                    },
    "@media (max-width: 600px)": {
        padding:30,
        fontSize:25,
                    },
},
span:{
  color:'#3cbbbb'
},



imgaccuel:{
    width:"100%",
    height:600,

    paddingTop:80,
    '&:hover':{
        transform:"translateY(40px)",
        transition:"all 1s ease",
     },
        },

 sec1 :{
    marginTop:-5,
     backgroundColor:"#120a37",
    height:600,
    width:"100%",
 
 "@media (max-width: 950px)": {
    height:1500,
   

},
"@media (max-width: 450px)": {
    height:1800,


},

}  ,
sec2 :{
    backgroundColor:"#ffffff",
   height:300,
   width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    paddingTop:20,
    fontFamily :'sans-serif',

"@media (max-width: 950px)": {
   height:500,


},


}  ,

sec3:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-around', 
  padding:30,  
height:'20%',
  background:"#120a37",
  "@media (max-width: 950px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height:'21%',

},
"@media (max-width: 450px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height:'25%',

},
},




parag1:{
    color:"#ffffff",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    paddingTop:20,
    fontFamily :'cursive', 
    
'&:hover':{
    transform:"translateY(40px)",
    transition:"all 1s ease",
 },
    "@media (max-width: 900px)": {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:40,
    },
},


propos:{  color:"#120a37",
display:"flex",
flexDirection:"column",
alignItems:"center",
paddingTop:10,


"@media (max-width: 700px)": {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
},},


parag2:{
    display:"block",
    width:"90%",
    fontSize:22,
   
},
photos:{
    padding:40,
    display:"flex",
    justifyContent:"space-between",
  

  "@media (max-width: 950px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    "@media (max-width: 450px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
},
para:{
    color:"#ffffff",
    fontFamily :'cursive', 

    "@media (max-width: 950px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:"bold"
    },
},
photo1:{
    
    '&:hover':{
    transform: "scale3d(1.1, 1.1, 1)"}

},

sec4:{
    marginBottom:0
}


    }));