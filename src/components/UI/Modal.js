import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const ModalSection = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  box-shadow: 1px 1px 1px black;
  left: 15%;
  top: 10%;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
`;

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} closed={props.closed} />
      <ModalSection
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </ModalSection>
    </React.Fragment>
  );
};

export default Modal;
