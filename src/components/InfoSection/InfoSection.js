import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { IoMdArrowRoundForward as arrow } from 'react-icons/io';
import { Card } from '../UI/Card';
import { Link } from 'react-router-dom';


const InfoSection = ({ data, animate }) => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false
        })
    }, [])

    return (
        <Section>
            <Card reverse={data.reverse}>
                <ColumnLeft reverse={data.reverse}>
                    <h1>{data.title}</h1>
                    <p>{data.paragraph}</p>
                    {
                        data.path &&
                        <Button primary='true'>
                            <Link to={data.path}>
                                {data.label ? `Go to ${data.label}` : 'Learn More'}
                                <Arrow />
                            </Link>
                        </Button>
                    }
                </ColumnLeft>
                <ColumnRight data-aos={animate}>
                    <img src={data.image} alt='home' />
                </ColumnRight>
            </Card>
        </Section>
    )
}


const Section = styled.section`
    width: 100%;
    height: 80vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const ColumnLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    box-sizing: border-box;
    box-shadow: ${({ reverse }) => (reverse ? '-15px 11px 28px -2px rgba(39,125,33,0.74)' : '15px 11px 28px -2px rgba(39,125,33,0.74)')};
    p {
        margin: 1rem 0;
    }
`;

const ColumnRight = styled.div`

    position: relative;
    padding: 1rem 2rem;
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
