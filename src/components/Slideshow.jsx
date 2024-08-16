
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import image1 from '../assets/images/pack.png';
import image2 from '../assets/images/pack2.png';

const images = [
  image1,
  image2,
  image1,
  image2,
];

const Slideshow = () => {
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

export default Slideshow;
