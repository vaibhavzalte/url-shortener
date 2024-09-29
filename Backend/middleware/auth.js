// import {getUser} from '../services/auth.js'

export async function restrictToLoggedInUserOnly(req,res,next){
    console.log("auth middleware",req)
    const userId=req.cookies?.uid;
    console.log(userId,"this is user id");
    if(!userId) return res.json({myerr:"uid not found"});


    const user=getUser(userId);
    if(!user) return res.json({myerr:"loginErr"})

    // req.user=user;
    next();
}