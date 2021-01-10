import { isCelebrateError } from "celebrate";

export function unhandled_error(err, req, res, next) {
    if(!isCelebrateError(err)){
        console.error(err);

        res.status(500).json({
            message: "Internal Error"
        })
    }
}