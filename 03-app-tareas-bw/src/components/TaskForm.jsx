import { useState } from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

export const TaskForm = () => {

    const [ tarea, setTarea ] = useState({
        tituloTarea: '',
        descripcionTarea: '',
        estadoTarea: 'P',
        prioridadTarea: false
    });

    const { tituloTarea, descripcionTarea, estadoTarea, prioridadTarea } = tarea;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // VALIDACIONES

        if ( !tituloTarea.trim() ) {
            return Swal.fire( { icon: 'error', title: 'Ops!!!!', text: 'Ha ocurrido un error', footer: 'Titulo de la tarea es obligatorio' } );
            
        }
        if ( !descripcionTarea.trim() ) {
            return Swal.fire( { icon: 'error', title: 'Ops!!!!', text: 'Ha ocurrido un error', footer: 'Descripcion de la tarea es obligatorio' } );
        }
        Swal.fire(
            'Guardado Exitosamente',
            `Tarea ${ tarea.tituloTarea } Guardada Exitosamente.`,
            'success'
        );
    }
    const handleInputChange = ( e ) => {
        const { name, value, checked, type } = e.target;

        setTarea({
            ...tarea,
            [name]: ( type === 'checkbox' ? checked : value )
        });
    }
    return (
        <>
            <div className="card">
                <div className="card-header bg-primary text-center text-white">
                    Registre Nuevas Tareas Aqui
                </div>
                <div className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="tituloTarea" className="form-label">Escriba el titulo de la tarea:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="tituloTarea" 
                                aria-describedby="emailHelp" 
                                placeholder="Titulo Tarea"
                                id="tituloTarea"
                                value={ tituloTarea }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcionTarea" className="form-label">Escriba la descripcion de la tarea:</label>
                            <textarea 
                                type="text" 
                                className="form-control" 
                                name="descripcionTarea" 
                                placeholder="Descripcion"
                                id="descripcionTarea"
                                value={ descripcionTarea }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estadoTarea" className="form-label">Seleccione el de la tarea:</label>
                            <select 
                                name="estadoTarea" 
                                id="estadoTarea"
                                className="form-control"
                                value={ estadoTarea }
                                onChange={ handleInputChange }
                            >
                                <option value="P">Pendiente</option>
                                <option value="C">Completada</option>
                            </select>
                        </div>
                        <div className="mb-3 form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="prioridadTarea" 
                                name="prioridadTarea"
                                checked={ prioridadTarea }
                                onChange={ handleInputChange }
                            />
                            <label className="form-check-label" htmlFor="prioridadTarea">Es tarea prioritaria?</label>
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary">Guardar Tarea</button>
                        </div>
                        
                    </form>
                </div>
                <div className="card-footer bg-dark">

                </div>
            </div>
        </>
    )
}
