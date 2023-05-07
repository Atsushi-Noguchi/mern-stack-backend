const jwt = require("jsonwebtoken");
const secret_key = "mern-market";

const auth = async(req, res, next) => {
    if(req.method === "GET"){
        return next();
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vZ3VhdHUuY29tIiwiaWF0IjoxNjgzNDMzNzEyLCJleHAiOjE2ODM1MTY1MTJ9.qlt2Y5WNMj8-Effqfi9qGwYRXcoYc-1m7q6R8wY12W8"
    // await req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(400).json({message: "トークンがありません"});
    }

    try{
        const decoded = jwt.verify(token, secret_key);
        req.body.email = decoded.email;
        return next();
    }catch(err){
        return res.status(400).json({message: "トークンが正しくないので、ログインしてください"})
    }
}

module.exports = auth;