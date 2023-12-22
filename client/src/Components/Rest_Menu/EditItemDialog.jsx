// Components/Rest_Menu/EditItemDialog.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const EditItemDialog = ({ open, handleClose, handleSubmit, currentItem }) => {
  const [name, setName] = useState(currentItem ? currentItem.name : '');
  const [price, setPrice] = useState(currentItem ? currentItem.price : '');
  const [description, setDescription] = useState(
    currentItem ? currentItem.description : ''
  );

  const handleFormSubmit = () => {
    // Validate form data
    if (!name || !price) {
      // Handle validation error (e.g., show an error message)
      return;
    }

    // Call the parent component's submit function
    handleSubmit({ name, price, description });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{currentItem ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleFormSubmit} color="primary">
          {currentItem ? 'Save Changes' : 'Add Item'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItemDialog;
