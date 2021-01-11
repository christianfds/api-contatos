import { celebrate, Joi, Segments } from "celebrate";
import { ContactsController } from "./ContactsController.js";
import { check_credentials } from "../../middleware/CheckCredentials.js";
import express from "express";

const router = express.Router();
const controller = new ContactsController();

router.post('/',
    check_credentials,
    celebrate({
        [Segments.BODY]: 
        Joi.object().keys({
            contacts: Joi.array().items(
                Joi.object().keys({
                    name: Joi.string().required(),
                    cellphone: Joi.string().required().regex(/^[0-9]{13}$/i)
                })
            )
        })
    }),
    controller.add_contacts
);

export default router;