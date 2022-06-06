import mongoose from 'mongoose';
import 'colors';
class Connection {
    connectMe () {
        mongoose.connect( process.env.MONGO_ATLAS )
        .then(( conn ) => {
            console.log( `MongoDB is connected at port: ${ conn.connection.host }` ) ;
            console.log( '====================================================================='.red );
        })
        .catch(( err ) => {
            throw new Error( `Error: ${ err }` );
        })
    }
}

export {
    Connection,
}