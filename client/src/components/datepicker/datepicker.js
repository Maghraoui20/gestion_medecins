import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
export default function DatePickers({ onChangeDate }) {
    const classes = useStyles();

  return (
    <div  className={classes.container} noValidate>
      <TextField
      required
        id="date"
        label="Date Début"
        type="date"
        name="date"
        variant="outlined"
        onChange={onChangeDate}
        style={{ width: 360 , marginTop: 15 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
    </div>
  );
}