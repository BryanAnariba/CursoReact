import { response, request } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = ( req = request, res = response, next ) => {    
    try {
        //console.log( req.headers );
        let token = req.headers.authorization;
        if ( !token ) {
            throw new Error( `The token does not exists in the headers, format token is with bearer` ) 
        }
        
        const isTokenValid = jwt.verify( token.split( ' ' )[1], process.env.KEY );

        //console.log( isTokenValid );
        req.uid = isTokenValid.uid;
        next();
    } catch ( error ) {
        const TokenVerificationErrors = {
            'invalid signature': 'The token firm is invalid',
            'jwt expired': 'The token is expired',
            'invalid token': 'The token is not valid',
            'No Bearer': 'You should to use the Format Bearer  to send the token'
        }
        return res.status( 401 ).json( { status: 401, data: TokenVerificationErrors[ error.message ] } )
    }
}