import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function VoucherDialog({ open, onClose, onApplyVoucher }) {
  const [voucherCode, setVoucherCode] = useState('');

  const handleApplyVoucher = () => {
    // Validate the voucher code here or in the parent component
    onApplyVoucher(voucherCode);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleApplyVoucher}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
