const express = require('express'),
  cors = require('cors')
  app = express(),
  routesUtilisateur = require('./routes/user.routes'),
  routesMessage = require('./routes/message.routes'),
  routesPost = require('./routes/post.routes'),
  routesAbo = require('./routes/abonner.routes'),
  routesComm= require('./routes/commentaire.routes'),
  routesSCom= require('./routes/scommentaire.routes'),
  routesLike= require('./routes/like.routes')
require('./db.js')
require('dotenv').config({ path: './config/.env' });
const {checkUser , requireAuth} = require("./middleware/auth.middleware")
const moment = require('moment-timezone');
const cookieParser = require("cookie-parser");
moment.tz.setDefault('Europe/Paris');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

//jwt

app.get('*',checkUser);

app.get("/jwtid", requireAuth)
//routes
app.use(express.json())
app.use('/user', routesUtilisateur);
app.use('/message',routesMessage);
app.use('/post',routesPost);
app.use('/abo',routesAbo);
app.use('/comm',routesComm);
app.use('/scom',routesSCom);
app.use('/like',routesLike);
//serveur
app.listen(process.env.PORT, () => {
  console.log(`écouté sur le port http://localhost:${process.env.PORT}`);
})
