const { Schema, model } = require( 'mongoose' );

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: [ true, 'Task Name is required' ]
    },
    priority: {
        type: String,
        default: [ true, 'Priority is required' ]
    },
    done: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
});

taskSchema.methods.ToJSON = function () {
    const { _id } = this.toObject();
    task.uid = _id;
    return task;
}

module.exports = model( 'Task', taskSchema );