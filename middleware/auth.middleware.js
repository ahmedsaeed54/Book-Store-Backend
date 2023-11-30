const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try{
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        if(!token){
            return res.status(403).send("Access Denied")
        }
        const decodedToken = jwt.verify(token,"fuck")
        console.log(decodedToken);
        req.user = decodedToken
        next();
    }
    catch(err){
        console.log(err);
        return res.status(400).send("invalid token")
    }
}