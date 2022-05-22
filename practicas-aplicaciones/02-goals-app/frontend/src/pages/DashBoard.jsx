import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GoalForm } from '../components/GoalForm';
import { Spinner } from '../components/Spinner';
import { getGoals, reset } from "../features/goals/goalSlice";

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector( ( state ) => state.auth );
  const { goals, isLoading, isError, message } = useSelector( ( state ) => state.goals );

  useEffect(() => {
    if ( isError ) {
      console.log(message);
    }

    if ( !user ) { // Si no hay usuario logueado pal login bro
      navigate( '/login' )
    }

    dispatch( getGoals() );

    return () => {
      dispatch( reset() );
    }
  }, [ user, navigate, isError, message, dispatch ])

  if ( isLoading ) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h5>Welcome { ( user ) && user.data.name }</h5>
      </section>
      <GoalForm />
    </>
  )
}

export { DashBoard };