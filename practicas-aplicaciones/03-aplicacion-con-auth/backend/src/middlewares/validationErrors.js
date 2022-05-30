import { request, response } from 'express';
import { validationResult } from 'express-validator';

const validationsErrors = ( req = request, res = response, next ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status( 400 ).json({
            status: 400,
            data: errors.array(),
        });
    }
    next();
}

export {
    validationsErrors,
}