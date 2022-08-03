import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';
import { deleteWorkout } from '../services/workout.service';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const WorkoutDetail = ({ workout }) => {

  const { dispatch } = useWorkoutContext();
  
  const notify = ( msg ) => {
    toast.error( msg );
  }

  const notifySuccess = ( msg ) => {
    toast.success( msg );
  }

  const handleClickDelete = async () => {
      deleteWorkout( workout._id )
      .then( response => response.json() )
      .then(( data ) => {
        if ( data.status === 400 || data.status === 401 || data.status === 404 ) {
          notify( data.data );
        } else {
          dispatch({
            type: 'DELETE_WORKOUT',
            payload: workout._id
          });
          notifySuccess( `Workout Deleted Successfully` );
        }
    })
    .catch(( error ) => {
      console.error( error );
    });
  }
  return (
    <div className="workout-details">
      <h4>{ workout.title }</h4>
      <p>
        <strong>
          Load ( kg ): 
        </strong>
        { workout.load }
      </p>
      <p>
        <strong>
          Reps: 
        </strong>
        { workout.reps }
      </p>
      <p>
        { formatDistanceToNow(new Date( workout.createdAt ), { addSuffix: true }) }
      </p>
      <span onClick={ handleClickDelete }>
        <img src="/delete.png" alt="Delete Workout" />
      </span>
      {
        <ToastContainer />
      }
    </div>
  )
}
