import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

export default function OrderSummary({ orderDetails }) {
  return (
    <Box>
      <Typography variant="h6">Order Summary</Typography>
      <List>
        {orderDetails.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <Typography variant="body2">${item.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">Total: ${orderDetails.total}</Typography>
    </Box>
  );
}
