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

    }, [errors]);

    // Function that runs when the user writes something
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // Function that runs when the user press submit
    const handleSubmit = e => {
        e.preventDefault(); 
        const errorsValidation = validate(values);
        setErrors(errorsValidation);
        setSubmitForm(true);
    }

    // when user makes blur event
    const handleBlur = () => {
        console.log('En handleBlur')
        const errorsValidation = validate(values);
        setErrors(errorsValidation);
    }

    return {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidation;