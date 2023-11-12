const Product =require('../models/products')

const createProduct=async(req , res,)=> {
    try {
        const {name ,company, categories ,ratings ,statement,size,origin,price ,stock , isTrending  ,isHotSeller ,saleDiscount ,discountedPrice,  totalSold}=req.body;
        console.log(origin)
        const product= new Product({
            name ,company, categories ,ratings,
            description:{
                statement,
                size,
                origin
            }
            ,price ,stock , isTrending  ,isHotSeller ,saleDiscount ,discountedPrice,  totalSold
        })
        console.log("umer")
        console.log(req.files)
        if(req.files)
        {
            console.log("nawaz")
            let path='';
            req.files.forEach(function(files,index,arr){
                path=path+files.path+',';
                
            });
            console.log("231")
            path=path.substring(0,path.lastIndexOf(","))
            product.images=path
        }
        await product.save()
        res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getAllProducts=async(req,res)=> {
    try{
    const product = await Product.find()
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getProductById=async(req , res)=> {
    try{
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getByCategory=async(req , res)=> {
    try{
        const {category}=req.params;
    let product = await Product.find({categories:category})
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getByPrice=async(req , res)=> {
    try{
        const {price}=req.params;
    let product = await Product.find({price:price})
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getByRating=async(req , res)=> {
    try{
        const {rating}=req.params;
    let product = await Product.find({ratings:rating})
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getByBrand=async(req , res)=> {
    try{
        const {brand}=req.params;
    let product = await Product.find({company:brand})
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getTrendingProduct=async(req , res)=> {
    try{
        const product=await Product.find({isTrending:'1'})
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteProduct=async(req , res)=> {
    try{
    let product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        return res.status(404).json({message:"Product NOT FOUND"})
    }
    res.json({message:" Product delete successful"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateProduct=async(req , res)=> {
    try{
        const {name ,company, categories ,ratings ,description ,price ,stock , isTrending  ,isHotSeller ,saleDiscount ,discountedPrice,  totalSold}=req.body;
    let product = await Product.findByIdAndUpdate(req.params.id,{name ,company, categories ,ratings ,description ,price ,stock , isTrending  ,isHotSeller ,saleDiscount ,discountedPrice,  totalSold},{new:true})
    if(!product){
        return res.status(404).json({message:"user NOT FOUND"})
    }
    if(req.files)
        {
            let path='';
            req.files.forEach(function(files,index,arr){
                path=path+files.path+',';
                
            });
            path=path.substring(0,path.lastIndexOf(","))
            product.images=path
        }
    res.json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getProductById,
    getTrendingProduct,
    getByCategory,
    getByPrice,getByRating,getByBrand
}