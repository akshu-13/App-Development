import React, { useEffect, useState } from 'react';
import fetchTourismPlaces from '../services/fetchTourismPlaces';
import { Card, CardContent, Typography, Grid, Container, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TourismPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const data = await fetchTourismPlaces();
        setPlaces(data.features);
      } catch (err) {
        setError(err.message);
      }
    };

    getPlaces();
  }, []);

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" align="center">
          Error: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" color={theme.palette.primary.main}>
        CBE Tourism Places
      </Typography>
      <Grid container spacing={4}>
        {places.map((place) => (
          <Grid item xs={12} sm={6} md={4} key={place.properties.place_id}>
            <Card elevation={3} sx={{ borderRadius: 2, overflow: 'visible' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {place.properties.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {place.properties.formatted}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Coordinates: {place.geometry.coordinates[1].toFixed(6)}, {place.geometry.coordinates[0].toFixed(6)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TourismPlaces;
