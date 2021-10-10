const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const middlewares = require('./middlewares/index')


const app = express();
const mongodbURI = process.env.MONGODB_URI;



app.set('view engine','ejs');
app.set('views', 'views');



app.listen(3000);


mongoose.connect( mongodbURI )
.then(() => console.log("connection to mongodb cluster established"))
.then(() => app.use(middlewares))
.catch( (err) => console.log(err));