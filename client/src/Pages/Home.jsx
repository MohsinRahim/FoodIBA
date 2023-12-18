import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Navbar from '../Components/NavBar/Navbar'; // Import Navbar
import Footer from '../Components/Footer/Footer';
import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';

export default function Home() {
  // Dummy data for the list of restaurants.
  // Replace with actual data, probably fetched from an API.
  const restaurants = [
    {
      name: "Banana Leaf",
      image: "/images/banana-leaf.jpg",
      rating: 4.5,
      distance: 1.2,
    },
    {
      name: "Urban Tadka",
      image: "/images/urban-tadka.jpg",
      rating: 4.0,
      distance: 3.5,
    },
    // ...more restaurants
  ];

  return (
    <>
      <Navbar />  {/* Using Navbar component */}
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Premium Quality Food for your Healthy & Daily Life
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet interdum erat.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {restaurants.map((restaurant, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <RestaurantCard {...restaurant} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
} 
