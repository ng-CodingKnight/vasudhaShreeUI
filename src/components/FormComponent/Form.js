import React from 'react';
import { useFormik } from 'formik';
import { Section, ImageSection, FormArea, TextField, TextArea, Submit } from './styles';
import formImage from '../../assets/images/form-image.jpg';
import { Card } from '../UI/Card';


const Form = (props) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            phone: '',
            email: '',
            query: ''
        },
        onSubmit: values => {
            alert('called');
            console.log(values)
        },

        handleSubmit : e => {
            e.preventDefault();
            alert('called');
        }
    });

    return (
        <Section>
            <Card reverse={false}>
                <ImageSection>
                    <img src={formImage} alt="form" />
                </ImageSection>
                <FormArea>
                    <h3>Join US Today, Start by filling up the Form</h3>
                    <form onSubmit={formik.handleSubmit} >
                        <TextField id='username' name='username' placeholder='Name' type='text' value={formik.values.username} onChange={formik.handleChange} />
                        <TextField id='phone' name='phone' placeholder='Phone' type='number' value={formik.values.phone} onChange={formik.handleChange} />
                        <TextField id='email' name='email' placeholder='Email' type='email' value={formik.values.email} onChange={formik.handleChange} />
                        <TextArea id='query' name='query' placeholder='write something about your query' value={formik.values.query} type='text' onChange={formik.handleChange} />
                        <Submit type='button' >Connect</Submit>
                    </form>
                    <p onClick={props.closed}>Cancel</p>
                </FormArea>
            </Card>
        </Section>
    )
}

export default Form;
