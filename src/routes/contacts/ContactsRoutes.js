import { celebrate, Joi, Segments } from "celebrate";
import { add_contacts } from "./ContactsController.js";
import express from "express";
const router = express.Router()

router.get('/', async (req, res, next) => {
    res.json([
            'oi'
    ]);
})

router.post('/',
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
    add_contacts
);

export default router;