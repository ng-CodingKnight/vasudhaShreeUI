import React from 'react'
import styled from 'styled-components';

const BackdropSection = styled.div`
    width: 100%;
    height: 100%;
    z-index: 200;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);

`;

const Backdrop = (props) => {
    return (
       props.show ?  <BackdropSection onClick={props.closed}></BackdropSection> : null
    )
}

export default Backdrop
