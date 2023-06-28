import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import medecinRoutes from './routes/medecin.js'
import userRoutes from './routes/user.js'

import Categorieroutes from './routes/categorie.js';
import Gouvernoratroutes from './routes/gouvernorat.js';
import Citiesroutes from './routes/cities.js';
import Favoriteroutes from './routes/favorite.js';
import Bookingroutes from './routes/booking.js';
import Opinionroutes from './routes/opinion.js';
import Messagesroutes from './routes/messages.js';
import Prescriptionsroutes from './routes/prescription.js';
const app = express();
app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());
app.use('/medecin',medecinRoutes);
app.use('/user',userRoutes);
app.use('/categorie', Categorieroutes);
app.use('/gouvernorat', Gouvernoratroutes);
app.use('/cities', Citiesroutes);
app.use('/favorite', Favoriteroutes);
app.use('/booking', Bookingroutes);
app.use('/opinion', Opinionroutes);
app.use('/messages', Messagesroutes);
app.use('/prescription',Prescriptionsroutes);







const CONNECTION_URL = 'mongodb+srv://dbproject:ameni123@cluster0.rkcp0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5030;
mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`) ))
.catch((error) => console.log(error.message) );


