import express from "express";
import jwt from "express-jwt";
import morgan from "morgan";
import {errors} from "celebrate";
import bodyParser from "body-parser";
import auth from "./routes/auth/AuthRoutes.js";
import contacts from "./routes/contacts/ContactsRoutes.js";
import {unhandled_error} from "./middleware/InternalError.js";

const app = express();

process.env.PORT = process.env.PORT || 5000;
process.env.JWT_SECRET = process.env.JWT_SECRET || 'batata';

// Utiliza o morgan para gerar logs
app.use(morgan('combined'));

// Configuração do jwt
app.use(
    jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })
    .unless({
        path: '/auth'
    })
    , (err, req, res, next) => {
        res.status(err.status).json({
            'message': err.message
        });
    }
);

// Parse do body para o formato json
app.use(bodyParser.json())

// Rotas
app.use('/contacts', contacts);
app.use('/auth', auth);

// Errors capturados pelo celebrate
app.use(errors());
// Erros inesperados
app.use(unhandled_error);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});