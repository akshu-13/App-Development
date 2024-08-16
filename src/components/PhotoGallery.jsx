// src/components/PhotoGallery.js
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images here
import galleryImage1 from '../assets/images/girlnew.jpg';
import galleryImage2 from '../assets/images/img3.jpg';
import galleryImage3 from '../assets/images/land.jpg';
import galleryImage4 from '../assets/images/diwali.jpg';

const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4];

const PhotoGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', marginTop: '40px', marginBottom: '20px' }}>
      <Slider {...settings}>
        {galleryImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Gallery ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default PhotoGallery;
