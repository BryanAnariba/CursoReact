import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from '../services/auth.service';

// Get User from localstorage
const user = JSON.parse( localStorage.getItem( 'user' ) );

const initialState = {
    user: user ? user : null,  //Si no hay nada en el local storage null
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Register the user here with asynchronous thunk watch 38 minute of this video por that
export const register = createAsyncThunk('auth/register', async ( user, thunkAPI ) => {
    try {
        return  await authService.register( user );  // ESTO VA A DAR A ESTO => state.user = action.payload
    } catch ( error ) {
        const message = ( 
            error.response && 
            error.response.data 
            && error.response.data.message
        ) || error.message || error.toString();
        return thunkAPI.rejectWithValue( message ); // ESTO VA A DAR A ESTO => state.message = action.payload;
    }
});

export const login = createAsyncThunk('auth/login', async ( user, thunkAPI ) => {
    try {
        return  await authService.login( user );  // ESTO VA A DAR A ESTO => state.user = action.payload
    } catch ( error ) {
        const message = ( 
            error.response && 
            error.response.data 
            && error.response.data.message
        ) || error.message || error.toString();
        return thunkAPI.rejectWithValue( message ); // ESTO VA A DAR A ESTO => state.message = action.payload;
    }
});

export const logOut = createAsyncThunk( 'auth/logOut', async () => {
    await authService.logOut();
});

// ACTIONS O CASES DE LOS REDUCERS
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { // Supongo que esto es lo que se 
        reset: ( state ) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: ( builder ) => {
        builder
        .addCase( register.pending, ( state ) => { // Aqui empiezan las acciones de registro
            state.isLoading = true;
        })
        .addCase( register.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase( register.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        .addCase( login.pending, ( state ) => { // Aqui empiezan las acciones de login
            state.isLoading = true;
        })
        .addCase( login.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase( login.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        .addCase( logOut.fulfilled, ( state ) => { // Aqui empiezan las acciones de logout
            state.isLoading = false;
            state.isError = false;
            state.message = '';
            state.user = null;
        })
    }
});


// mirar de donde salen los actions y los reducer de aca
export const { reset  } = authSlice.actions;
export default authSlice.reducer;
