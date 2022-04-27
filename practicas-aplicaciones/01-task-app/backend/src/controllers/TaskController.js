const TaskModel = require( '../models/Task' );

class TaskController {
    getTasks = async ( req, reply ) => {
        try {
            const tasks = await TaskModel.find();
            return reply.code( 200 ).send( { status: 200, data: tasks } );
        } catch ( err ) {
            return reply.code( 500 ).send( { status: 500, data: `Error: ${ err }` } );
        }
    }

    getTask = async ( req, reply ) => {
        try {
            const { taskId } = req.params;
            const task = await TaskModel.find( { _id: taskId } );
            return reply.code( 200 ).send( { status: 200, data: task } );
        } catch ( err ) {
            return reply.code( 500 ).send( { status: 500, data: `Error: ${ err }` } );
        }
    }

    saveTask = async ( req, reply ) => {
        try {
            const { taskName, priority } = req.body;
            const task = TaskModel({
                taskName: taskName,
                priority: priority
            });
            const saved = await task.save();
            return reply.code( 201 ).send( { status: 201, data: saved } );
        } catch ( err ) {
            return reply.code( 500 ).send( { status: 500, data: `Error: ${ err }` } );
        }
    }

    editTask = async ( req, reply ) => {
        try {
            const { taskId } = req.params;
            const { taskName, priority, done } = req.body;
            const updated = await TaskModel.findByIdAndUpdate( taskId, {
                taskName: taskName,
                priority: priority,
                done: done
            });
            return reply.code( 200 ).send( { status: 200, data: updated } );
        } catch ( err ) {
            return reply.code( 500 ).send( { status: 500, data: `Error: ${ err }` } );
        }
    }

    deleteTask = async ( req, reply ) => {
        try {
            const { taskId } = req.params;
            const deleted = await TaskModel.findByIdAndDelete( taskId );
            return reply.code( 200 ).send( { status: 200, data: deleted } );
        } catch ( err ) {
            return reply.code( 500 ).send( { status: 500, data: `Error: ${ err }` } );
        }
    }
}

module.exports = {
    TaskController,
}