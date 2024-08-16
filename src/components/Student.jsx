import React, { useState } from 'react';
import { Box, AppBar, Container, Grid, Toolbar, Typography, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApiIcon from '@mui/icons-material/Api';
import Footer from './Footer';
import Slidehp from './Slidehp';
import Slideshow from './Slideshow';
import { useNavigate } from 'react-router-dom'; 


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontFamily: 'Georgia, serif',
      fontWeight: 400, 
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

const Student = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const navigate = useNavigate(); 
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

  const collegeBoxStyle = (hoverColor) => ({
    width: '90%',
    backgroundColor: '#66A5AD',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    color: '#fff',
    '&:hover': {
      backgroundColor: hoverColor,
      color: '#000000',
      transform: 'translateY(-10px)',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
    },
  });

  const gallerySectionStyle = {
    background: '#C4DFE6',
    padding: '70px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#66A5AD',
    color: '#fff', 
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#5592a1', 
    },
  };

  const collegeDetails = [
    {
      name: 'Sri Krishna College of Engineering and Technology',
      location: 'Coimbatore, TamilNadu',
      details: 'Connect via Campus: campus@skcet.ac.in',
      hoverColor: '#a7bed3',
    },
    {
      name: 'IIT Madras',
      details:'Connect via Campus: techno@mit.it.in' ,
      location: 'Chennai, TamilNadu',
      hoverColor:'#a7bed3', 
    },
    {
      name: 'NIT Trichy',
      details: 'Connect via Campus: nitteichy@nit.tri.in',
      location: 'Tiruchirappalli, TamilNadu',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'IIT Bombay',
      details: 'Connect via Campus: iitbombay@bombay.in',
      location: 'Mumbai, Maharashtra',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'BITS Pilani',
      details: 'Connect via Campus: bitsp@bits.ts.in',
      location: 'Pilani, Rajasthan',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'IIT Kanpur',
      details: 'Connect via Campus: iitk@kanpur,ki.in',
      location: 'Kanpur, Uttar Pradesh',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'NIT Warangal',
      details: 'Connect via Campus: campus@nitw.ac.in',
      location: 'Warangal, Telangana',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'DTU Delhi',
      details: 'Connect via Campus: dtus@dehdtu.dcu.in',
      location: 'Delhi',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'JU Jadavpur University',
      details: 'Connect via Campus: javad@clg.ju.in',
      location: 'Kolkata, West Bengal',
      hoverColor: '#a7bed3',
    },
    {
      name: 'VIT Vellore',
      details: 'Connect via Campus: vit@ac.in',
      location: 'Vellore, TamilNadu',
      hoverColor: '#a7bed3', 
    },
    {
      name: 'PSG College Of Technology',
      details: 'Connect via Campus: psgtech@pg.in',
      location: 'Coimbatore,TamilNadu',
      hoverColor: '#a7bed3', 
    },
  ];
  

  
  const filteredColleges = collegeDetails.filter(college =>
    (selectedCollege === '' || college.name === selectedCollege)
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={pageStyles}>
        {/* Header */}
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
            <ApiIcon />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              College Details
            </Typography>
          </Toolbar>
        </AppBar>

        {/* College Content */}
        <Box sx={gallerySectionStyle}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Explore Top Colleges<br />Join Us!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Learn photography within your education campus!! Join us and learn hassle free!<br />
              <b>Join Our Sessions! Call us at +91 5428952474</b>
            </Typography>
           {/*  <Slidehp /> */}
            <br></br>
            <br></br>

            {/* College Dropdown */}
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <InputLabel sx={{ color: 'black' }}>Filter by College</InputLabel>
              <Select
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
                label="Filter by College"
                sx={{
                  backgroundColor: 'transparent', 
                  color: '#fff',
                  '& .MuiSelect-select': {
                    backgroundColor: 'transparent', 
                    color: '#fff', 
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black', 
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#66A5AD',
                    },
                    '&:hover fieldset': {
                      borderColor: '#66A5AD', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#66A5AD',
                    },
                  },
                }}
              >
                <MenuItem value="">All Colleges</MenuItem>
                {collegeDetails.map((college, index) => (
                  <MenuItem key={index} value={college.name}>{college.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Grid container spacing={4}>
              {filteredColleges.map((college, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={collegeBoxStyle(college.hoverColor)}>
                    <Typography variant="h5">{college.name}</Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                      {college.details}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px', fontStyle: 'italic' }}>
                      Location: {college.location}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Student;
