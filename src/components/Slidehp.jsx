// src/components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import local images
import image1 from '../assets/images/work5.jpg';
import image2 from '../assets/images/work6.jpg';
import image3 from '../assets/images/work9.jpg';
import image4 from '../assets/images/work10.png';

const images = [
  image1,
  image2,
  image3,
  image4,
];

const Slidehp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  const imgStyles = {
    width: '700px', 
    height: '400px', 
    margin: '0 auto', 
    display: 'block',
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} style={imgStyles} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Slidehp;
