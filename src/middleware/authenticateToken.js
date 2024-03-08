const JWT = require("jsonwebtoken");


const authenticateToken = async (req, res, next) => {

    const authHeader = req.headers['authorization'];

    const authToken = authHeader && authHeader.split(" ")[1];

    if(!authToken) return res.sendStatus(401);

    JWT.verify(authToken, process.env.JWT_SECRET, (error, user) => {
        if(error) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;