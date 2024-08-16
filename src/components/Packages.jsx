// src/components/Packages.js
import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow'; // Import the Slideshow component
import ApiIcon from '@mui/icons-material/Api';
import { BrandPartners } from './BrandPartners'; // Import the brand partners data
import Footer from './Footer';

// Custom theme to override default typography
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Change to your desired font
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

const Packages = () => {
  const pageStyles = {
    backgroundColor: '#C4DFE6',
    minHeight: '100vh',
    padding: '40px',
    paddingTop: '100px', // Adjust this value based on the height of your AppBar
  };

  const appBarStyles = {
    backgroundColor: '#66A5AD',
    position: 'fixed', // Make the AppBar fixed
    width: '100%', // Ensure the AppBar covers the full width of the page
    top: 0, // Stick to the top
    left: 0,
  };

  const imageStyle = {
    width: '100%',
    height: '200px', // Set a fixed height
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const galleryBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66A5AD',
    padding: '10px',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)', // Slide up effect
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
    },
  };

  const gallerySectionStyle = {
    background: '#C4DFE6', // Gradient color
    padding: '70px',
    paddingBottom: '8px', // Adjust the bottom padding
    textAlign: 'center',
    color: 'white',
  };

  const titleStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
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

  const buttonStyles = {
    backgroundColor: '#66A5AD',
    '&:hover': {
      backgroundColor: 'green',
    },
    marginTop: '20px', 
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={pageStyles}>
        {/* Header */}
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
            <ApiIcon />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Our Photography Packages (Overseas)
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Slideshow */}
        <Slideshow />

        {/* Contact Us Button */}
        <Container sx={buttonContainerStyles}>
          <Button
            component={Link}
            to="/address-map"
            variant="contained"
            sx={buttonStyles}
          >
            View Locations!
          </Button>
        </Container>

        {/* Packages Content */}
        <Container>
          <Typography variant="h3" gutterBottom>
            <br></br>
            Explore Our Packages
          </Typography>
          <Typography variant="body1" gutterBottom>
            We offer a variety of packages to meet your photography needs. Whether you're looking for a quick session or a comprehensive package, we have something for everyone.<br></br>
            <b>Customise your own package now!</b>
          </Typography>
        </Container>

        <Box sx={gallerySectionStyle}>
          <Container>
            <Grid container spacing={4}>
              {/* Box 1 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://jessmorganphotography.co.uk/wp-content/uploads/2016/01/London_Landmarks_Vacation_Family_Photo_Shoot_Jess_Morgan-scaled.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    The United Kingdom
                  </Typography>
                </Box>
              </Grid>
              {/* Box 2 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://zowed.com/blog/wp-content/uploads/2017/10/Ialamphoto-02-Love-Purity-Happiness-Prosperity.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    USA
                  </Typography>
                </Box>
              </Grid>
              {/* Box 3 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://www.opicxo.com/images/uploaded/South%20Indian%20Wedding/Laughter_-the-Best-Music.jpeg" alt="GalleryImage1" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    India
                  </Typography>
                </Box>
              </Grid>
              {/* Box 4 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://theparisianphotographers.com/wp-content/uploads/2021/03/10-3836-post/cute-girls-family-portrait-paris-eiffel-tower.jpg" alt="GalleryImage2" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    France
                  </Typography>
                </Box>
              </Grid>
              {/* Box 5 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://b1561555.smushcdn.com/1561555/wp-content/uploads/2022/07/Wengen-switzerland-with-kids-1024x853.jpg?lossy=1&strip=1&webp=1" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Switzerland
                  </Typography>
                </Box>
              </Grid>
              {/* Box 6 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e2/08/5b.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Thailand
                  </Typography>
                </Box>
              </Grid>
              {/* Box 7 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://www.travelandleisure.com/thmb/6rAXu2YdK34P4bZmmkC6KRTm92c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mother-son-maldives-vacation-MALDIVEMISS0820-aecf8960655243e8b0ef311082a92729.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Maldives
                  </Typography>
                </Box>
              </Grid>
              {/* Box 8 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://imageio.forbes.com/specials-images/imageserve/63ebac332a5cdaa42a226ab7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Italy
                  </Typography>
                </Box>
              </Grid>
              {/* Box 9 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2021/01/Happy-asian-family-posing-for-picture-with-view-on-skyline-of-HongKong-from-The-Peak-observation-deck.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    China
                  </Typography>
                </Box>
              </Grid>
              {/* Box 10 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://tallgirlbigworld.com/wp-content/uploads/2019/08/Schloss-Schwerin.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Germany
                  </Typography>
                </Box>
              </Grid>
              {/* Box 11 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://www.shutterstock.com/image-photo/couple-on-holidays-enjoys-panoramic-600nw-2386280697.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Dubai
                  </Typography>
                </Box>
              </Grid>
              {/* Box 12 */}
              <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                  <img src="https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2021/01/Happy-asian-family-posing-for-picture-with-view-on-skyline-of-HongKong-from-The-Peak-observation-deck.jpg" alt="GalleryImage3" style={imageStyle} />
                  <Typography variant="body2" color="inherit" sx={titleStyle}>
                    Singapore
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box sx={{ ...gallerySectionStyle, paddingTop: '20px', paddingBottom: '80px' }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: '20px', fontFamily: 'Georgia, serif', color: 'black' }}>
            Our Partnerships
          </Typography>
          {/* Marquee Section */}
          <Box sx={marqueeStyles}>
            <marquee scrollamount="6" behavior="scroll" direction="left">
              {BrandPartners.map((partner, key) => (
                <Box sx={marqueeItemStyles} key={key}>
                  <img src={partner.image} alt={`Brand Partner ${key + 1}`} style={imageStyles} />
                </Box>
              ))}
            </marquee>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </ThemeProvider>
  );
};

export default Packages;
