import { isCelebrateError } from "celebrate";

export function celebrate_error(err, req, res, next) {
    if (isCelebrateError(err)) {
        console.error(err);

        let error_object = {
            message: 'Internal Error'
        }

        if (err.details.get('params')){
            error_object.message = err.details.get('params').details[0].message;
        } 
        else if (err.details.get('body')){
            error_object.message = err.details.get('body').details[0].message;
        }
        
        res.status(400).json(
            error_object
        );
    }
    else{
        next();
    }
}