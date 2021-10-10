const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const middlewares = require('./middlewares/index')


const app = express();
const mongodbURI = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.set('views', 'views');



app.listen(port);


mongoose.connect( mongodbURI )
.then(() => console.log("connection to mongodb cluster established", `Running on port: ${port}`))
.then(() => app.use(middlewares))
.catch( (err) => console.log(err));