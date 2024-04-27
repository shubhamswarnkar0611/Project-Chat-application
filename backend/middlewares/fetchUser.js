const jwt = require("jsonwebtoken")
const JWT_SECRETE = "$ecreteHai";

exports.fetchUserByToken = (req,res,next)=>{
    // const token=req.rawHeaders[1]
    const{token}=req.body
    console.log(req.body)
    if (!token) {
        res.status(401).send( "please authentiacate using availd token" );
      }
      try {
        const data = jwt.verify(token, JWT_SECRETE);
        
        req.user = data;
    
        next();
    
      } catch (err) {
        res.status(401).send( "error in verifying the token" );
      }
}
