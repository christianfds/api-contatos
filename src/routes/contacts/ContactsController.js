import { readFile } from "fs";
import { promisify } from "util";
import { users } from "../../users/AllUsers.js";


const readFileAwaitable = promisify(readFile)

export async function add_contacts(req, res, next){
    try {
        let handler = null;
        if (!(req.user.email in users)){
            res.status(401).json({
                "message": "Unauthorized user"
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