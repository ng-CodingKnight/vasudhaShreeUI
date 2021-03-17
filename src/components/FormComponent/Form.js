import React from 'react';
import { Section,  ImageSection, FormSection, FormArea } from './styles';
import formImage from '../../assets/images/form-image.jpg';
import { Card } from '../UI/Card';
import FormikFile from './FormikFile';


const Form = (props) => {
    return (
        <Section>
            <Card reverse={false}>
                <ImageSection>
                    <img src={formImage} alt="form" />
                </ImageSection>
                <FormSection>
                    <FormArea>
                        <h3>Join US In this Journey Today, Start by filling up this Form</h3>
                        <FormikFile clicked={props.closed}/>
                        <p onClick={props.closed}>Cancel</p>
                    </FormArea>
                </FormSection>
            </Card>
        </Section>
    )
}

export default Form;
