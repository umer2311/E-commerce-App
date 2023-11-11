const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser=require('body-parser');
const mongoose=require('./config/connection');
const userapis = require('./routes/users');
const productApi = require('./routes/products');

let cors = require('cors')

let PORT = process.env.PORT || 3500;
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));
app.use(express.json())
app.use('/user', userapis);
app.use('/userProduct', productApi);

app.get('/', (req, res)=>{
  res.send('hey');
})

app.listen(PORT, 'localhost', (req, res)=>{

  console.log(`Server starting at ${PORT}`);
})
