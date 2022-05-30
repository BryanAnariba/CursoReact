import express from 'express';
//import path from 'path'; 
import cors from 'cors';
import 'colors';
import { AuthRoutes } from './routes/auth.routes.js';
import { endPoints } from './config/endPoints.js';

class Server {
    constructor () {
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app = express();
        this.app.set( 'PORT', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        // this.app.get( '', ( req = request, res = response ) => {
        //     return res.status( 200 ).json( { status: 200, data: "Server is running" } );
        // });
        this.app.use( endPoints.auth, AuthRoutes );
    }  

    staticFiles () {
        //this.app.use( '/public' ,express.static( path.join( __dirname , '/public' ) ) );
    }

    start () {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.clear();
            console.log( '====================================================================='.red );
            console.log( `Server started on port ${ this.app.get( 'PORT' ) }`.cyan );
        });
    }
}

export {
    Server,
}