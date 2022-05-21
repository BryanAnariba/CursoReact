import axios from 'axios';

const API_URL = '/api/auth/users/';

// Register user
const register = async ( userData ) => {
    const response  = await axios.post( `http://localhost:5000${ API_URL }sign-up`, userData );

    if ( response.data ) {
        localStorage.setItem( 'user', JSON.stringify( response.data ) );
    }

    return response.data;
}

// Login User
const login = async ( userData ) => {
    const response  = await axios.post( `http://localhost:5000${ API_URL }login`, userData );

    if ( response.data ) {
        localStorage.setItem( 'user', JSON.stringify( response.data ) );
    }

    return response.data;
}

// Destroy User Session
const logOut = () => {
    localStorage.removeItem( 'user' );
}

const authService = {
    register,
    logOut,
    login,
}

export default authService;