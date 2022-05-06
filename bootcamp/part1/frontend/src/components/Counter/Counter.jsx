import { useState } from 'react'

export const Counter = ( { initialState } ) => {
  console.log( { initialState } );
  const [ counter, setCounter ] = useState( initialState );
  const modifyCounter = ( option = '@Reset' ) => {
    switch ( option ) {
        case '@Add':
            setCounter( counter + 1 );
        break;
        case '@Substract':
            setCounter( counter - 1 );
        break;
        case '@Reset':
            setCounter( initialState );
        break;
        default:
            setCounter( initialState );
        break;
    }
  }

  return (
    <>
        <b>Counter Value: { counter }</b><br />
        <p>{ (( counter % 2 ) === 0) ? 'Par' : 'Impar' }</p>
        <button 
            onClick={ () => modifyCounter( '@Add' ) }
        >
            Add + 1
        </button>
        <button 
            onClick={ () => modifyCounter( '@Substract' ) }
        >
            Substract - 1
        </button>
        <button 
            onClick={ () => modifyCounter( '@Reset' ) }
        >
            Reset
        </button>
    </>
  )
}
