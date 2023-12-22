// Components/Rest_Menu/DealItem.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const DealItem = ({ name, description, price }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
        <Typography variant="subtitle1">Price: ${price}</Typography>
      </CardContent>
    </Card>
  );
};

export default DealItem;
