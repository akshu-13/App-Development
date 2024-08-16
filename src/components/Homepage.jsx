import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, ThemeProvider, createTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ApiIcon from '@mui/icons-material/Api';
import diwali from '../assets/images/diwali.jpg';
import QuotesSection from './QuotesSection';
import { BrandPartners } from './BrandPartners';
import LoginIcon from '@mui/icons-material/Login';
import Footer from './Footer';
import axios from 'axios';


import '@fontsource/poppins';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontFamily: 'Poppins, Arial, sans-serif', 
      fontWeight: 700,
      fontSize: '2.5rem', 
    },
    body1: {
      fontFamily: 'Verdana, sans-serif',
    },
    body2: {
      fontFamily: 'Tahoma, sans-serif',
    },
    button: {
      fontSize: '1.2rem', 
    },
    h4: {
      fontFamily: 'Georgia, serif',
    },
  },
});

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/user/status'); // Replace with actual status endpoint
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/user/signout');
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '250vh',
    backgroundColor: '#C4DFE6',
  };

  
  const contentStyles = {
    flex: '1',
    padding: '40px',
    textAlign: 'center',
    backgroundImage: `url(${diwali})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

 
  const welcomeBoxStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '60px', 
    borderRadius: '10px',
    display: 'inline-block',
    textAlign: 'center',
    color: '#fff',
    marginTop: '80px', 
  };

 
  const buttonStyles = {
    backgroundColor: '#66A5AD',
    '&:hover': {
      backgroundColor: '#559599',
    },
  };

  
  const appBarStyles = {
    backgroundColor: '#66A5AD',
  };

 
  const marqueeStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginTop: '20px',
  };

  
  const marqueeItemStyles = {
    display: 'inline-block',
    padding: '10px',
  };

  
  const imageStyles = {
    height: '100px',
    width: 'auto',
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={pageStyles}>
        {/* Navbar */}
        <AppBar position="static" sx={appBarStyles}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ApiIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              LightWave Photo Studio
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600 
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/packages"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600
              }}
            >
              Packages
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/services"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600 
              }}
            >
              Customer Gallery
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/blog"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600
              }}
            >
              Blogs
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/workshops"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600 
              }}
            >
              Workshops
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/tourism-places/cbe"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600 
              }}
            >
              Location
            </Button>
            {isLoggedIn && (
              <Button
                color="inherit"
                onClick={handleSignout}
                sx={{ 
                  fontFamily: 'Poppins, Arial, sans-serif',
                  fontWeight: 600 
                }}
              >
                Sign Out
              </Button>
            )}
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{ 
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 600 
              }}
            >
             
              <LoginIcon />
            </Button>
          </Toolbar>
        </AppBar>
        
        {/* Homepage Content */}
        <Box sx={contentStyles}>
          <Box sx={welcomeBoxStyles}>
            <Typography variant="h3" gutterBottom>LightWave Studios!</Typography>
            <Typography variant="body1" gutterBottom>
              Capture your moments with us. Explore our services and packages.
            </Typography>
            <Button variant="contained" sx={buttonStyles} component={Link} to="/contact-us">
              Call Us Now!
            </Button>
          </Box>
        </Box>

        {/* Quotes */}
        <QuotesSection />
              
        {/* Marquee */}
        <Box sx={marqueeStyles}>
          <marquee scrollamount="6" behavior="scroll" direction="left">
            {BrandPartners.map((partner, key) => (
              <Box sx={marqueeItemStyles} key={key}>
                <img src={partner.image} alt={`Brand Partner ${key + 1}`} style={imageStyles} />
              </Box>
            ))}
          </marquee>
        </Box>

        {/* Footer */}
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
