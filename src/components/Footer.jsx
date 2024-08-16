// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  // Styles for the footer
  const footerStyles = {
    backgroundColor: '#66A5AD',
    color: '#FFFFFF',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
  };

  
  const iconStyles = {
    margin: '0 10px',
    color: '#fff',
    fontSize: '2rem',
  };

  // Styles for typography
  const typographyStyles = {
    fontSize: '1.2rem', 
  };

  return (
    <Box sx={footerStyles}>
      <Container>
        <Typography variant="body2" sx={typographyStyles}>
          <IconButton href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon sx={iconStyles} />
          </IconButton>
          <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={iconStyles} />
          </IconButton>
          <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={iconStyles} />
          </IconButton>
        </Typography>
        <Typography variant="body2" sx={typographyStyles}>Contact: +91 9326581362</Typography>
        <Typography variant="body2" sx={typographyStyles}>Mail us: photostudio@example.com</Typography>
        <Typography variant="body2" sx={typographyStyles}>&copy; 2023 Photo Studio. All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
