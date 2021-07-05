import React, { Fragment, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Modal from '../UI/Modal/Modal';
import Form from '../FormComponent/Form';

const Header = () => {
    let [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <Fragment>
            <Navbar clicked={openForm} isHomePage={true} />
            <Modal show={showForm} closed={closeForm}>
                <Form closed={closeForm} />
            </Modal>
        </Fragment>
    )
}

export default Header
