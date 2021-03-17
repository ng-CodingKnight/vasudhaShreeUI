import React from 'react';
import styled from 'styled-components';
import { Formik, Form, useFormik} from 'formik';
import TextField from './TextField'
import * as Yup from 'yup';

const Submit = styled.button`
    margin: 1rem 0.5rem;
    background: #21618C;
    color: #F7F9F9;
    transition: 0.3s;
    height: 50px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 1rem;
        
    &:hover {
            background: #2E86C1;
            transform: translateY(-3px);
        }
`;

const FormikFile = (props) => {

    const formik = useFormik({
        initialValues : {
            fullName: '',
            phone: '',
            email: '',
            eassword: '',
            confirmPassword: ''
        },
        onSubmit(values) {
            console.log(values)
        }
    })

    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Enter Only 15 Characters')
            .required('This field is required'),
        phone: Yup.number()
            .min(10, 'Enter all 10 Digits')
            .required('This field is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('This field is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 Characters long')
            .required('This field is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('Password'), null], 'Entry Should match Password')
            .required('This field is required'),
    })

   
    return (
        <Formik
            
            validationSchema={validate}
        >
            {formik => (
                <Form>
                    <TextField name='fullName' placeholder='Name' type='text' value={formik.value.fullName}/>
                    <TextField name='phone' placeholder='Phone' type='number' value={formik.value.phone}/>
                    <TextField name='email' placeholder='Email' type='email' value={formik.value.email}/>
                    <TextField name='password' placeholder='Password' type='password' value={formik.value.password}/>
                    <TextField name='confirmPassword' placeholder='Confirm Password' type='password' value={formik.value.confirmPassword}/>
                    <Submit type='submit' onClick={props.clicked}>Connect</Submit>
                </Form>
            )}
        </Formik>
    )
}

export default FormikFile
