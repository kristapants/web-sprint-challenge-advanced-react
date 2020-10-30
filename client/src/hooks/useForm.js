// write your custom hook here to control your checkout form
import { useState } from 'react';

export const UseForm = ( initialValue, setShowSuccessMessage ) => {

    const [values, setValues] = useState(initialValue)

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]:e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setShowSuccessMessage(true);
    };

    return [values, handleChange, handleSubmit]

};

export default UseForm;