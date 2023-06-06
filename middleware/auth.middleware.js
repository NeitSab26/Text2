const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

module.exports.checkUser = (req,res, next) =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) =>{
            if(err){
                res.locals.user = null;
                res.cookie("jwt","", {maxAge: 1});
                console.log("ça marche pas le middleware");
                next();
            }else{
                let user = await UserModel.findByPk(decodedToken.userId);
                res.locals.user = user
                // console.log(user);
                console.log('token décodé :' + decodedToken.userId );
                // console.log(res.locals.user);
                next();
            }
        })
    }else{
        res.locals.user = null
        next();
    }
}
module.exports.requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt
    if(token){
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) =>{
        if(err){
            console.log('il arrive pas à décoder le token ' + err);
            res.send(200).json('no token ')
        }else{
            console.log("dede "+decodedToken.userId);
            res.status(200).json({ message: decodedToken, error: decodedToken.userId });

            next();
        }
    });
  }else{
    console.log("pas de token");
  }
}