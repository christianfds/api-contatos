import { users } from "../../users/AllUsers.js";

export class ContactsController{
    constructor(){ }

    async get_contact(req, res, next) {
        try {
            let handler = new users[req.user.email].handler();
            let result = await handler.get_single(req.params.id);

            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async get_contacts(req, res, next) {
        try {
            let handler = new users[req.user.email].handler();
            let result = await handler.get_all();

            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async add_contacts(req, res, next) {
        try {
            let handler = new users[req.user.email].handler();
            await handler.insert(req.body.contacts);

            res.json({
                'message': 'Success'
            })
        } catch (error) {
            next(error)
        }
    }
}