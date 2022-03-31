import { useState } from "react"

const Counter = () => {
  const [ counter, setCounter ]  = useState( 0 );
  const [ color, setColor ] = useState( '' );

  const aumentarAlClickear = () => {
    setColor( 'success' );
    setCounter( counter + 1 );
  }

  const disminuirAlClickear = () => {
    setColor( 'danger' );
    setCounter( counter - 1 );
  }
  
  const resetearAlClickear = () => {
    setColor( 'primary' );
    setCounter( 0 );
  }

  return (
    <>
        <h2 className="display-4">
            Counter Component: <b className={ `text-` + color }> { counter } </b>
        </h2>
        <button className="btn btn-primary" onClick={ aumentarAlClickear }>
            Aumentar + 1
        </button>
        <button className="btn btn-danger" onClick={ disminuirAlClickear }>
            Disminuir - 1
        </button>
        <button className="btn btn-success" onClick={ resetearAlClickear }>
            Restear 0
        </button>
    </>
  )
}

export default Counter