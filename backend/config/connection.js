const db= require('mongoose');
const url=process.env.url;

db.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("db connected");
}).catch((error)=>
{
    console.log({error:error.message})
})

module.exports=db;