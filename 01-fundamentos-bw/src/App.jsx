
import { useState } from 'react';
import './App.css';

const SaludoBienvenida = () => {
  return (
    <>
      <br />
      <strong className='text-primary'>
        Bienvenido........
      </strong>
    </>
  )
}

const SaludoSalida = () => {
  return (
    <>
      <br />
      <strong className='text-primary'>
        Adiosito........
      </strong>
    </>
  )
}

const App = () => {
  const [ estasLogueado, setEstasLogueado ] = useState( false );
  const message = `Buenas Buenas, BRRRRRRR`;
  const textStyles = {
    primary: 'text-primary',
    info: 'text-info',
    success: 'text-success',
    dark: 'text-dark display-4',
  }

  const cambiaEstadoLogueo = () => {
    setEstasLogueado( !estasLogueado );
  }

  const lenguajesDeProgramacion = [ 'Java', 'Node', 'Python', 'PHP', 'Html', 'CSS' ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <strong className={ textStyles.success }>{ message }</strong>
            <br />
            <br />
            <strong className={ textStyles.dark }>Renderizado Condicional</strong>
            {
              ( estasLogueado )
              ?
                <SaludoBienvenida />
              :
                <SaludoSalida />
            }
            <br />
            <button
              onClick={ cambiaEstadoLogueo }
              className={ ( estasLogueado ) ? 'btn btn-danger' : 'btn btn-success' }
            >
              { ( estasLogueado ) ? 'Cerrar Sesion' : 'Iniciar Sesion' }
            </button>
            <br />
            <strong className={ textStyles.dark }>Muesta de listas recorriendo arrays</strong>
            <ol>
              {
                lenguajesDeProgramacion.map(( lenguaje, index ) => (
                  <li key={ index }>{ lenguaje }</li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export { 
  App, 
};

// 1:42