import { WorkoutsContext } from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {

    // con esta linea pasamos el valor del WorkContextProvider osea el state y dispatch
    const context = useContext( WorkoutsContext );

    if ( !context ) {
        throw Error( 'useWorkoutsContext must be use inside an WorkoutsContextProvider' );
    }
    
    return context;
}