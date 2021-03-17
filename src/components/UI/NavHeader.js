import styled from 'styled-components';

export const NavHeader = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    padding: 1rem 2rem;
    margin: auto;
    position: fixed;  
    background: ${({ isscroll }) => ( isscroll ? '#FCF3CF' : 'transparent')};
    

    @media screen and (max-width: 768px) {
        background: #f4f4f4;
    }
`;