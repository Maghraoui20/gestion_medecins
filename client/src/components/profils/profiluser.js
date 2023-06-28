import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Paper, Grid, TextField, Container, Typography } from '@material-ui/core';
import Input from '../authentification/inputs';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getcategorie } from '../../actions/categorie';
import { getCity } from '../../actions/cities';
import { getgouvernorat } from '../../actions/gouvernorat';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../../actions/authentification';
import FileBase from 'react-file-base64';
import { style } from '@mui/system';
import FormHelperText from '@material-ui/core/FormHelperText';

const Profiluser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(userinfos);
    const { firstname, lastname, phone, email, cin, gouvernorate, city, idspeciality, namespeciality, Numbreofexperience, selectedimage, idgouvernorate, idcity, namecities, description, namegouvernorate, adressexact, price } = Data;
    const [userData, setuserData] = useState({ firstname, lastname, phone, email, cin, gouvernorate, city, idspeciality, Numbreofexperience, namespeciality, selectedimage, idgouvernorate, idcity, namecities, description, namegouvernorate, adressexact, mdpactuel: '', password: '', confirmerMotdepasse: '', price })

    const [filtredCity, setfiltredCity] = useState([]);
    const [City, setCity] = useState([]);
    const [gouvernorat, setGouvernorats] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [id, setid] = useState('');
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleShowPassword2 = () => setShowPassword2(!showPassword2);
    const [error, setError] = React.useState(false);

    const [helperTextimg, setHelperTextimg] = React.useState('');



    useEffect(() => {

        dispatch(getCity()).then((res) => {
            setCity(res);

        });
        dispatch(getgouvernorat()).then((res) => {
            setGouvernorats(res);
        });
    }, []);
    const handleChangegouvernorat1 = (e, val) => {

        setuserData({ ...userData, gouvernorate: val.nom })
        val === null ? setfiltredCity([]) :
            setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
    };


    const handleChangecity1 = (e, val) => {
        e.preventDefault();
        setuserData({ ...userData, city: val.nom });

    };

    const handleChangemdp = (e) => {
        setuserData({ ...userData, password: e.target.value });
    };


    const handleChangeactuel = (e) => {
        setuserData({ ...userData, mdpactuel: e.target.value });
    };
    const handleChangeconfirm = (e) => {
        setuserData({ ...userData, confirmerMotdepasse: e.target.value });
    };

    const handlechangenom = (e) => {
        setuserData({ ...userData, firstname: e.target.value });
    };
    const handlechangeprenom = (e) => {
        setuserData({ ...userData, lastname: e.target.value });
    };
    const handlechangecin = (e) => {
        setuserData({ ...userData, cin: e.target.value });
    };
    const handlechangeemail = (e) => {
        setuserData({ ...userData, email: e.target.value });

    }
    const handlechangetel = (e) => {
        setuserData({ ...userData, phone: e.target.value });
    }
    const handlechangeprice = (e) => {
        setuserData({ ...userData, price: e.target.value })
    }
    const handlechangedesc = (e) => {
        setuserData({ ...userData, description: e.target.value })

    }
    const handlechangeadresse = (e) => {
        setuserData({ ...userData, adressexact: e.target.value })

    }
    const handlechangenbexp = (e) => {
        setuserData({ ...userData, Numbreofexperience: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(updateUser(id, userData))

      
    }
    return (
        <div className={classes.divglobal}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <div >
                    <form onSubmit={handleSubmit} >
                        <ToastContainer />


                        {Data?.Role === "client" ?
                            <Paper className={classes.paper1} elevation={2}>

                                <div className={classes.all}>
                                    <Typography className={classes.infosgeneral}>INFORMATIONS GÉNÉRALES</Typography>

                                    <TextField name='firstname' className={classes.textfil1} variant="outlined" label="Nom" value={userData.firstname} onChange={handlechangenom} ></TextField>
                                    <TextField name='lastname' variant="outlined" className={classes.textfil1} label="Prenom" value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                    <TextField name='email' variant="outlined" className={classes.textfil1} label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
                                    <TextField name='phone' variant="outlined" className={classes.textfil1} label="Telephone" value={userData.phone} onChange={handlechangetel}></TextField>
                                    <div className={classes.inputs}>
                                        <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat1} gouvernorat={gouvernorat} value={userData.gouvernorate} />
                                        <SelectCities handleChangecity={handleChangecity1} filtredCity={filtredCity} value={userData.city} />
                                        <TextField  name='cin' variant="outlined" className={classes.textfil1} label="Numero de carte d'identité" value={userData.cin} onChange={handlechangecin}></TextField>
                                    </div>
                                    <div className={classes.pass}>
                                        <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                        <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                        <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />

                                    </div>
                                </div>
                                <div className={classes.button}>

                                    <Button type="submit" variant="contained" color="primary" className={classes.btn} onClick={() => setid(Data._id)} >Enregistrer</Button>

                                </div>
                            </Paper>
                            : Data?.Role === "medecin" ? <Paper className={classes.papermed} elevation={2}> <div className={classes.all}>
                                <Typography className={classes.infosgeneral}>INFORMATIONS GÉNÉRALES</Typography>
                                <Grid lg={12} className={classes.divall} >
                                    <Grid lg={2}>
                                        <div className={classes.img}>
                                            <Avatar className={classes.avatar} alt="img" src={userData.selectedimage} ></Avatar>
                                            <div>
                                            <FileBase className={classes.filbase} type="file" name="choisir une image" multiple={false}
                                                onDone={({ base64 }) => setuserData({ ...userData, selectedimage: base64 })} />
                                            </div>
                                            <FormHelperText className={classes.error} >{helperTextimg}</FormHelperText>

                                        </div>
                                    </Grid>
                                    <Grid lg={10}>
                                        <div className={classes.div1}>

                                            <TextField name='firstname' variant="outlined" className={classes.textfil1} label="Nom" value={userData.firstname} onChange={handlechangenom} ></TextField>
                                            <TextField name='lastname' variant="outlined" label="Prenom" className={classes.textfil1} value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                            <TextField name='email' variant="outlined" label="Email" className={classes.textfil1} value={userData.email} onChange={handlechangeemail} ></TextField>
                                            <TextField name='phone' variant="outlined" label="Telephone" type="number" className={classes.textfil2} value={userData.phone} onChange={handlechangetel}></TextField>
                                            <TextField className={classes.textfil2} name='cin' variant="outlined" label="Numero de carte d'identité" value={userData.cin} onChange={handlechangecin}></TextField>

                                            <TextField name='price' variant="outlined" label="Prix" type="number" value={userData.price} className={classes.textfil2} onChange={handlechangeprice}></TextField>
                                        </div>
                                    </Grid>
                                </Grid>



                                <div className={classes.inputs}>
                                    <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat1} gouvernorat={gouvernorat} value={userData.gouvernorate} s />
                                    <SelectCities handleChangecity={handleChangecity1} filtredCity={filtredCity} value={userData.city}  />
                                    <TextField className={classes.input1} name='adress' variant="outlined" label="Adresse Exacte" value={userData.adressexact} onChange={handlechangeadresse} ></TextField>

                                </div>
                                <div className={classes.pass}>
                                    <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                    <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                    <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />


                                </div>
                                <TextField name='decs' variant="outlined" label="Description" value={userData.description} onChange={handlechangedesc} className={classes.desc}></TextField>
                                <TextField name='exp' variant="outlined" label="Nombre d'expérience" type="number" value={userData.Numbreofexperience} onChange={handlechangenbexp} className={classes.num} ></TextField>

                            </div>
                                <div className={classes.button}>

                                    <Button type="submit" variant="contained" color="primary" className={classes.btn} onClick={() => setid(Data._id)} >Enregistrer</Button>

                                </div>
                            </Paper> : null
                        }



                    </form>
                </div>
            </Grid>
        </div>
    )

}
export default Profiluser;