const { EndPoints } = require( '../config/EndPoints' );
const { TaskController } = require('../controllers/TaskController');

const taskCTRL = new TaskController();

const taskRoutes = [
    {
        url: `${ EndPoints.task }`,
        method: 'GET',
        handler: taskCTRL.getTasks
    },
    {
        url: `${ EndPoints.task }/:taskId`,
        method: 'GET',
        handler: taskCTRL.getTask
    },
    {
        url: `${ EndPoints.task }`,
        method: 'POST',
        handler: taskCTRL.saveTask
    },
    {
        url: `${ EndPoints.task }/:taskId`,
        method: 'PUT',
        handler: taskCTRL.editTask
    },
    {
        url: `${ EndPoints.task }/:taskId`,
        method: 'DELETE',
        handler: taskCTRL.deleteTask
    },
];

module.exports = {
    taskRoutes,
}