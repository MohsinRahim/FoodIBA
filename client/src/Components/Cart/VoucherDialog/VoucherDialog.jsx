// VoucherDialog.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import './VoucherDialog.css';

export default function VoucherDialog({ open, onClose, onApplyVoucher }) {
  const [voucherCode, setVoucherCode] = useState('');

  const handleApplyVoucher = () => {
    onApplyVoucher(voucherCode);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="voucher-dialog">
      <DialogTitle>Add Voucher</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Voucher Code"
          type="text"
          fullWidth
          variant="outlined"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          className="voucher-input"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="voucher-button">
          Cancel
        </Button>
        <Button onClick={handleApplyVoucher} className="voucher-button">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
