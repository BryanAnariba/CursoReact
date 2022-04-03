import { useRef } from "react";

const FormNoControlado = () => {
  const formGuardarInfo = useRef( null );

  const guardarInformacion = ( e ) => {
    e.preventDefault();
    //console.log( 'works asyncroned' );
    const formValues = new FormData( formGuardarInfo.current );
    //console.log( ...formValues.entries() );
    const data = Object.fromEntries( [...formValues.entries()] );
    console.log( data );
  }

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
              <h2 className="text-center text-warning">Formulario no controlado</h2>
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
                    onSubmit={ guardarInformacion }
                  >
                      <div className="form-group">
                        <label htmlFor="tituloTarea" id="tituloTarea">Escriba el titulo de la tarea: </label>
                        <input 
                          type="text" 
                          placeholder="Titulo" 
                          autoFocus 
                          name="tituloTarea" 
                          id="tituloTarea" 
                          className="form-control mb-2 mt-1"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="tituloTarea" id="descripcionTarea">Escriba la descripcion de la tarea: </label>
                        <textarea 
                          type="text" 
                          placeholder="Titulo" 
                          name="descripcionTarea" 
                          id="descripcionTarea" 
                          className="form-control mb-2 mt-1"
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="estadoTarea" id="estadoTarea">Seleccione el estado de la tarea: </label>
                        <select 
                          name="estadoTarea" 
                          id="estadoTarea"
                          className="form-control mt-1 mb-2"
                          >
                          <option value="P" selected>Pendiente</option>
                          <option value="C">Completada</option>
                        </select>  
                     </div>
                     <div className="form-group">
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

export default FormNoControlado;