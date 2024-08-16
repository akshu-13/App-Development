import React, { useState } from 'react';
import axios from 'axios';
import { AppBar, Box, Button, Container, IconButton, TextField, Toolbar, Typography, MenuItem } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import { styled } from '@mui/material/styles';

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C4DFE6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: '40px',
  borderRadius: '10px',
  maxWidth: '700px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#66A5AD',
  zIndex: theme.zIndex.drawer + 1, // Ensure header is on top
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#66A5AD',
  '&:hover': {
    backgroundColor: '#5a9b9e',
  },
}));

const HeroImage = styled(Box)(({ theme }) => ({
  display: { xs: 'none', sm: 'block' },
  backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/55941a9fe4b0c1a905654b75/1628625734297-SU6ZTT9SRPRBJRLT08C0/Connect+With+Us+Web+-+Seafoam.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '37.8px', // Approximately 1cm space
}));

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post('http://127.0.0.1:8000/user/signup/', {
  //       username: name,
  //       email: name, // Assuming email is used as username
  //       password: phone, // Adjust this as needed
  //     });
  //     // Clear form fields on success
  //     setName('');
  //     setPhone('');
  //     setServiceType('');
  //     setCity('');
  //     setBudget('');
  //     setError('');
  //   } catch (error) {
  //     setError('There was an error with your submission.');
  //     console.error('There was an error signing up!', error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/signup/', {
        email: email, // Replace with actual email input from user
        name: name,
        phone_number: phone,
        city: city,
        budget: parseFloat(budget),   // Ensure budget is a number
        service_type: serviceType,
        role: 'customer',
        is_active: true,
        is_staff: false,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // Clear form fields on success
      setEmail('');
      setName('');
      setPhone('');
      setServiceType('');
      setCity('');
      setBudget('');
      setError('');
      console.log('Signup successful:', response.data); // Debug log
    } catch (error) {
      console.error('There was an error signing up!', error.response?.data || error);
      setError('There was an error with your submission.');
    }
  };
  
  
  

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const serviceTypes = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'birthdays', label: 'Birthdays' },
    { value: 'surprises', label: 'Surprises' },
    { value: 'special', label: 'Special (Overseas)' },
    { value: 'others', label: 'Others' },
  ];

  return (
    <PageContainer>
      <HeaderAppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ApiIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Submission Form
          </Typography>
        </Toolbar>
      </HeaderAppBar>

      <HeroImage />

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <FormContainer>
          <Typography variant="h3" gutterBottom>
            Contact Us
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Phone Number"
              type="tel"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <TextField
              label="Type of Service"
              select
              fullWidth
              margin="normal"
              value={serviceType}
              onChange={handleServiceTypeChange}
              required
            >
              {serviceTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="City"
              fullWidth
              margin="normal"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <TextField
              label="Budget"
              type="number"
              fullWidth
              margin="normal"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              InputProps={{
                inputProps: {
                  min: 0,
                  step: 10000,
                },
              }}
            />
            <StyledButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </StyledButton>
          </form>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};

export default ContactUs;
