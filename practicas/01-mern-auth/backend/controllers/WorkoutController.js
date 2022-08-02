const { request, response } = require( 'express' );
const workoutModel = require( '../models/Workout' );
const mongoose = require( 'mongoose' );

const save = async ( req = request, res = response ) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await workoutModel.create({
            title, reps, load
        });

        return res.status( 201 ).json({
            status: 201,
            data: workout
        })
    } catch ( error ) {
        return res.status( 400 ).json( { status: 400, data: error.message } );
    }
}

const getAll = async ( req = request, res = response ) => {
    try {
        const workouts = await workoutModel.find().sort({ createdAt: -1 });
        return res.status( 200 ).json({ status: 200, data: workouts });
    } catch ( error ) {
        return res.status( 400 ).json( { status: 400, data: error.message } );
    }
}

const getOne = async ( req = request, res = response ) => {
    const { workoutId } = req.params;
    try {
        if ( !mongoose.Types.ObjectId.isValid( workoutId ) ) {
            throw new Error( `Invalid workout Code` );
        } 
        const workout = await workoutModel.find({ _id: workoutId });
        if ( !workout[0] ) {
            return res.status( 200 ).json({ status: 200, data: 'No such workout' });    
        }
        return res.status( 200 ).json({ status: 200, data: workout[0] });
    } catch ( error ) {
        return res.status( 400 ).json( { status: 400, data: error.message } );
    }
}

const editOne = async ( req = request, res = response ) => {
    const { title, reps, load } = req.body;
    const { workoutId } = req.params;
    try {
        if ( !mongoose.Types.ObjectId.isValid( workoutId ) ) {
            throw new Error( `Invalid workout Code` );
        } 
        const workout = await workoutModel.findByIdAndUpdate( workoutId, {
            title,
            reps,
            load
        },{
            new: true
        });
        return res.status( 200 ).json({ status: 200, data: workout });
    } catch ( error ) {
        return res.status( 400 ).json( { status: 400, data: error.message } );
    }
}

const deleteOneWorkout = async ( req = request, res = response ) => {
    const { workoutId } = req.params;
    try {
        if ( !mongoose.Types.ObjectId.isValid( workoutId ) ) {
            throw new Error( `Invalid workout Code` );
        } 
        const workout = await workoutModel.findByIdAndDelete( { _id: workoutId } );

        if ( !workout ) {
            return res.status( 200 ).json({ status: 200, data: 'No such workout' });    
        }

        return res.status( 204 ).json({ status: 204, data: workout });
    } catch ( error ) {
        return res.status( 400 ).json( { status: 400, data: error.message } );
    }
}

module.exports = {
    save,
    getAll,
    getOne,
    editOne,
    deleteOneWorkout
}