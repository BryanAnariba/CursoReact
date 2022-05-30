import { request, response } from 'express'
import { validationResult } from 'express-validator';

class AuthController {
    login = ( req =request, res = response ) => {
        const { email, password } = req.body;
        return res.status( 200 ).json( {
            status: 200,
            data: {
                email,
                password
            }
        });
    }

    register = ( req =request, res = response ) => {
        const { email, password, name } = req.body;
        return res.status( 200 ).json( {
            status: 200,
            data: {
                email,
                password,
                name
            }
        });
    }
}

export {
    AuthController,
}