require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('./config/mongoose.config')(process.env.DB_NAME);
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000',}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require('./routes/pirate.routes')(app);
require('./routes/user.routes')(app); 

    
app.listen(process.env.DB_PORT, () => console.log(`Got my ear on port: ${process.env.DB_PORT}`) );