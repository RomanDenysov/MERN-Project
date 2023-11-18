const jwt = require('jsonwebtoken');

//TOKEN CONTROLL GLOBAL
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            return next()
        })
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};
// TOKEN CONTROLL FOR USER
const verifyTokenAuthorization = async (req, res, next) => {
    await verifyToken(req,res,() => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            return next()
        } else {
            return res.status(403).json("You are not alowed to do that!")
        }
    })
};
// ADMIN CONTROLL
const verifyTokenAndAdmin = async (req, res, next) => {
    await verifyToken(req,res,() => {
        if(req.user.isAdmin){
            return next()
        } else {
            return res.status(403).json("You are not alowed to do that!")
        }
    })
};

module.exports = { 
    verifyToken,
    verifyTokenAuthorization,
    verifyTokenAndAdmin
};