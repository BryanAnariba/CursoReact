import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    const [ inputs, setInputs ] = useState( initialState );

    const handleInputChange = ( e ) => {
        const { name, value, checked, type } = e.target;

        setInputs({
            ...inputs,
            [name]: ( type === 'checkbox' ? checked : value )
        });
    }

    const reset = () => {
        setInputs( initialState );
    }
    return [
        handleInputChange,
        reset,
        inputs
    ]
}
