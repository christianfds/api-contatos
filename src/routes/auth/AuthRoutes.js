import { celebrate, Joi, Segments } from "celebrate";
import { AuthController } from "./AuthController.js";
import express from "express";

const router = express.Router();
const controller = new AuthController();

router.post('/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required().regex(/^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)+$/i),
            password: Joi.string().required()
        })
    }),
    controller.auth_user
)

export default router;