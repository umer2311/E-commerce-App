const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    
      name: {
        type: String,
        required: true,
      },
      company: { 
        type: String,
        required: true,
      },
      categories: {  
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        required: true,
        default: 0,
      },
      description: {
        statement: {
          type: String,
          //required: true,
          default:"abc"
        },
        size: {
          type: String,
          //required: true,
          default:"0g"
        },
        origin: {
          type: String,
         // required: true,
         default:"pakistan"
        },
      },
      price: {  
        type: Number,
        required: true,
        default: 0,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
      images: {
        type: String, 
        required: true,
      },
      isTrending: {    
        type: Boolean,
        default: false,
      },
      isHotSeller: {
        type: Boolean,
        default: false,
      },
      saleDiscount: {
        type: Number, 
        default: 0,
      },
      discountedPrice: {
        type: Number, 
        default: function() {
          
          return this.price - (this.price * this.saleDiscount) / 100;
        },
      },
      totalSold: {
        type: Number,
        default: 0,
      },
    });

    const Mongo = mongoose.model("Product", productSchema)
    module.exports = Mongo;