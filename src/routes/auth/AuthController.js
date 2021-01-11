import jsonwebtoken from "jsonwebtoken";
import { compare } from "bcrypt";
import { users } from "../../users/AllUsers.js";

export class AuthController{
    constructor() {}

    async auth_user(req, res, next){
        try {
            if( (req.body.email in users) && (await compare(req.body.password, users[req.body.email].password)) ){
                const token = jsonwebtoken.sign({
                    email: req.body.email
                }, process.env.JWT_SECRET, {
                    issuer: req.body.email,
                    algorithm: "HS256",
                    expiresIn: 5 * 60,
                });
            
                res.json({
                    'type': "Bearer",
                    'token': token
                });
            }
            else{
                res.status(401).json({
                    "message": "Invalid credentials"
                })
            }
        } catch (error) {
            return next(error);
        }
    };
}