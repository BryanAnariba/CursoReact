import { useState, useEffect } from "react";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

export const TaskList = () => {
  const [ tareas, setTareas ] = useState( [] );
  
  const addTarea = ( tarea ) => {
    // forma uno aqui es muy util ya que puedes ver como estaban las tareas antes y hacer mejoras si es necesario
    // visto de otro modo tienes el estado anterior
    //setTareas( (tareasViejas) => [ ...tareasViejas, tarea ] );

    // forma dos mas sencilla y me gusta mas
    setTareas( [ ...tareas, tarea ] );
    console.log( tarea );
  }
  const editarTarea = ( id ) => {
    console.log( 'Editando tarea: ', id );
    // esto retorna todas las tareas hasta la modificadas
    const tareasConLaTareaEditada = tareas.map((t) => (
      (t.id === id) ? { ...t, estadoTarea: !t.estadoTarea } : t
    ));

    // actualizamos el estado
    setTareas( tareasConLaTareaEditada );
  }
  const eliminarTarea = ( id ) => {
    console.log( 'Eliminando tarea: ', id );
    setTareas( (tarea) => tarea.filter( (t) => t.id !== id ));
  }

  useEffect(() => {
    if ( localStorage.getItem( 'tareas' ) ) {
      setTareas( JSON.parse( localStorage.getItem( 'tareas' ) ) );
    }
  }, []); // este solo se ejecuta la primera vez que el componente se renderiza

  useEffect(() => {
    localStorage.setItem( 'tareas', JSON.stringify( tareas ) );
  }, [ tareas ]); // este se ejecuta cada vez que hayan cambios en la lista de tareas

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center text-primary display-5'>
            Aplicacion de Tareas
            <hr />
          </h1>
        </div>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <TaskForm addTarea={ addTarea }/>
          </div>
          <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
            <table className="table table-hover table-bordered table-dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Estado</th>
                  <th>Prioridad</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  tareas.map( tarea => (
                    <Task key={ tarea.id }
                      id={ tarea.id }
                      tituloTarea={ tarea.tituloTarea }
                      descripcionTarea={ tarea.descripcionTarea }
                      estadoTarea={ tarea.estadoTarea }
                      prioridadTarea={ tarea.prioridadTarea }
                      editarTarea={ editarTarea }
                      eliminarTarea={ eliminarTarea }
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}