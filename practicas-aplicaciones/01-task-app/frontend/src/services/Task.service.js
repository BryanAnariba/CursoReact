const API = 'http://localhost:3500/api/tasks';
const getTask = async ( limit = 10, skip = 0 ) => {
    //console.log({ limit, skip });
    return await fetch( `${ API }`, {
        method: 'GET',
    });
}

export {
    getTask,
}