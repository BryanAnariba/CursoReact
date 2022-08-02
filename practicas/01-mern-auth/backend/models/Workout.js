const mongoose = require( 'mongoose' );

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Title is required' ]
    },
    reps: {
        type: Number,
        required: [ true, 'Repetitions are required' ]
    },
    load: {
        type: Number,
        required: [ true, 'Loads are required' ]
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model( 'Workout', workoutSchema );