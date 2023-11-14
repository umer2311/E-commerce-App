const express = require('express');
const router = express.Router();
const cart= require('../controllers/cart');


router.post('/addToCart', cart.addToCart)
router.get('/fetchCartByUser', cart.fetchCartByUser)
router.delete('/deleteFromCart/:id', cart.deleteFromCart)
router.patch('/updateCart/:id', cart.updateCart)

module.exports=router;