import { Router }from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { body } from 'express-validator';

import { validationsErrors } from '../middlewares/validationErrors.js';

const router = Router();
const authController = new AuthController();

router.post( 
    '/register',
    [
        body( 'email', 'Invalid Email' )
            .trim()
            .isEmail()
            .normalizeEmail(),
        body( 'password', 'Invalid Password' )
            .trim()
            .isLength({ min: 6 })
            .custom(( value, { req } ) => {
                if ( value !== req.body.repeatPassword ) {
                    throw new Error( 'Passwords do not match' );
                }
                return value;
            })
    ],
    validationsErrors,
    authController.register 
);

router.post( 
    '/login', 
    [
        body( 'email', 'Invalid Email' )
            .trim()
            .isEmail()
            .normalizeEmail(),
        body( 'password', 'Invalid Password' )
            .trim()
            .isLength({ min: 6 })
    ],
    validationsErrors,
    authController.login );

export {
    router as AuthRoutes
};