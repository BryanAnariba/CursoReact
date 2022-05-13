const NotFound = ( req, res ) => {
    return res.status( 404 ).json( { status: 404, data: 'Not Found' } );
};

module.exports = {
    NotFound,
}