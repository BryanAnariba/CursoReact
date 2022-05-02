import React, { useState } from 'react'
import { useForm  } from 'react-hook-form';
export const TaskForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ task, setTask ] = useState({
    taskName: '',
    priority: ''
  });
  const onSave = ( data ) => {
    //e.preventDefault();
    console.log(data);
  }

  const handleInputChange = ( e ) => { // para capturar lo escrito
    const { name, value, type, checked } = e.target; // Desestructuramos clave y valor y lo anexamos al estado
    // OJO CON LOS INPUTS DE TIPO CHECK Y FILE PARA ESOS HAY QUE HACER CIERTAS VALUDACIONES PARA METERLO AL ESTADO JUSTO COMO AHORA
    setTask({
      ...task,
      [name]: ( type === 'checkbox' ) ? checked : value
    })
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header bg-info text-white text-center">
              <h2>Register a new task</h2>
            </div>
            <div className="card-body">
              <form onSubmit={ handleSubmit(onSave) }>
                <div className="form-group">
                  <label htmlFor="taskName" id="taskName">Please write the task name: </label>
                  <input 
                    type="text" 
                    placeholder="Task Name" 
                    autoFocus 
                    name="taskName" 
                    id="taskName" 
                    className="form-control mb-2 mt-1"
                    onChange={ handleInputChange }
                    value={ task.taskName }
                    {
                      ...register( "taskName", { 
                        required: "Task Name is required",
                        minLength: { value: 1, message: "Min Length are 1" },
                        maxLength: { value: 150, message: "Max Length are 150" }
                      })
                    }
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="priority mt-3" id="priority">Please select to priority: </label>
                  <select 
                    name="priority" 
                    id="priority" 
                    className="form-control"
                    onChange={ handleInputChange }
                    value={ task.priority }
                    >
                    <option value="">Select Priority</option>
                    <option value="Hight">Hight</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="form-group mt-3 text-center">
                  <input type="submit" value="Save Task" className="btn btn-outline-success btn-block btn-rounded-circle"/>
                </div>
              </form>
            </div>
            <div className="card-footer bg-dark">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
