import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

export default function AddToCartDialog({ open, onClose, onConfirm, item }) {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add to Cart</DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            autoFocus
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
            rows={4}
            variant="outlined"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onConfirm(quantity, specialInstructions)}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
