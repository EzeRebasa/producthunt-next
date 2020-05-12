import React, { useState, useEffect} from 'react';

const useValidation = (initialState, validate, fn) => {
   
    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState({});
    const [ submitForm, setSubmitForm ] = useState(false);

    useEffect (() => {
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0;

            if(noErrors) {
                fn(); // equals to the function that runs in the component (login, register, new-product)
            }
            setSubmitForm(false);
        }

    }, []);

    return ( 

     );
}
 
export default useValidation;