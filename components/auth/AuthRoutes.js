import { celebrate, Joi, Segments } from "celebrate";
import { auth_user } from "./AuthController.js";
import express from "express";

const router = express.Router()

router.post('/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }),
    auth_user
)

export default router;