const mongoose = require( 'mongoose' );
class DataBase {
    async connectMe () {
        try {
            await mongoose.connect( process.env.MONGO_ATLAS );
            console.log( `MongoDB is connected` );
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

module.exports = {
    DataBase,
}