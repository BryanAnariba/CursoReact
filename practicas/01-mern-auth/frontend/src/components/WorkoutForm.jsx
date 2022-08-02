import { useState } from 'react'
import { createWorkout } from '../services/workout.service';
import { ToastContainer, toast } from 'react-toastify';

import { useWorkoutContext } from '../hooks/useWorkoutsContext';

export const WorkoutForm = () => {
  const [ title, setTitle ] = useState( '' );
  const [ reps, setReps ] = useState( '' );
  const [ load, setLoad ] = useState( '' );
  const [ errorMessage, setErrorMessage ] = useState( false );

  const { dispatch } = useWorkoutContext();
  
  const notify = ( msg ) => {
    toast.error( msg );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps }

    createWorkout( workout )
    .then( response => response.json() )
    .then(( data ) => {
        setTitle( '' );
        setLoad( '' );
        setReps( '' );
        console.log( data );
        if ( data.status === 400 || data.status === 401 || data.status === 404 ) {
            notify( data.data );
            setErrorMessage( true );
        } else {
            dispatch({
                type: 'CREATE_WORKOUT',
                payload: data.data
            })
        }
    })
    .catch((error) => {
        console.error( error )
    });
  }

  return (
    <form className="create" onSubmit={ handleSubmit }>
        <h3>Add New Workout</h3>
        <label htmlFor="title">Excersise Title:</label>
        <input 
            type="text" 
            id="title"
            onChange={ ( e ) => setTitle( e.target.value ) }
            value={ title }
        />
        <label htmlFor="load">Excersise Load:</label>
        <input 
            type="number" 
            id="load"
            onChange={ ( e ) => setLoad( e.target.value ) }
            value={ load }
        />
        <label htmlFor="reps">Excersise Reps:</label>
        <input 
            type="number" 
            id="reps"
            onChange={ ( e ) => setReps( e.target.value ) }
            value={ reps }
        />
        <button>
            Add Workout
        </button>
        {
            ( errorMessage === true ) && <ToastContainer />
        }
    </form>
  )
}
