import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

export default function ConfirmDialog({ open, handleClose, handleConfirm }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Place Order?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to place this order?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm} autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
