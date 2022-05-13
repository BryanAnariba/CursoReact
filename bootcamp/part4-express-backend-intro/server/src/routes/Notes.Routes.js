const { Router } = require( 'express' );
const { NoteController } = require('../controllers/NoteController');

const router = Router();
const NotesCTRL = new NoteController();

router.get( '', NotesCTRL.getAllNotes );

router.get( '/:noteId', NotesCTRL.getOneNote );

router.post( '', NotesCTRL.createNote );

router.put( '/:noteId', NotesCTRL.updateOneNote );

router.delete( '/:noteId', NotesCTRL.deleteOneNote );

module.exports = {
    NotesRouter: router,
}