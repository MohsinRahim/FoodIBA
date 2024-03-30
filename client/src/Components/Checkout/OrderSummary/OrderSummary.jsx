// OrderSummary.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import './OrderSummary.css'; // Import the CSS file

export default function OrderSummary({ orderDetails }) {
  return (
    <Box className="order-summary-box">
      <Typography variant="h6">Order Summary</Typography>
      <List>
        {orderDetails.map((item) => (
          <ListItem key={item.menuItem.id} className="order-list-item">
            <ListItemText primary={item.menuItem.name} secondary={`Quantity: ${item.quantity}`} />
            <Typography variant="body2" className="item-price">
              Rs.{(item.quantity * item.menuItem.price).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" className="total-price">
        Total: Rs.{orderDetails.reduce((total, item) => total + item.quantity * item.menuItem.price, 0).toFixed(2)}
      </Typography>
    </Box>
  );
}
