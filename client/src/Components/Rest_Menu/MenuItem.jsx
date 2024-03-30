// Components/Rest_Menu/MenuItem.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './RestMenu.css'; // Import the CSS file

const MenuItem = ({ name, price, quantity }) => {
  return (
    <Card className="menu-item-card">
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">Price: ${price}</Typography>
        <Typography variant="subtitle1">Quantity: {quantity}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;