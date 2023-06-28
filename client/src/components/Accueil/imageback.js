import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import imgb from '../Pictures/backg.jpg'
import useStyles from "./styles";

const Imageback = () => {
  const classes = useStyles();

  return (
    <div >
      <div className={classes.div1} >
      <div className={classes.divimg}> <h1
       className={classes.textimg}>
          Nous prenons soin <span className={classes.span}> de votre santé</span> <Button href="/nosmedecin"
            style={ {color: '#ffffff', background: '#3cbbbb', borderRadius: 30, width:150, marginLeft:100, marginTop:20,
           
            }}>Prendre RDV</Button>
        </h1>
        </div>
        <img src={imgb} style={{ width: '100%', marginTop: "5%", }} />
      
      </div>
    </div>
  );
};
export default Imageback;