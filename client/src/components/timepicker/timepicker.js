import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    flexWrap: 'wrap',
  },

}));

const  TimePickers = ({onChangeHeure, heure}) => {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate>
      <TextField
        required
        id="time"
        label="Horaire"
        type="time"
        variant="outlined"
        value={heure}
        onChange={onChangeHeure}
        style={{ width: 360 , marginTop: 15, marginBottom:20 }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 60, 
        }}
      />
    </div>
  );
}
export default TimePickers;