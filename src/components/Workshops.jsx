import React, { useState } from 'react';
import { Box, AppBar, Container, Grid, Toolbar, Typography, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApiIcon from '@mui/icons-material/Api';
import Footer from './Footer';
import Slidehp from './Slidehp';
import Slideshow from './Slideshow';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Custom theme to override default typography
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontFamily: 'Georgia, serif',
      fontWeight: 400, // Adjusted font weight (less thick)
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

const Workshops = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

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

  const workshopBoxStyle = (hoverColor) => ({
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
    color: '#fff', // Text color white
    '&:hover': {
      backgroundColor: hoverColor,
      color: '#000000',
      transform: 'translateY(-10px)', // Slide up effect
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
    },
  });

  const gallerySectionStyle = {
    background: '#C4DFE6',
    padding: '70px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#66A5AD', // Button background color
    color: '#fff', // Text color
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#5592a1', // Darker shade for hover
    },
  };

  const workshopDetails = [
    {
      title: 'Wedding Photography Workshop',
      details: 'Learn how to capture the perfect moments on a wedding day. Includes hands-on training with experienced photographers.',
      date: 'September 15, 2024',
      month: 'September',
      location: 'Coimbatore, TamilNadu',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Birthday Party Photography Workshop',
      details: 'Master the art of photographing birthday celebrations with tips on lighting, composition, and candid shots.',
      date: 'October 10, 2024',
      month: 'October',
      location: 'Guntur, Andhra Pradesh',
      hoverColor:'#a7bed3', // Example color
    },
    {
      title: 'Surprise Party Photography Workshop',
      details: 'Explore techniques to capture the excitement and surprise of parties. Learn to shoot in various lighting conditions.',
      date: 'November 5, 2024',
      month: 'November',
      location: 'Hosur, Karnataka',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Overseas Photography Workshop',
      details: 'Get insights into shooting international events and scenic locations. Includes tips on travel photography and cultural sensitivity.',
      date: 'December 1, 2024',
      month: 'December',
      location: 'Online Webinar',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Pre-Wedding Shoot Photography Workshop',
      details: 'Focus on pre-wedding photo sessions with creative ideas and posing techniques for couples.',
      date: 'January 20, 2025',
      month: 'January',
      location: 'Wayanad, Kerala',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Professional Event Photography Workshop',
      details: 'Learn how to handle various professional events with advanced photography techniques and equipment recommendations.',
      date: 'February 15, 2025',
      month: 'February',
      location: 'Agra, Delhi',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Landscape Photography Workshop',
      details: 'Discover the art of capturing stunning landscapes with a focus on composition, lighting, and post-processing.',
      date: 'March 10, 2025',
      month: 'March',
      location: 'Chennai, TamilNadu',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Portrait Photography Workshop',
      details: 'Enhance your skills in capturing compelling portraits. Includes techniques for working with natural and artificial light.',
      date: 'April 22, 2025',
      month: 'April',
      location: 'Hubli, Karnataka',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Night Photography Workshop',
      details: 'Learn the techniques for shooting stunning images at night, including long exposures and capturing cityscapes.',
      date: 'May 30, 2025',
      month: 'May',
      location: 'Ernakulam, Kerala',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Documentary Photography Workshop',
      details: 'Explore the storytelling aspect of photography with a focus on capturing real-life moments and narratives.',
      date: 'June 12, 2025',
      month: 'June',
      location: 'Goa',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Fashion Photography Workshop',
      details: 'Dive into the world of fashion photography with lessons on styling, lighting, and working with models.',
      date: 'July 25, 2025',
      month: 'July',
      location: 'Tirupathi, Andhra Pradesh',
      hoverColor: '#a7bed3', // Example color
    },
    {
      title: 'Event Photography Techniques Workshop',
      details: 'Gain insights into capturing various types of events with emphasis on dynamic and candid shots.',
      date: 'August 18, 2025',
      month: 'August',
      location: 'Vijayawada, Andhra Pradesh',
      hoverColor: '#a7bed3', // Example color
    },
  ];

  // Filter workshops based on selected month
  const filteredWorkshops = workshopDetails.filter(workshop =>
    (selectedMonth === '' || workshop.month === selectedMonth)
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={pageStyles}>
        {/* Header */}
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
            <ApiIcon />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Photography Workshops
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Workshops Content */}
        <Box sx={gallerySectionStyle}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Explore The Beauty Of Photography<br />Join our Workshop
            </Typography>
            <Typography variant="body1" gutterBottom>
              We provide a wide range of photography services to capture your special moments. From weddings to corporate events, our team of professionals is here to make your memories last forever.<br />
              <b>Join Our Sessions! Call us at +91 5428952474</b>
            </Typography>
            <Slidehp />

            {/* "Are You A Student?" Button */}
            <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
              <Button
                sx={buttonStyle}
                onClick={() => navigate('/student')} // Navigate to the /student route
              >
                Are You A Student?
              </Button>
            </Box>

            {/* Month Dropdown */}
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <InputLabel sx={{ color: 'black' }}>Filter by Month</InputLabel>
              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                label="Filter by Month"
                sx={{
                  backgroundColor: 'transparent', // Make background transparent
                  color: '#fff', // Text color inside select
                  '& .MuiSelect-select': {
                    backgroundColor: 'transparent', // Ensure dropdown background is transparent
                    color: '#fff', // Text color inside dropdown
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black', // Label text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#66A5AD', // Border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#66A5AD', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#66A5AD', // Border color when focused
                    },
                  },
                }}
              >
                <MenuItem value="">All Months</MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>

            <Grid container spacing={4}>
              {filteredWorkshops.map((workshop, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={workshopBoxStyle(workshop.hoverColor)}>
                    <Typography variant="h5">{workshop.title}</Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                      {workshop.details}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px', fontStyle: 'italic' }}>
                      Date: {workshop.date}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                      Location: {workshop.location}
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

export default Workshops;
