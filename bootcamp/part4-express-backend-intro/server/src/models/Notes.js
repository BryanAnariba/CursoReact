const { Schema, model  } = require( 'mongoose' );


const noteSchema = new Schema({
    content: {
        type: String,
        required: [ true, 'Content is required' ]
    },
    important: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
});


noteSchema.set( 'toJSON', {
    transform: ( document, returnedObject ) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = model( 'Note', noteSchema )
