import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import useStyles from './styles';
import doctor from '../Pictures/Doctors1.gif';
import patient from '../Pictures/malade.gif';
const Modals = ({ handleClose, open, setOpen }) => {
    const classes = useStyles();

{console.log(window.innerWidth);}

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper1} >
                    <div className={classes.titleicon}>
                      <h3 className={classes.tantque} >S'inscrire comme </h3>


                        <Button
                            className={classes.openicon}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <CloseIcon className={classes.iconclose} />
                        </Button>
                    </div>
                    
                        <div className={classes.pic}>
                        <div className={classes.picbtn}>
                            <img src={patient} className={classes.img1} />
                            <div className={classes.modalresponsive}>
                            <span className={classes.client}> Patient </span></div>
                            <Button className={classes.btnc} href='/signupuser'>S'inscrire</Button>
                        </div>
                        <div >
                            <div className={classes.picbtn}>

                         
                            <img src={doctor} className={classes.img1} />
                            <div className={classes.modalresponsive2}>
                            <span className={classes.medecin}> Médecin </span></div>
                            <Button className={classes.btnc} href='/signupmedecin'>S'inscrire</Button>
                            </div>
                        </div>
                        </div>

                </div>
            </Fade>
        </Modal>
    )
}
export default Modals;