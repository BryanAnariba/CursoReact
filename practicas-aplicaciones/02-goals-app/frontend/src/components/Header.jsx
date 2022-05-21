import { FaSignInAlt, FaUser, FaSignOutAlt  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logOut, reset } from '../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector( ( state ) => state.auth );

    const onLogOut = () => {
        dispatch( logOut() );
        dispatch( reset() );
        navigate( '/' );
    }

    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>Goals</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
                {
                    ( user )
                    ? 
                        (
                            <li>
                                <button className='btn' onClick={ onLogOut }>
                                    <FaSignOutAlt /> LogOut
                                </button>
                            </li>
                        ) 
                    : 
                        ( <></> ) 
                }
            </ul>
        </header>
    )
}

export { Header };