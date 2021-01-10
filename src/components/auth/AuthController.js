import jsonwebtoken from "jsonwebtoken";
import { compare } from "bcrypt";
import { readFile } from "fs";
import { promisify } from "util";

const readFileAwaitable = promisify(readFile)

export async function auth_user(req, res, next){
    try {
        // TODO: Alterar para consulta em DB
        const users_file = await readFileAwaitable('./src/config/users.json');
        const users_list = JSON.parse(users_file.toString());

        let user = null;
        for (let i = 0; i < users_list['users'].length; i++) {
            const element = users_list['users'][i];
            if(element.email == req.body.email)
                user = element;
        }

        if (user && await compare(req.body.password, user.password)){
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
                "message": "Unauthorized user"
            })
        }
    } catch (error) {
        return next(error);
    }
};