import express from "express";
import jsonwebtoken from "jsonwebtoken";
const router = express.Router()

router.get('/', async (req, res, next) => {

    const token = jsonwebtoken.sign({
        email: "chris"
    }, process.env.JWT_SECRET,{
        issuer: "1",
        algorithm: "HS256",
        expiresIn: 5 * 60,
    });
    
    res.json({
        'type': "Bearer",
        'token': token
    });
})

export default router;