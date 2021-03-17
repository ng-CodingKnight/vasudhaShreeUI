import React from 'react'
import styled from 'styled-components';
import { useField, ErrorMessage } from 'formik';

const Input = styled.input`
    margin: 1rem 0.5rem;
    width: 100%;
    border: ${({meta}) => (meta.touched && meta.error ? '1px solid red' : 'none')};
    border-radius: 5px;
    height: 35px;
    padding: 1rem;
`;

const ErrorSection = styled(ErrorMessage)`
    position: relative;
    text-align: center;
    color: #C0392B;
    font-size: medium;
`;


const TextField = (props) => {
    const [field, meta] = useField(props);
    return (
        <React.Fragment>
            <Input {...field} {...props} meta={meta}/>
            <ErrorSection name={field.name} />
        </React.Fragment>
    )
}

export default TextField
