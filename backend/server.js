const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser=require('body-parser');
const mongoose=require('./config/connection');
const userapis = require('./routes/users');
let PORT = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/user', userapis);

app.get('/', (req, res)=>{
  res.send('hey');
})

app.listen(PORT, 'localhost', (req, res)=>{

  console.log(`Server starting at ${PORT}`);
})
