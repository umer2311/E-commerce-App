const jwt=require("jsonwebtoken");

const checkRole = (role) => {
return (req,res,next)=>{
    try {
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        let token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Access Denied , token missing"})
        }
    
        jwt.verify(token,process.env.PRIVATE_KEY,(err, user)=>{
            if(err){
                return res.status(403).json({message:"token not valid"})
            }
           // req.user=user;
        
            if (role.includes(user.role)) {
            next()
            }
            else
            {
              return  res.status(404).json({message:"You are not authorized"})
            }
        }) 
    } catch (error) {
        res.status(500).json("Internal server Error")
    }
}
}

module.exports=checkRole