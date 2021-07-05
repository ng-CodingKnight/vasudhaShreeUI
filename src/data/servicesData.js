import image1 from '../assets/Services/services-intro.jpeg';
import gardenImg from '../assets/Services/GardenFarming.jpeg';
import largescaleImg from '../assets/Services/largeScale.jpeg';
import hydroponicImg from '../assets/Services/hydroponicSetup.jpeg';
import orgImg from '../assets/Services/organic.jpeg';

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
        imageGrid: [],
        reverse: false,
        animate: 'fade-left',
        path: '/'
    },
    {
        id: 2,
        title: 'Terrace Gardenein and landscapping Consultancy',
        image: gardenImg,
        imageGrid: [],
        reverse: true,
        animate: 'fade-right',
        path: '/'
    },
    {
        id: 3,
        title: 'Organic Farming Consultancy',
        image: orgImg,
        imageGrid: [],
        reverse: false,
        animate: 'fade-left',
        path: '/'
    },
    {
        id: 4,
        title: 'Large Scale Farming Consultancy',
        image: largescaleImg,
        imageGrid: [],
        reverse: true,
        animate: 'fade-right',
        path: '/'
    }

]