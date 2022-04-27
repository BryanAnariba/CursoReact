import React, { useEffect, useState } from 'react';

import { getTask } from '../../services/Task.service';
import { TaskItem } from './TaskItem';

export const TaskTable = () => {
  const [ tasks, setTasks ]  = useState([]);

  useEffect(() => {
    getTask()
    .then( res => res.json() )
    .then( response => {
      //console.log( response );
      setTasks( response.data );
    })
    .catch( err => console.error( err ) );
  }, []);
  return (
    <div className="row">
      {
        ( tasks.length === 0 )
        ? 
          <div className="alert alert-info" role="alert">
            Loading tasks........
          </div>
        :
          <div className="table-responsive">
            <table className="table table-bordered table-dark table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>Priority</th>
                  <th>Done?</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map( task => (
                    <TaskItem task={ task } key={ task._id }/>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  )
}

