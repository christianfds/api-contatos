import jsonwebtoken from "jsonwebtoken";

export async function auth_user(req, res, next){
    try {
        // TODO: Verificação dinâmica de uma lista de usuários possíveis, realizar checagem no DB
        if(req.body.email == "christianfranchin@gmail.com" && req.body.password == "12345"){
            const token = jsonwebtoken.sign({
                email: req.body.email
            }, process.env.JWT_SECRET, {
                issuer: "1",
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
        return next(error)
    }
};