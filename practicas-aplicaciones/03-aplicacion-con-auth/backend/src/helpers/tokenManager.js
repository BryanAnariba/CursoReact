import jwt from 'jsonwebtoken';

export const generateToken = ( payload ) => {
    try {
        const expiration = 60 * 15 ; // 15 Minutos
        const token = jwt.sign( 
            payload, 
            process.env.KEY, 
            { expiresIn: expiration }
        )
        return {
            token,
            expiration
        };
    } catch ( err ) {
        return res.status( 400 ).json( { status: 400, data: err } );
    }  
}