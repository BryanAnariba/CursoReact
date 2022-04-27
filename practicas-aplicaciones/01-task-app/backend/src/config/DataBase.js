const { connect } = require( 'mongoose' );

class DataBase {
    connectMe = async () =>  {
        try {
            await connect( process.env.MONGO_ATLAS );
            console.log( `MongoDB is connected.` )
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

module.exports = {
    DataBase,
}