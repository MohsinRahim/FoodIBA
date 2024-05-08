// EditItemDialog.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import './EditItemDialog.css';

export default function EditItemDialog({ open, onClose, item, onUpdate }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [specialInstructions, setSpecialInstructions] = useState(item.specialInstructions);

  return (
    <Dialog open={open} onClose={onClose} className="edit-dialog">
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
          className="edit-input"
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
          className="edit-input"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="edit-button">
          Cancel
        </Button>
        <Button onClick={() => onUpdate(item.id, quantity, specialInstructions)} className="edit-button">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
