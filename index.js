import express from "express";
import contatos from "./routes/contatos.js";

const app = express();

app.use('/contatos', contatos)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});