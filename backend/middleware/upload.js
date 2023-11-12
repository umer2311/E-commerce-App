const path=require('path');
const multer=require('multer')
let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

let upload =multer({
    storage:storage,
    
    fileFilter:function(req,file,callback){
        if(file.mimetype == "image/png"||file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")
        {
            console.log("sss")
            callback(null,true)
        }
        else
        {
            console.log("only png and jpg format")
            callback(null,false)
            console.log("aaa")
        }
    },
    limits:{
        fileSize:1024*1024*6
    }
})
module.exports = upload