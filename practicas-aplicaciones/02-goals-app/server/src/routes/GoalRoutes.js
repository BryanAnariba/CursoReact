const { Router }=  require( 'express' );
const { GoalController } = require('../controllers/GoalController');
const { protectRoutes } = require('../middlewares/authMiddleware');

const router = Router();
const goalCtrl = new GoalController();


// What goals services do we need
// @Get -> All Goals
// @Url localhost:5000/api/goals?skip=x&limit=x
// Private Route
router.get( '', protectRoutes ,goalCtrl.getGoals );

// @Get -> One Goal
// @Url localhost:5000/api/goals/goalId
// Private Route
router.get( '/:goalId', protectRoutes, goalCtrl.getGoal );

// @Post -> Create new Goal
// @Url localhost:5000/api/goals
// Private Route
router.post( '', protectRoutes, goalCtrl.saveGoal );

// @Put -> Edit Goal Selected
// @Url localhost:5000/api/goals/goalId
// Private Route
router.put( '/:goalId', protectRoutes, goalCtrl.editGoal );

// @Delete -> Delete Selected Goal
// @Url localhost:5000/api/goals/goalId
// Private Route
router.delete( '/:goalId', protectRoutes, goalCtrl.deleteGoal );


module.exports = {
    GoalRoutes: router,
}