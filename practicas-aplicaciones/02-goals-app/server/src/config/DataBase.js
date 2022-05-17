const { connect } = require( 'mongoose' );

class DataBase {
    connectMe () {
        connect( process.env.MONGO_ATLAS )
        .then( conn => { 
            console.log( `MongoDB is connected at port: ${ conn.connection.host }` ) ;
            console.log( `===========================`.cyan );
        })
        .catch( err => {
            throw new Error( `Error: ${ err }` ) ;
        });
    }
}
module.exports = {
    DataBase
}