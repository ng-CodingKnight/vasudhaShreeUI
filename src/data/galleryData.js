import img1 from '../assets/Gallery/glr-img1.jpg';
import img2 from '../assets/Gallery/glr-img2.jpg';
import img3 from '../assets/Gallery/glr-img3.jpg';
import img4 from '../assets/Gallery/glr-img4.jpg';
import img5 from '../assets/Gallery/glr-img5.jpg';
import img6 from '../assets/Gallery/glr-img6.jpg';
import img7 from '../assets/Gallery/glr-img7.jpg';
import img8 from '../assets/Gallery/glr-img8.jpg';
import img9 from '../assets/Gallery/glr-img9.jpg';

import glr1 from '../assets/Gallery/glr-1.JPG';
import glr2 from '../assets/Gallery/glr-2.JPG';
import glr4 from '../assets/Gallery/glr-4.JPG';
import glr5 from '../assets/Gallery/glr-5.JPG';
import glr6 from '../assets/Gallery/glr-6.jpeg';
import glr7 from '../assets/Gallery/glr-7.jpeg';
import glrIntro from '../assets/Gallery/glry-intro.jpeg';



export const galleryData = [
    { title: 'wheat', image: img1 },
    { title: 'garden-1', image: img2 },
    { title: 'garden-3', image: img3 },
    { title: 'veg-1', image: img4 },
    { title: 'veg-2', image: img5 },
    { title: 'veg-3', image: img6 },
]

export const galleryIntro = {
    imageSrc: glrIntro,
    title: 'Image Gallery',
    desc: 'This Section is all about sharing the moments which are crucial and important for vasudhashree. Various Team Visits, Training, Meetings etc have helped vasudhashree to form a greater connection with farmers, stakeholders and among us',
}

export const gallerySections = [
    {
        id: 1,
        title: 'NABARD Team Factory Visit, Farmer & Team Meetings.',
        imageList: [
            glr1, glr2, glr4, glr5, glr6, glr7
        ]
    },
    {
        id: 2,
        title: 'Work In Progress',
        imageList: [
            img7, img8, img9
        ]
    }
]


