import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import Car1 from './../../assets/images/gallery/car-1.jpg'
import Car2 from './../../assets/images/gallery/car-2.jpg'
import Car3 from './../../assets/images/gallery/car-3.jpg'
import Car4 from './../../assets/images/gallery/car-4.jpg'
import Car5 from './../../assets/images/gallery/car-5.jpg'
import Car6 from './../../assets/images/gallery/car-6.jpg'
import Car7 from './../../assets/images/gallery/car-7.jpg'
import Car8 from './../../assets/images/gallery/car-8.jpg'

const Gallery = () => {
    const images = [Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8].map((car) => ({
        src: car
    }))

  return (
    <Carousel images={images} />
  );
};

export default Gallery;