// Components/Rest_Menu/MenuItem.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MenuItem = ({ name, price, quantity }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">Price: ${price}</Typography>
        <Typography variant="subtitle1">Quantity: {quantity}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
