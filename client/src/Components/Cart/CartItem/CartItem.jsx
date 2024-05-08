// CartItem.jsx
import React from 'react';
import { ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './CartItem.css';

export default function CartItem({ item, onEdit }) {
  return (
    <ListItem className="cart-item" secondaryAction={
      <IconButton edge="end" aria-label="edit" onClick={() => onEdit(item)}>
        <EditIcon />
      </IconButton>
    }>
      <ListItemText
        primary={item.name}
        secondary={
          <>
            <Typography component="span" variant="body2">
              {`Quantity: ${item.quantity} | Price: $${item.menuItem.price}`}
            </Typography>
            <hr className="cart-item-hr" />
          </>
        }
      />
      <Typography variant="subtitle1">{`$${(item.quantity * item.menuItem.price).toFixed(2)}`}</Typography>
    </ListItem>
  );
}
