
import { useState } from 'react';
import './App.css';
import { Frutas } from './components/Frutas';
import { SaludoBienvenida } from './components/SaludoBienvenida';
import { SaludoSalida } from './components/SaludoSalida';
import Counter from './components/Counter';


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
            <hr />
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
              onClick={ () => cambiaEstadoLogueo( 'Bryan Ariel' ) }
              className={ ( estasLogueado ) ? 'btn btn-danger' : 'btn btn-success' }
            >
              { ( estasLogueado ) ? 'Cerrar Sesion' : 'Iniciar Sesion' }
            </button>
            <hr />
            <br />
            <strong className={ textStyles.dark }>Muesta de listas recorriendo arrays</strong>
            <ol>
              {
                lenguajesDeProgramacion.map(( lenguaje, index ) => (
                  <Frutas 
                    key={ index }
                    lenguaje={ lenguaje } 
                  />
                ))
              }
            </ol>
            <hr />
            <br />
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}

export { 
  App, 
};


// 35 faltan