require( 'colors' );
const express = require( 'express' );

const { DataBase } = require('./config/DataBase');
const { endPoints } = require( './config/endPoints' );
const { NotesRouter } = require('./routes/Notes.Routes');

class Server {
    constructor () {
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app = express();
        this.app.set( 'port', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        this.app.get( endPoints.notes, NotesRouter );
    }

    async start () {
        try {
            const database = new DataBase();
            await this.app.listen( this.app.get( 'port' ) );
            await database.connectMe();  
            console.clear();
            console.log( `===========================`.cyan );
            console.log( `Server started on port ${ this.app.get( 'port' ) }`.red );
            console.log( `===========================`.cyan );
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

module.exports = {
    Server,
}