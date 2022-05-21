const { request, response } = require( 'express' );
const asyncHandler = require( 'express-async-handler' );
const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcryptjs' );

const UserModel = require( '../models/User' );
const User = require('../models/User');

class AuthController {
    login = asyncHandler( async ( req = request, res = response ) => {
        const { email, password } = req.body;
        try {
            // Check for user email
            const user = await User.findOne( { email: email } );

            if ( user && ( await bcrypt.compare( password, user.password ) ) ) {
                return res.status( 200 ).json( {
                    status: 200,
                    data: {
                        email: user.email,
                        name: user.name,
                        uid: user._id,
                        token: this.generateToken( user._id )
                    }
                });
            } else {
                res.status( 400 )
                throw new Error( 'Invalid Credentials.' )
            }
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    signUp = asyncHandler( async ( req = request, res = response ) => {
        const { name, email, password } = req.body;
        if ( !email || !name || !password ) {
            res.status( 400 )
            throw new Error( `Please add all fields: Email, Name and Password.` )
        }
        try {
            // Check if user exists
            const userExists = await UserModel.findOne( { email: email } );
            if ( userExists ) {
                res.status( 400 )
                throw new Error( `The User ${ userExists.email } already exists in data base.` );
            }

            // Hashing key
            const salt = await bcrypt.genSalt( 10 );
            const hashedPassword = await bcrypt.hash( password, salt );

            // Create User
            const user = await UserModel.create({
                name: name,
                email: email,
                password: hashedPassword
            });

            if ( user ) {
                return res.status( 201 ).json( { status: 200, data: { 
                    name: user.name, 
                    email: user.email,
                    _id: user._id,
                    message: 'Created Successfully.' },
                    token: this.generateToken( user._id )
                });
            } else {
                res.status( 400 )
                throw new Error( 'Invalid user data' );
            }
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    getMe = asyncHandler( async ( req = request, res = response ) => {
        const { _id, name, email } = await User.findById( req.user.id );
        try {
            return res.status( 200 ).json( { status: 200, data: { id: _id, name, email } });
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    generateToken = ( id ) => {
        return jwt.sign( { id: id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
    }
}

module.exports = {
    AuthController
};

// 40