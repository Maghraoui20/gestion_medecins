import { combineReducers } from 'redux';

import authification from './authentification';
import categorie from './categorie';
import gouvernorat from './gouvernorat';
import cities from './cities';
import medecin from './medecin';
import favorite from './favorite'
import booking from './booking';
import opinion from './opinion';
import message from './messages';
import prescription from './prescription';

import user from './user';

export default combineReducers({authification,categorie,gouvernorat,cities,medecin, favorite, booking,opinion, user, message,prescription});