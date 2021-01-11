import { celebrate, Joi, Segments } from "celebrate";
import { auth_user } from "./AuthController.js";
import express from "express";

const router = express.Router()

router.post('/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required().regex(/^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)+$/i),
            password: Joi.string().required()
        })
    }),
    auth_user
)

export default router;