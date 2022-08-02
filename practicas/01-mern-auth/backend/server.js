require( 'dotenv' ).config();
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );
const { WorkOutRoutes } = require('./routes/WorkOuts.routes');
const { endPoints } = require('./config/endPoints');
const { connectMe } = require('./database/connection');

// Settings
const app = express();
app.set( 'PORT', process.env.PORT || 5000 );

// middlewares
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(( req, res, next ) => {
    console.log( `Request Content: ${ req.path }  ${ req.method }`.magenta );
    next();
});

// routes
app.get( '/', ( req, res ) => {
    return res.status( 200 ).json({ status: 200, data: 'Server Started' })
});
app.use( endPoints.workOut, WorkOutRoutes );

// static files

// start
connectMe()
.then(( res ) => {
    app.listen( app.get( 'PORT' ), () => {
        console.clear();
        console.log( `==============================================================`.green );
        console.log( `Server started on port: ${ app.get( 'PORT' ) }`.cyan );
        console.log( `MongoDB Connection at: ${ res.connection.host }`.cyan );
        console.log( `==============================================================`.green );
    });
})
.catch(( error ) => {
    throw new Error( `Error: ${ error }` );
});
