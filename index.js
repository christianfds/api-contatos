import express from "express";
import jwt from "express-jwt";
import morgan from "morgan";
import auth from "./routes/auth.js";
import contatos from "./routes/contatos.js";

const app = express();

// Utiliza o morgan para gerar logs
app.use(morgan('combined'));

// Configuração do jwt
app.use(
    jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })
    .unless({
        path: '/auth'
    })
    , async (err, req, res, next) => {
        res.status(err.status).json({
            'message': err.message
        });
    }
);


// Rotas
app.use('/contatos', contatos);
app.use('/auth', auth);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});