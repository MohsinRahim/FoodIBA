import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function MenuItem({ item, onAddToCart }) {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt={item.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.description}
          </Typography>
          <Typography variant="subtitle1" component="div">
            ${item.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton onClick={() => onAddToCart(item)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
