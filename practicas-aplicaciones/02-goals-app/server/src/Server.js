require( 'colors' );
const express = require( 'express' );
const path = require( 'path' ); 
const cors = require( 'cors' );

const { DataBase } = require( './config/DataBase' );
const { EndPoints } = require( './config/EndPoints' );
const { GoalRoutes } = require( './routes/GoalRoutes' );
const { errorHandler } = require('./middlewares/errorMessages');
const { AuthRoutes } = require('./routes/AuthRoutes');

class Server {
    constructor () {
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app = express();
        this.app.set( 'port', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        this.app.use( EndPoints.goals, GoalRoutes );
        this.app.use( EndPoints.auth, AuthRoutes );
        this.app.use( errorHandler );
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
            
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

module.exports = {
    Server,
}