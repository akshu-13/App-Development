// src/components/QuotesSection.js

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Sample quotes data
const quotes = [
  { id: 1, text: "Photography is the story I fail to put into words.", author: "Destin Sparks" },
  { id: 2, text: "The best thing about a picture is that it never changes, even when the people in it do.", author: "Andy Warhol" },
  { id: 3, text: "Taking pictures is savoring life intensely, every hundredth of a second.", author: "Marc Riboud" },
  { id: 4, text: "Photography takes an instant out of time, altering life by holding it still", author: "Irving Penn" },
  { id: 5, text: "The best way to learn is to immerse yourself in it truly.", author: "Steve McCurry" },
  { id: 6, text: "My job as a portrait photographer is to amuse, and entertain.", author: "Helmut Newton" },
];

const QuotesSection = () => {
 
  const quotesSectionStyles = {
    backgroundColor: '#C4DFE6',
    color: '#000',
    padding: '40px 20px',
    textAlign: 'center',
  };


  const quoteBoxStyles = {
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
  };

  return (
    <Box sx={quotesSectionStyles}>
      <Typography variant="h4" gutterBottom>From Our Employees' Desk</Typography>
      <Grid container spacing={2} justifyContent="center">
        {quotes.map((quote) => (
          <Grid item xs={12} sm={6} md={4} key={quote.id}>
            <Box sx={quoteBoxStyles}>
              <Typography variant="h6" gutterBottom>"{quote.text}"</Typography>
              <Typography variant="body2" gutterBottom>- {quote.author}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuotesSection;
