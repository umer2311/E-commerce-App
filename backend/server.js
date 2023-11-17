const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser=require('body-parser');
const mongoose=require('./config/connection');
const userapis = require('./routes/users');
const productApi = require('./routes/products');
const stripe = require('stripe')('sk_test_51OCyibJEJIMalrXDkrCpgmlkZFYn6j9UMp5Piq7ge6ns2xRJg0IRxtQl1m57XQLRPAbO84HvzHrvDTaPDUa74Gjo00nZPca2QK');
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
const YOUR_DOMAIN = 'http://localhost:3500';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(PORT, 'localhost', (req, res)=>{

  console.log(`Server starting at ${PORT}`);
})





