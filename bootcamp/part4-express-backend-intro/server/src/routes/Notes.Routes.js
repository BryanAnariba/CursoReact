const { Router } = require( 'express' );

const router = Router();
router.get( '', ( req, res ) => {
    return res.status( 200 ).json( { data: 'note api get works' } )
});

//38

module.exports = {
    NotesRouter: router,
}