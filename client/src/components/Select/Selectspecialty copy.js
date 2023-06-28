import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';

 const  Selectspecialty = ( {onChangeData2 , speciality, value})  => {

  const classes = useStyles();


  return (
    isuser ?
    <Autocomplete
multiple
    
      onChange={onChangeData2}
      options={speciality}
      getOptionLabel={(option) => option.nom}

      value={value}   
      getOptionSelected={(option,value) => option.nom === value.nom}
      renderInput={(params) => <TextField    {...params} label="Spécialité" 
      variant="outlined"  
      className={classes.autocomplete}
      />}
    />
    :
    <Autocomplete
    multiple
    
      onChange={onChangeData2}
      options={speciality}
      getOptionLabel={(option) => option.nom}
      renderInput={(params) => <TextField    {...params} label="Spécialité" 
      variant="outlined"  
      className={classes.autocomplete}
      />}
    />
  );
};
export default Selectspecialty;