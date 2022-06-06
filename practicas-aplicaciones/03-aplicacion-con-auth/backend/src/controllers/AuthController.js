import { request, response } from 'express';
import { generateToken } from '../helpers/tokenManager.js';

import { User } from '../models/User.js';

class AuthController {
    login = async ( req =request, res = response ) => {
        const { email, password } = req.body;
        try {
            // Search the user by email how to param to the query
            let theUserExist = await User.findOne({ email: email });

            // If not user exists
            if ( !theUserExist ) return res.status( 400 ).json( { status: 400, data: 'The email does not exist.' } );

            // Verify Password
            const isPasswordsMatch = await theUserExist.comparePassword( password );
            if ( !isPasswordsMatch ) return res.status( 400 ).json( { status: 400, data: 'Incorrect Password.' } );

            // Create token
            const payload = { uid: theUserExist._id };
            const token = generateToken( payload );
            return res.status( 200 ).json({ status: 200, data: token });
        } catch ( err ) {
            return res.status( 400 ).json( {
                status: 400,
                data: err
            });
        }
    }

    register = async ( req =request, res = response ) => {
        const { email, password, name } = req.body;
        try {
            // Verify if user exists
            const emailExist = await User.findOne({ email: email });
            if ( emailExist ) throw { code: 11000 };

            // if email does not exists, create the user
            let newUser = new User({
                email,
                password,
                name
            });

            await newUser.save();
            const token = generatToken( { uid: newUser._id } );
            return res.status( 200 ).json({ status: 200, data: token});
        } catch ( err ) {
            if ( err.code === 11000 ) {
                return res.status( 400 ).json( {
                    status: 400,
                    data: 'Email already exists.'
                });
            } else {
                return res.status( 400 ).json( {
                    status: 400,
                    data: err
                });
            }
        }
    }

    infoUser = async ( req = request, res = response ) => {
        try {
            const userData = await User.findOne( { _id: req.uid } ).lean();
            if ( !userData ) {
                throw new Error( 'The user does not exists' )
            }
            return res.status(200).json( { status: 200, data: {
                name: userData.name,
                email: userData.email
            } } );
        } catch ( error ) {
            return res.status( 400 ).json( {
                status: 400,
                data: error.message
            }); 
        }
    }
}

export {
    AuthController,
}