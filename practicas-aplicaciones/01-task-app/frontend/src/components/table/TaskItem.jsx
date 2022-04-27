import React from 'react'

export const TaskItem = ({ task }) => {
  return (
    <tr>
      <td>{ task._id }</td>
      <td>{ task.taskName }</td>
      <td>{ task.priority }</td>
      <td>{ 
          ( task.done === true ) 
            ? 
              <div className="alert alert-success" role="alert">
                Complete
              </div>
            : 
              <div className="alert alert-warning" role="alert">
                Pending
              </div>
      }</td>
      <td>
        <button className='btn btn-info'>
          E
        </button>
        <button className='btn btn-danger'>
          D
        </button>
      </td>
    </tr>
  )
}
