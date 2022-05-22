import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
    const [ text, setText ] = useState( '' );
    const dispatch = useDispatch();

    const onSubmit = ( e ) => {
        e.preventDefault();

        dispatch( createGoal( { text } ) );
        setText( '' );

    }
    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="text">Goal: </label>
                <input 
                    type="text" 
                    name="text" 
                    id="text"
                    value={ text }
                    onChange={ (e) => setText( e.target.value ) }
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Add Goal" className="btn btn-block" />
            </div>
        </form>
    )
}

export { GoalForm };