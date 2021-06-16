import styled, { css } from 'styled-components';

const entry = css`
    margin: 1rem 0.5rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 35px;
    padding: 1rem;

    ::placeholder {
       color: #1C1C1C;
       font-weight: bold;
   }
    
`;

export const Section = styled.div`
    height: 100%;
    width: 100%;
    background: #333;   
`;

export const ImageSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
   
    img { 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    padding: 8px 2rem;
    color: #f4f4f4; 
    
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

export const TextField = styled.input`
   ${entry}    
`;

export const TextArea = styled.textarea`
   ${entry}
   height: 100px;
`;

export const Submit = styled.button`
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