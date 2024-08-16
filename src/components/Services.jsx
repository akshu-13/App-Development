import React from 'react';
import { Box, AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ApiIcon from '@mui/icons-material/Api';
import Footer from './Footer';
import CheckoutAddress from './CheckoutAddress';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontFamily: 'Georgia, serif', 
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Verdana, sans-serif',
    },
    body2: {
      fontFamily: 'Tahoma, sans-serif',
    },
  },
});

const Services = () => {
  const pageStyles = {
    backgroundColor: '#C4DFE6',
    minHeight: '100vh',
    padding: '40px',
    paddingTop: '80px',
  };

  const appBarStyles = {
    backgroundColor: '#66A5AD',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const galleryBoxStyle = {
    width: '90%',
    backgroundColor: '#66A5AD',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden', 
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
      transform: 'translateY(-10px)', 
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
    },
  };

  const gallerySectionStyle = {
    background: '#C4DFE6',
    padding: '70px',
    textAlign: 'center',
    color: 'black',
  };

  const titleStyle = {
    fontSize: '1rem',
    color: 'white',
    fontFamily: 'Georgia, serif', 
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={pageStyles}>
        {/* Header */}
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
            <ApiIcon />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Our Photography Services
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Services Content */}
        <Box sx={gallerySectionStyle}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Discover Our Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              We provide a wide range of photography services to capture your special moments. From weddings to corporate events, our team of professionals is here to make your memories last forever.<br />
              <b>Contact us to learn more!</b>
            </Typography>

            <Grid container spacing={4}>
              {/* Box 1 */}
              <Grid item xs={12} md={6}>
                <Link to="/living-room" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://www.brides.com/thmb/P_fjTvNNpjAauuiXN4N_2dKgHSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MonisCorey-467_Mehndi-adfcfac6c7674fc59301cdcddf65df07.jpg"
                      alt="GalleryImage1"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Weddings
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {/* Box 2 */}
              <Grid item xs={12} md={6}>
                <Link to="/wardrobe" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/55f47117e4b067360e9ca0b2/1627896964733-22BJ1CCIQL1JWE5KKBVG/2nd_second_birthday_celebration_baby_girl_delhi_candid_photography_008.jpg?format=2500w"
                      alt="GalleryImage2"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Birthday Parties
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {/* Box 3 */}
              <Grid item xs={12} md={6}>
                <Link to="/bed-room" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://ideas.hallmark.com/wp-content/uploads/2023/06/16906_UltimateSurprise_6.jpg"
                      alt="GalleryImage3"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Surprise Parties
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {/* Box 4 */}
              <Grid item xs={12} md={6}>
                <Link to="/bath-room" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2022/10/cultural-festivals.jpg"
                      alt="GalleryImage4"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Overseas Tales
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {/* Box 5 */}
              <Grid item xs={12} md={6}>
                <Link to="/compact-homes" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://www.thewedcafe.com/wp-content/uploads/2019/10/prewedding.jpg"
                      alt="GalleryImage5"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Pre-Wedding Shoots
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {/* Box 6 */}
              <Grid item xs={12} md={6}>
                <Link to="/work-studio" style={{ textDecoration: 'none' }}>
                  <Box sx={galleryBoxStyle}>
                    <img
                      src="https://www.fredericpaulussen.be/wp-content/uploads/2020/05/photography-prices-for-events.jpg"
                      alt="GalleryImage6"
                      style={imageStyle}
                    />
                    <Typography sx={titleStyle}>
                      Professional Events
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <CheckoutAddress/>
      <Footer/>
    </ThemeProvider>
  );
};

export default Services;
