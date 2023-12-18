import { Box, Typography, CardMedia } from '@mui/material';

export default function MenuHeader({ name, image }) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {name}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
    </Box>
  );
}
