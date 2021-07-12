import React, { useState } from 'react';
import PageIntro from '../../components/UI/PageIntro/PageIntro';
import Description from '../../components/UI/Description/Description';
import Title from '../../components/UI/Title/Title';
import InfoSection from '../../components/InfoSection/InfoSection';
import Modal from '../../components/UI/Modal/Modal';
import { ServicesIntro, serviceList } from '../../data/servicesData';
import './Services.scss';
import SmallFooter from '../../components/SmallFooter/SmallFooter';
import { Button } from '../../components/UI/Button';

const Services = () => {
    const [selectedService, setSelectedService] = useState({
        id: null,
        title: '',
        image: '',
        imageGrid: [],
        reverse: false,
        animate: 'fade-left',
        path: `/`

    });
    const [showModal, setShow] = useState(false);

    const showServiceModal = service => {
        setSelectedService(service)
        setShow(true)
    }

    return (
        <div className="service-container">
            <Modal show={showModal} closed={() => setShow(false)}>
                <div className="service-dialog">
                    <Title title={selectedService.title} />
                    <div className="service-dialog__images">
                        {selectedService.imageGrid.map((item, index) => {
                            return <img src={item} key={index} alt={`img-${index}`} />
                        })}
                    </div>
                    <Button primary="true" onClick={() => setShow(false)}>OK</Button>
                </div>
            </Modal>
            <PageIntro imageProp={ServicesIntro.imageSrc} title={ServicesIntro.title} />
            <Description content={ServicesIntro.desc} />
            <Title title='Services Offered By VasudhaShree' />
            <div className="service-container__list">
                {
                    serviceList.map(item => {
                        return <InfoSection data={item} animate={item.animate} clicked={() => showServiceModal(item)} />
                    })
                }
            </div>
            <SmallFooter />
        </div>
    )
}

export default Services
