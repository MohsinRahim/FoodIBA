// ConfirmDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import './ConfirmDialog.css'; // Import the CSS file

export default function ConfirmDialog({ open, handleClose, handleConfirm }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="dialog-title">Place Order?</DialogTitle>
      <DialogContent>
        <DialogContentText className="dialog-content">
          Are you sure you want to place this order?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" className="dialog-button">
          Cancel
        </Button>
        <Button onClick={handleConfirm} autoFocus color="primary" className="dialog-button">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
