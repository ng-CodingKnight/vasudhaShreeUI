import image1 from '../assets/Services/services-intro.jpeg';
import gardenImg from '../assets/Services/GardenFarming.jpeg';
import largescaleImg from '../assets/Services/largeScale.jpeg';
import hydroponicImg from '../assets/Services/hydroponicSetup.jpeg';
import orgImg from '../assets/Services/organic.jpeg';

import hydro1 from '../assets/Services/hydroponic-1.jpeg';
import hydro2 from '../assets/Services/hydroponic-2.jpeg';
import hydro3 from '../assets/Services/hydroponic-3.jpeg';

import terrace1 from '../assets/Services/terrace-1.jpeg';
import terrace2 from '../assets/Services/terrace-2.jpeg';
import terrace3 from '../assets/Services/terrace-3.jpeg';

import Org1 from '../assets/Services/organic-1.jpeg';
import Org2 from '../assets/Services/organic-2.jpg';
import Org3 from '../assets/Services/organic-3.jpeg';

import large1 from '../assets/Services/large-1.jpg';
import large2 from '../assets/Services/large-2.jpg';
import large4 from '../assets/Services/large-4.jpg';

export const ServicesIntro = {
    imageSrc: image1,
    title: 'Services',
    desc: 'We are Providing Best Agro Services for All Kind of Customers. From Large Scale Farmings in Acres of land to Garden Farm Setup in terrrace.'
}

export const serviceList = [
    {
        id: 1,
        title: 'Hydroponic Setup',
        image: hydroponicImg,
        imageGrid: [hydro1, hydro2, hydro3],
        reverse: false,
        animate: 'fade-left',
        path: `/`
    },
    {
        id: 2,
        title: 'Terrace Gardeneing and landscapping Consultancy',
        image: gardenImg,
        imageGrid: [terrace1, terrace2, terrace3],
        reverse: true,
        animate: 'fade-right',
        path: `/`
    },
    {
        id: 3,
        title: 'Organic Farming Consultancy',
        image: orgImg,
        imageGrid: [Org1, Org2, Org3],
        reverse: false,
        animate: 'fade-left',
        path: `/`
    },
    {
        id: 4,
        title: 'Large Scale Farming Consultancy',
        image: largescaleImg,
        imageGrid: [large1, large2, large4],
        reverse: true,
        animate: 'fade-right',
        path: `/`
    }

]