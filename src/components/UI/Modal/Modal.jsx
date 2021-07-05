import React, { Fragment } from 'react';
import Backdrop from '../Backdrop';
import './Modal.scss';

const Modal = ({ show, closed, children }) => {

    return (
        <Fragment>
            <Backdrop show={show} closed={closed} />
            <div className={`modal-container ${show ? 'modal-container--show' : 'modal-container--hide'}`}>
                {children}
            </div>
        </Fragment>

    )
}

export default Modal
