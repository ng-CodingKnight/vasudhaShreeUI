import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { IoMdArrowRoundForward as arrow } from 'react-icons/io';
import { Card } from '../UI/Card';


const InfoSection = (props) => {

    useEffect(() => {
        Aos.init({
          duration : 2000,
          once: false
        })
      }, [])

    return (
        <Section id={props.idValue}>
            <Card reverse={props.data.reverse}>
                <ColumnLeft reverse={props.data.reverse}>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.paragraph}</p>
                    <Button to={props.data.path} primary='true'>
                        Go to {props.data.label}
                        <Arrow />
                    </Button>
                </ColumnLeft>
                <ColumnRight data-aos={props.animate}>        
                    <img src={props.data.image} alt='home' /> 
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
