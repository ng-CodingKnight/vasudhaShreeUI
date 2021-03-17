import React from 'react'
import styled, { css } from 'styled-components';
import {
    TiSocialFacebook as fb,
    TiSocialTwitter as tw,
    TiSocialInstagram as ig,
    TiSocialYoutube as yt
} from 'react-icons/ti';

const ColorType = css`
    color: #D4AC0D;
    width: 40px;
    height: 40px;
    margin: 0 1rem;
    
`;

const Section = styled.div`
    margin-top: 1rem;
    background: #34495E;
    width: 100%;
    
`;
const Container = styled.div`
  display: flex;  
    
`;
const ColumnOne = styled.div`
    color: #FBFCFC;
    width: 100%
    
`;
const TagLine = styled.div`
    padding: 3rem 3rem;
    h1 {
        font-weight: bold;    
    }
`;
const Social = styled.div`
    margin-left: 3rem;
    display: inline-flex;        
`;

const FbIcon = styled(fb)`
    ${ColorType}
    
`;
const TwIcon = styled(tw)`
    ${ColorType}
`;
const IgIcon = styled(ig)`
    ${ColorType}
`;
const YtIcon = styled(yt)`
    ${ColorType}
`;

const ColumnTwo = styled.div`
    width: 50%;
    display: flex;
    margin-top: 2rem;
    padding: 1rem;
    color: #FBFCFC;
`;

const Title = styled.h3`
    margin-bottom: 1rem;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;

    p {
        margin-bottom: 1rem;
    }
`;


const RowData = styled.div`
   margin-left: 2rem;
   
`;


const Footer = () => {
    return (
        <Section>
            <Container>
                <ColumnOne>
                    <TagLine>
                        <h1>Let's Grow together,</h1>
                        <h1>Towards Sustainable Developement</h1>
                    </TagLine>
                    <Social>
                        <FbIcon />
                        <TwIcon />
                        <IgIcon />
                        <YtIcon />
                    </Social>
                </ColumnOne>
                <ColumnTwo>
                    <RowData>
                        <Title>Contact Us</Title>
                        <Options>
                            <p>FAQ</p>
                            <p>Support </p>
                            <p>Subscribe</p>
                        </Options>
                    </RowData>
                    <RowData>
                        <Title>Offices</Title>
                        <Options>
                            <p>India</p>
                            <p>Australia</p>
                            <p>Canada</p>
                        </Options>
                    </RowData>
                </ColumnTwo>
            </Container>
        </Section>
    )
}

export default Footer;
