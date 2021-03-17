import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { Button } from '../UI/Button';
import { IoMdArrowRoundForward as arrow } from 'react-icons/io';
import { Card } from '../UI/Card';

const InfoSection = (props) => {

    return (
        <Section id={props.idValue}>
            <Card reverse={props.data.reverse}>
                <ColumnLeft>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.paragraph}</p>
                    <Button to={props.data.path} primary='true'>
                        Go to {props.data.label}
                        <Arrow />
                    </Button>
                </ColumnLeft>
                <ColumnRight>        
                    <img src={props.data.image} alt='home' /> 
                </ColumnRight>
            </Card>
        </Section>
    )
}


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;

`;
  
const ColumnLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    p {
        margin: 1rem 0;
    }
`;

const ColumnRight = styled.div`
    position: relative;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   
    img {
        object-fit: cover;
        padding: 1rem;
        width: 100%;
        height: 100%;  
        
           
    }

`;

const Arrow = styled(arrow)`
    margin-left: 0.4rem;
`;




export default InfoSection
