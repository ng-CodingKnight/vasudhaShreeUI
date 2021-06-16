import React, { useState } from 'react';


const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
        email: '',
        query: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
        alert('called')
    } 

    return { handleChange, values, handleSubmit };
}

export default useForm;
