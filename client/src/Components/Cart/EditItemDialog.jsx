import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

export default function EditItemDialog({ open, onClose, item, onUpdate }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [specialInstructions, setSpecialInstructions] = useState(item.specialInstructions);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Cart Item</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>{item.name}</Typography>
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          fullWidth
          variant="outlined"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Special instructions"
          type="text"
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onUpdate(item.id, quantity, specialInstructions)}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
