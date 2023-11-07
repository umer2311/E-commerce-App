const express = require('express');
const router=express.Router();
const upload=require('../middleware/upload')
const product=require('../controllers/products')

router.post("/createProduct",upload.array('images',10), product.createProduct);
router.get("/getAllProducts", product.getAllProducts);
router.get("/getProductByid/:id", product.getProductById);
router.delete("/deleteProduct/:id", product.deleteProduct);
router.put("/updateProduct/:id",upload.array('images[]'), product.updateProduct);

module.exports=router;