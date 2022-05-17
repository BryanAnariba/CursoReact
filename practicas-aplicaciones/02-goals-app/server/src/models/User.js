const { model, Schema } = require( 'mongoose' );

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'User Name is required' ]
    },
    email: {
        type: String,
        required: [ true, 'Email User is required' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    }

},{
    timestamps: true,
    versionKey: false
});

module.exports = model( 'User', userSchema );