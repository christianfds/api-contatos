import { users } from "../../users/AllUsers.js";

export class ContactsController{
    constructor(){ }

    async add_contacts(req, res, next) {
        try {
            let handler = null;
            if (!(req.user.email in users)) {
                res.status(401).json({
                    "message": "Invalid credentials"
                })
            }

            handler = new users[req.user.email].handler();
            await handler.insert(req.body.contacts);

            res.json({
                'message': 'Success'
            })
        } catch (error) {
            next(error)
        }
    }
}