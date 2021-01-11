import { users } from "../users/AllUsers.js";

/***
 * Checks if the user parsed from the JWT is valid in the AllUsers mapping
 */
export function check_credentials(req, res, next) {
    if (!(req.user.email in users)) {
        res.status(401).json({
            "message": "Invalid credentials"
        })
    }
    else{
        next()
    }
}