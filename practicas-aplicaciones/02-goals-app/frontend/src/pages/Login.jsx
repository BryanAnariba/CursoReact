import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login, reset } from '../features/auth/authSlice';

import { Spinner } from '../components/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      ( state ) => state.auth
    );

    useEffect(() => {
        // al insertar o registrar un usuario 
        if ( isError ) { // si hay error que lo notifique 
            toast.error( message );
        }

        if ( isSuccess || user ) { // mandamos al login si el registro se eso bien
            navigate( '/' );
        }

        dispatch( reset() );

    }, [ user, isError, isSuccess, message, navigate, dispatch ]);

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });

    const { email, password  } = formData;

    const handleInputChange = ( e ) => {
        setFormData(( previusState ) => ({
            ...previusState,
            [e.target.name]: e.target.value,
        }));
        //console.log( formData );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();

        // Login dispatch
        const userData = {
            email,
            password
        };

        dispatch( login( userData ) );
    }

    if ( isLoading ) {
        return <Spinner />
    }
    return (
        <>
            <section className='heading'>
                <h1><FaSignInAlt /> Sign In</h1>
                <p>Enter Your Credentials: </p>
                <section className="form">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                value={ email } 
                                placeholder="Enter your email"
                                onChange={ handleInputChange }
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password"
                                value={ password } 
                                placeholder="Enter your password"
                                onChange={ handleInputChange }
                                />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn btn-block'>
                                Login
                            </button>
                        </div>
                    </form>
                </section>
            </section>  
        </>
    )
}

export { Login };