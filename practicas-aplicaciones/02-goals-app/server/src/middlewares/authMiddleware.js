const { request, response } = require( 'express' );
const jwt = require( 'jsonwebtoken' );
const asyncHandler = require( 'express-async-handler' );

const User = require( '../models/User' );


const protect = asyncHandler( async ( req = request, res = response, next ) => {
    let token;
    if ( req.headers.authorization && req.headers.authorization.startsWith( 'Bearer' ) ) {
        try {
            // Get Token form headers
            token = req.headers.authorization.split( ' ' )[1];

            // Verify token
            const decodedToken = jwt.verify( token, process.env.JWT_SECRET );

            // Get user from token
            req.user = await User.findById( decodedToken.id ).select( '-password' );
            next();
        } catch ( err ) {
            res.status( 401 )
            throw new Error( 'Not Authorize' );
        }
    }

    if ( !token ) {
        res.status( 401 )
            throw new Error( 'Not Authorize: not token' );
    }
});

module.exports = {
    protectRoutes: protect,
};