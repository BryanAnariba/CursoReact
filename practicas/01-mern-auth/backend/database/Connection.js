const mongoose = require( 'mongoose' );

const connectMe = async () => {
    return await mongoose.connect( process.env.MONGODB );
}

module.exports = {
    connectMe
}