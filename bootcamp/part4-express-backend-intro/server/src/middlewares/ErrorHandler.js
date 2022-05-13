const ErrorHandler = (err, req, res, next) => {
    if ( err.name == 'CastError' ) {
        return res.status( 400 ).json( { status: 400, data: 'Id use is malformed' } );
    } else {
        return res.status( 400 ).json( { status: 400, data: err } );
    }
}

module.exports = {
    ErrorHandler
}