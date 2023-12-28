import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './RestMenu.css'; // Import the CSS file

const MenuItem = ({ name, price, description, id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card className="menu-item-card">
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">Price: ${price}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <br />
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
