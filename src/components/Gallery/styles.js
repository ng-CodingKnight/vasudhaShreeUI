import styled from 'styled-components';

export const GallerySection = styled.section`
    margin: 1rem 0.5rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
export const GalleryTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 1rem;
`;
export const ImageWrapper = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
`;
export const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05)
    }
    
`;
