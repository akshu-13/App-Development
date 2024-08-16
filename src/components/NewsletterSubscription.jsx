import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NewsletterSubscription = () => {
  const [subscribed, setSubscribed] = useState(false);

  const subscriptionBoxStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const textFieldStyles = {
    marginBottom: '20px',
  };

  const buttonStyles = {
    backgroundColor: '#66A5AD',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#559599',
    },
    marginBottom: '20px',
  };

  const iconStyles = {
    color: '#66A5AD',
    margin: '0 10px',
  };

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <Box sx={subscriptionBoxStyles}>
      {!subscribed ? (
        <>
          <Typography variant="h5" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <Typography variant="body1" gutterBottom>
            Stay updated with the latest news and special offers.
          </Typography>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={textFieldStyles}
          />
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
          <Box>
            <IconButton
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyles}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyles}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyles}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </>
      ) : (
        <Typography variant="h6" gutterBottom>
          Thank You for Subscribing!
        </Typography>
      )}
    </Box>
  );
};

export default NewsletterSubscription;
