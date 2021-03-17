import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    height: 100%;
`;