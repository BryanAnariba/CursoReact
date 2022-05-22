const { request, response } = require( 'express' );
const asyncHandler = require( 'express-async-handler' );
const GoalModel = require( '../models/Goal' );
const UserModel = require( '../models/User' );
class GoalController {
    getGoals = asyncHandler( async ( req = request, res = response ) => {
        const { skip = 0, limit = 10 } = req.query;
        try {
            const goals = await GoalModel.find({ user: req.user.id }).skip( skip ).limit( limit );
            return res.status( 200 ).send({ status: 200, data: { 
                goals: goals,
                skip: skip,
                limit: limit
            }})
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    getGoal = asyncHandler( async ( req = request, res = response ) => {
        const { goalId } = req.params;
        try {
            if ( !goalId ) {
                res.status( 400 )
                throw new Error( `Goal Id is required}` );
            }
            const goal = await GoalModel.findById( goalId ).limit(1);
            return res.status( 200 ).json( { status: 200, data: goal } );
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    saveGoal = asyncHandler( async ( req = request, res = response ) => {
        const { text } = req.body;
        if ( !text ) {
            res.status( 400 )
            throw new Error( `Please add a text field` );
        }
        try {
            const goal = await GoalModel.create({
                text: text,
                user: req.user.id
            });
            return res.status( 200 ).send( { status: 200, data: { goal: goal, message: 'Created Successfully.' } } );
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    editGoal = asyncHandler( async ( req = request, res = response ) => {
        const { goalId } = req.params;
        const { text } = req.body;
        if ( !text ) {
            res.status( 400 )
            throw new Error( `Please add a text field` );
        }
        try {
            const goal = await GoalModel.findById( goalId );
            if ( !goal ) {
                res.status( 400 )
                throw new Error( `Goal Not found` );
            }

            //const user = await UserModel.find({ user: req.user.id });
            //if ( !user ) {
            if ( !req.user ) {
                res.status( 401 )
                throw new Error( `Unauthorize` );
            }

            //if ( !goal.user.toString() !== user.id ) {
            if ( !goal.user.toString() !== req.user.id ) {
                res.status( 401 )
                throw new Error( `Unauthorize you are not the same user` );
            }
            const  updatedGoal = await GoalModel.findByIdAndUpdate( goalId, { text: text },{ new: true });
            return res.status( 200 ).json( { status: 200, data: { goal: updatedGoal, message: 'Updated Successfully' } } );
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })

    deleteGoal = asyncHandler( async ( req = request, res = response ) => { 
        const { goalId } = req.params;
        try {
            if ( !goalId ) {
                res.status( 400 )
                throw new Error( `Goal Id is required}` );
            }

            // IF goal not foun return error because its necesary for delete this records
            const goal = await GoalModel.findById( goalId );
            if ( !goal ) {
                res.status( 400 )
                throw new Error( `Goal Not found` );
            }


            // Search the user for compare the id with de user of the request, find user filter with req.user.id
            //const user = await UserModel.find({ user: req.user.id });
            // if ( !user ) {
            if ( !req.user ) {
                res.status( 401 )
                throw new Error( `Unauthorize` );
            }

            // if the user._id does not equals to req.user.id return unathorized
            if ( !goal.user.toString() !== req.user.id ) {
                res.status( 401 )
                throw new Error( `Unauthorize you are not the same user` );
            }
            const goalDeleted = await GoalModel.findByIdAndDelete( goalId );
            return res.status( 200 ).json( { status: 200, data: { goal: goalDeleted, message: 'Deleted Successfully' }} );
        } catch ( err ) {
            res.status( 400 )
            throw new Error( `Sometime went wrong ${ err }` );
        }
    })
}

module.exports = {
    GoalController,
}