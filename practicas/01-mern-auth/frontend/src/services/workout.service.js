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

export {
    fetchWorkouts,
    createWorkout,
}