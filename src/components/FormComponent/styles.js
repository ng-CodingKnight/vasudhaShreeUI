import styled from 'styled-components';

export const Section = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 4rem;
    background: #212F3D;
   
`;

export const ImageSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    img {
        
        width: 100%;
        height: 100%;
    }
`;
export const FormSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px 2rem;
    color: #F7F9F9;  
`;
export const FormArea = styled.form`
    display: flex;
    flex-direction: column;

     h3 {
        margin-bottom: 1rem;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        
    }

    p {
        cursor: pointer;
        width: 100%;
        text-align: center;  
    }
`;