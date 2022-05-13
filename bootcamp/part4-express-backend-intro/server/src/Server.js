require( 'colors' );
const express = require( 'express' );
const path = require('path');

const { DataBase } = require('./config/DataBase');
const { endPoints } = require( './config/endPoints' );
const { ErrorHandler } = require('./middlewares/ErrorHandler');
const { NotFound } = require('./middlewares/NotFound');
const { NotesRouter } = require('./routes/Notes.Routes');

class Server {
    constructor () {
        this.settings();
        this.middlewares();
        this.staticFiles();
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
        this.app.use( endPoints.notes, NotesRouter );
        this.app.use( ErrorHandler );
        this.app.use( '*', NotFound );
    }

    staticFiles () {
        this.app.use( '/public' ,express.static( path.join( __dirname , '/public' ) ) );
    }

    async start () {
        try {
            const database = new DataBase();
            console.clear();
            await this.app.listen( this.app.get( 'port' ) );
            console.log( `===========================`.cyan );
            console.log( `Server started on port ${ this.app.get( 'port' ) }`.red );
            await database.connectMe();  
            console.log( `===========================`.cyan );
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

module.exports = {
    Server,
}