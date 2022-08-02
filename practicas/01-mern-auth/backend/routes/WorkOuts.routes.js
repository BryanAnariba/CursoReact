const { Router } = require( 'express' );
const { save, getOne, getAll, editOne, deleteOneWorkout } = require('../controllers/WorkoutController');


const router = Router();

router.get( '', getAll );

router.get( '/:workoutId', getOne );

router.post( '', save );

router.delete( '/:workoutId', deleteOneWorkout );

router.put( '/:workoutId', editOne );

module.exports = {
    WorkOutRoutes: router
};