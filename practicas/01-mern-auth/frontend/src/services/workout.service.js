const fetchWorkouts = async () => {
    return await fetch( `/api/workouts` );
}

const createWorkout = async ( workout ) => {
    return await fetch( `/api/workouts`, {
        method: 'POST',
        body: JSON.stringify( workout ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const deleteWorkout = async ( workoutId ) => {
    return await fetch( `/api/workouts/${ workoutId }`, {
        method: 'DELETE'
    });
}

export {
    fetchWorkouts,
    createWorkout,
    deleteWorkout,
}