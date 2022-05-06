import { useState } from "react"
export const CounterLeftRight = ({ initState }) => {
    const [ counter, setCounter ] = useState( initState );
    const [ clicksLR, setClicksLR ] = useState( [] );

    const { left, right } = counter; // si comentas esto deberas poner counter.left y counter.right

    const add = ( option ) => {
        switch ( option ) {
            case '@Left':
                setCounter( { ...counter, left: left + 1  } );
                setClicksLR( [ ...clicksLR, 'L' ] );
            break;
            case '@Right':
                setCounter( { ...counter, right: right + 1  } ); 
                setClicksLR( [ ...clicksLR, 'R' ] );
            break;
            case '@Reset':
                setClicksLR( initState );
                setClicksLR( [] );
            break;
            default:
                setCounter( { ...counter, left: 0, right: 0  } );
            break;
        }
    }
  return (
    <>
        <h2>Total Clicks = { clicksLR.length }</h2>
        <h2>Left: { clicksLR.filter( click => click === 'L' ).join( ', ' ) }</h2>
        <h2>Right: { clicksLR.filter( click => click === 'R' ).join( ', ' ) }</h2>
        <b>Counter Left: { left } </b>
        <button
            onClick={ () => add( '@Left' ) }
        >Add Left</button>
        <button
            onClick={ () => add( '@Reset' ) }
        >
            Reset
        </button>
        <button
            onClick={ () => add( '@Right' ) }
        >Add Right</button>
        <b>Counter Left: { right } </b>
    </>
  )
}