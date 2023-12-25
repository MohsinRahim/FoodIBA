import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';

export default function RestaurantCard({ name, image, rating, distance }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
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
