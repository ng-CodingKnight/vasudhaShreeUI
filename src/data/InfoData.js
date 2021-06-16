import cropImg from '../assets/images/crop-1.jpg'
import productImage from '../assets/images/products.jpg'
import researchImage from '../assets/images/R&D.jpg'

export const InfoDataOne = {
    title : 'Services',
    paragraph : 'Farming Assitance for various farming Styles.',
    path : '/services',
    label: 'Services',
    image : cropImg,
    reverse: false
}

export const InfoDataTwo = {
    title : 'Products',
    paragraph : 'Suitable products for Sustainable Farming',
    path : '/products',
    label: 'Products',
    image : productImage,
    reverse: true
}

export const InfoDataThree = {
    title : 'Research and Developement',
    paragraph : 'We thrive on Innovation for a better future',
    path : '/r&d',
    label: 'R & D',
    image : researchImage,
    reverse: false
}