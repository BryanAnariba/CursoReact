const { request, response } = require( 'express' )
const  NoteModel = require( '../models/Notes' );

class NoteController {
    async getAllNotes ( req = request, res = response, next ) {
        const { skip = 0, limit = 10 } = req.query;
        try {
            const notes = await NoteModel.find().skip( skip ).limit( limit );
            if ( !notes || notes.length === 0 ) {
                return res.status( 200 ).json( { status: 200, data: 'Notes not found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: notes } );
            }
        } catch ( err ) {
            return next( err );
            //return res.status( 400 ).json( { status: 400, data: err } );
        }
    }

    async getOneNote ( req = request, res = response, next ) {
        const { noteId } = req.params;
        try {
            const note = await NoteModel.find( { _id: noteId } );
            if ( !note || note.length === 0 ) {
                return res.status( 200 ).json( { status: 200, data: 'Note not found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: note[0] } );
            }
        } catch ( err ) {
            return next( err );
            //return res.status( 400 ).json( { status: 400, data: err } );
        }
    }

    async createNote ( req = request, res = response, next ) {
        const { content, important = false } = req.body;
        const note = new NoteModel({
            content: content,
            data: new Date().toISOString
        });

        try {
            const noteSaved = await note.save()
            return res.status( 201 ).json( { status: 201, data: noteSaved } );
        } catch ( err ) {
            return next( err );
            //return res.status( 400 ).json( { status: 400, data: err } );
        }
    }

    async updateOneNote ( req = request, res = response, next ) {
        const { content, important = false } = req.body;
        const { noteId } = req.params;
        try {
            const noteUpdated = await NoteModel.findOneAndUpdate( { _id: noteId }, {
                content: content,
                important: important
            }, { new: true });
            return res.status( 200 ).json( { status: 200, data: noteUpdated } );
        } catch ( err ) {
            return next( err );
            //return res.status( 400 ).json( { status: 400, data: err } );
        }
    }

    async deleteOneNote ( req = request, res = response, next ) {
        const { noteId } = req.params
        try {
            const note = await NoteModel.find( { _id: noteId } );
            if ( !note ) {
                return res.status( 200 ).json( { status: 200, data: 'Note Not Found' } );
            } else {
                const noteUpdated = await NoteModel.findOneAndUpdate( { _id: noteId }, {
                    important: !note[0].important
                });
                return res.status( 200 ).json( { status: 200, data: noteUpdated } );
            }
        } catch ( err ) {
            return next( err );
            //return res.status( 400 ).json( { status: 400, data: err } );
        }
    }
}

module.exports = {
    NoteController,
}