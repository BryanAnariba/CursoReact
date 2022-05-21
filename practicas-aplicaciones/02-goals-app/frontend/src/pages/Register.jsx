import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register, reset } from '../features/auth/authSlice';

import { Spinner } from '../components/Spinner';

const Register = () => {
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
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    });

    const { name, email, password, passwordRepeat } = formData;

    const handleInputChange = ( e ) => {
        setFormData(( previusState ) => ({
            ...previusState,
            [e.target.name]: e.target.value,
        }));
        //console.log( formData );
    }

    const onSubmit = ( e ) => {
      e.preventDefault();
      if ( password !== passwordRepeat ) {
        toast.error( 'Passwords do not match.' )  
      } else {
        const userData = {
            name,
            email,
            password,
        }
        dispatch( register( userData ) ); // si todo okey despachamos o ejecutamos la accion registrarr

      }
    }

    if ( isLoading ) {
        return <Spinner />
    }
    return (
        <>
            <section className='heading'>
                <h1><FaUser/> Register</h1>
                <p>Please create an account</p>
                <section className="form">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name"
                                value={ name } 
                                placeholder="Enter your name"
                                onChange={ handleInputChange }
                                />
                        </div>
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
                            <input 
                                type="password" 
                                className="form-control" 
                                id="passwordRepeat" 
                                name="passwordRepeat" 
                                value={ passwordRepeat } 
                                placeholder="Confirm Password"
                                onChange={ handleInputChange }
                                />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn btn-block'>
                            <FaUser/> Register
                            </button>
                        </div>
                    </form>
                </section>
            </section>  
        </>
    )
}

export { Register };