import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Accueil from './components/Accueil/accueil';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/index';
import Medecins from './components/Medecins/medecin';
import Signin from './components/authentification/Signin';
import Medecin from './components/authentification/signupmedecin';
import Signup from './components/authentification/signupatient';
import PrivateRoute from './components/PrivateRoutes/privateroute';

import Forgetpassword from './components/authentification/forgetpass';
import Details from './components/Details/details';
import Account from './components/profils/profiluser';
import Myfavorites from './components/profils/myfavorites';
import Myreservation from './components/profils/myreservations';
import Rendezvous from './components/profils/validerreservations';
import Contact from './components/contact/contact';
const App = () => {


    return (
        <Router>
            <Switch>
            <Route path="/signin"> <Signin /> </Route>
            <Route path="/signupmedecin"> <Medecin /> </Route>
            <Route path="/signupuser"> <Signup /> </Route>

            <Route path="/forget"> <Forgetpassword /> </Route>


        <>
         <Navbar /> 
         <Route path="/" exact component={Accueil} />
         <Route path="/contact" exact component={Contact} />

         <Route path="/nosmedecin" ><Medecins/></Route>
         <Route path="/medecin/:id">  <Details/></Route>  
         <PrivateRoute path="/myaccount" component={Account}></PrivateRoute>
         <PrivateRoute path="/mesfavoris" component={Myfavorites}></PrivateRoute>


         


        <Footer/>
        <PrivateRoute path="/rendezvous" component={Rendezvous}></PrivateRoute>
        <PrivateRoute path="/mesreservations" component={Myreservation}></PrivateRoute>

        </>
        </Switch>
            </Router>
     
    )
}




export default App;