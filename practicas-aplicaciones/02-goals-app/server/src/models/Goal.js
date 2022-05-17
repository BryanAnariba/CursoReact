const { Schema, model } = require( 'mongoose' );

const GoalSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [ true, 'Please add text field' ]
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model( 'Goal', GoalSchema );