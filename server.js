const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

//mongoDB variables
const db = config.get('MongoURI');

//connect to MongoDB
mongoose.
connect(db,{useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true})
  .then(()=>console.log('MongoDB connected'))
  .catch(err => console.log(err));  

const port = process.env.port|| 5000;
app.listen(port,()=>console.log(`server running on port ${port}`))