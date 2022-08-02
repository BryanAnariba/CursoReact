import React, { useEffect } from 'react';

import { WorkoutDetail } from '../components/WorkoutDetail';
import { WorkoutForm } from '../components/WorkoutForm';
import { fetchWorkouts } from '../services/workout.service';

import { useWorkoutContext } from '../hooks/useWorkoutsContext';

export const Home = () => {
  
  // si usamos useContext no usamos useState
  //const [ workouts, setWorkouts ] = useState( [] );
  const { workouts, dispatch } = useWorkoutContext();


  useEffect(() => {
    fetchWorkouts()
    .then( response => response.json() )
    .then( ( data ) => {
      //console.log( data );
      dispatch({
        type: 'SET_WORKOUTS',
        payload: data.data
      });
    })
    .catch(( error ) => {
      console.error( error );
    });
  }, [ dispatch ]);
  return (
    <div className="home">
      <div className="workouts">
        {
          workouts && workouts.map(( workout ) => (
            <WorkoutDetail key={ workout._id } workout={ workout } />
          ))
        }
      </div>

      <WorkoutForm />
    </div>
  )
}
