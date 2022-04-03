import { useRef, useState } from "react";
import { Alert } from './Alert';
//import { Toast } from "./Toast";
import { ToastContainer, toast } from 'react-toastify';


const FormControlado = () => {
  const formGuardarInfo = useRef( null );
  const [ error, setError ] = useState( { isError: false, styles:'', svg: '', msg: '' });
  const [ seGuardo, setSeGuardo ] = useState({ seGuardo: false, msg: '' });
  const [ tarea, setTarea ] = useState({
      tituloTarea: '',
      descripcionTarea: '',
      estadoTarea: 'P',
      prioridadTarea: false
  });

  const handleSubmit = ( e ) => {
      e.preventDefault();
      console.log( { tarea: tarea } );
      const { tituloTarea, descripcionTarea } = tarea;
      if ( !tituloTarea.trim() || !descripcionTarea.trim() ) {
        setError( {...error, isError: true, styles: 'alert alert-danger d-flex align-items-center alert-dismissible fade show', svg: '#exclamation-triangle-fill', msg:'Hay campos vacios obligatorios en el formulario que estan vacios, rellenelos por favor'} );
        setSeGuardo({...seGuardo, seGuardo: false, msg: '' });
      } else {
        //setError( {...error, isError: false, styles: 'alert alert-success d-flex align-items-center alert-dismissible fade show', svg: '#check-circle-fill', msg: 'Guardado Correctamente'} );
        // GUARDAMOS
        //console.log( 'Guardado simulando la peticion ' );
        setSeGuardo({ ...seGuardo, seGuardo: true, msg: 'Guardado Exitosamente......' })
        
        // Limpieza de formulario
        toast.success( 'Registro Guardado Correctamente', { autoClose: 5000 } );
        setTarea({...tarea,
            tituloTarea: '',
            descripcionTarea: '',
            estadoTarea: 'P',
            prioridadTarea: false
        });
        setError( {...error, isError: false, styles: '', svg: '', msg: ''} );
      }
  }

  const handleInputChange = ( e ) => {
    console.log( `e.target.name: ${ e.target.name } , e.target.value: ${ e.target.value }` );
    const { name, value, type, checked } = e.target; // Desestructuramos clave y valor y lo anexamos al estado

    // OJO CON LOS INPUTS DE TIPO CHECK Y FILE PARA ESOS HAY QUE HACER CIERTAS VALUDACIONES PARA METERLO AL ESTADO JUSTO COMO AHORA
    setTarea( { ...tarea, [name]: ( type === 'checkbox' ) ? checked : value } )
  }

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mx-auto">
              {
                ( error.isError === true )  && ( <Alert styles={ error.styles } svg={ error.svg } msg={ error.msg }/> ) 
              }
              {
                  ( seGuardo.msg.trim() !== '' ) && <ToastContainer />
              }
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
              <h2 className="text-center text-success">Formulario Controlado</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="card">
                <div className="card-header bg-dark text-white text-center">
                  Formulario de registro de tareas
                </div>
                <div className="card-body">
                  <form 
                    ref={ formGuardarInfo } 
                    onSubmit={ handleSubmit }
                  >
                      <div className="form-group">
                        <label htmlFor="tituloTarea" id="tituloTarea">Escriba el titulo de la tarea: </label>
                        <input 
                          type="text" 
                          placeholder="Titulo" 
                          autoFocus 
                          name="tituloTarea" 
                          id="tituloTarea" 
                          className="form-control mb-2 mt-1"
                          onChange={ handleInputChange }
                          value={ tarea.tituloTarea }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="tituloTarea" id="descripcionTarea">Escriba la descripcion de la tarea: </label>
                        <textarea 
                          type="text" 
                          placeholder="Titulo" 
                          name="descripcionTarea" 
                          id="descripcionTarea" 
                          className="form-control mb-2 mt-1"
                          onChange={ handleInputChange }
                          value={ tarea.descripcionTarea }
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="estadoTarea" id="estadoTarea">Seleccione el estado de la tarea: </label>
                        <select 
                          name="estadoTarea" 
                          id="estadoTarea"
                          className="form-control mt-1 mb-2"
                          onChange={ handleInputChange }
                          value={ tarea.estadoTarea }
                          >
                          <option value="P">Pendiente</option>
                          <option value="C">Completada</option>
                        </select>  
                     </div>
                     <div className="form-group mt-1 bm-2">
                        <div className="form-check">
                            <input 
                                type="checkbox"  
                                className="form-check-input"
                                name="prioridadTarea"
                                id="prioridadTarea"
                                onChange={ handleInputChange }
                                checked={ tarea.prioridadTarea }
                            />
                            <label htmlFor="" className="form-check-label">
                                Prioridad de la tarea: es alta?
                            </label>
                        </div>
                     </div>
                     <div className="form-group text-center">
                      <input 
                        type="submit" 
                        value="Guardar Informacion" 
                        className="btn btn-success btn-block mx-auto"
                        />
                     </div>
                  </form>
                </div>
                <div className="card-footer bg-primary">
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FormControlado;