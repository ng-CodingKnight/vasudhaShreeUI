
import React from 'react'
import styled from 'styled-components';
import { teamData } from '../../data/teamData';
import { Button } from '../UI/Button';
import { IoMdArrowRoundForward as arrow } from 'react-icons/io';

const Section = styled.section`
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
const Start = styled.h1`
    text-align: center;
    width: 100%;
    font-weight: bold;
    
`;
const ColumnOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 2rem;
    width: 100%;
    
    img {
        width: 100%;
        height: 100%;
        padding: 2rem 4rem;
        object-fit: cover;   

        &:hover{
            transition: 0.3s; 
            transform: translateY(-5px);
            cursor: pointer;
        }
        
    }
`;

const ColumnTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    
    
    p {
        margin-bottom: 1rem;
    }
`;
const Arrow = styled(arrow)`
    margin-left: 1rem;
`;


const About = (props) => {
    return (
        <Section id={props.idValue}>
            <Container>
                <Start>This is Us</Start>
                <ColumnOne>
                    {teamData.map((item, index) => {
                        return (
                            <Intro key={index}>
                                <img src={item.image} alt="leadership" />
                                <h2>{item.name}</h2>
                                <h3>{item.designation}</h3>
                            </Intro>
                        )
                    })}
                </ColumnOne>
                <ColumnTwo>
                    <p> We have a dedicated team of innovators, who always works together for our clients. </p>
                    <Button primary='true'>Learn More <Arrow /></Button>
                </ColumnTwo>
            </Container>
        </Section>
    )
}


export default About;
