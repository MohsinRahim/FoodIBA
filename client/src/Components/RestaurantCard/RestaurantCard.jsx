// RestaurantCard.jsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import './RestaurantCard.css'; // Import the CSS file

export default function RestaurantCard({ name, logo, rating, distance }) {
  return (
    <Card className="restaurant-card"> {/* Apply styles */}
      <CardMedia
        component="img"
        height="140"
        image={logo}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="subtitle1" color="text.secondary">
            {distance} km
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
