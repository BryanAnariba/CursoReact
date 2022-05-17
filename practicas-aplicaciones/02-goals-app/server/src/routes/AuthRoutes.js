const { Router } = require( 'express' );
const router = Router();
const { AuthController } = require( '../controllers/AuthController' );
const userCtrl = new AuthController();
const { protectRoutes } =require( '../middlewares/authMiddleware' );

// What auth services do we need
// @Post login
// Route -> localhost:5000/api/auth/sign-in
router.post( '/login', userCtrl.login );

// @Post create user
// Route -> localhost:5000/api/auth/sign-up
router.post( '/sign-up', userCtrl.signUp );

// @Post Get me user
// Route -> localhost:5000/api/auth/me
router.get( '/me', protectRoutes, userCtrl.getMe );

module.exports = {
    AuthRoutes: router
}