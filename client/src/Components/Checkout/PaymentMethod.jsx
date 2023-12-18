import React from 'react';
import { RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  return (
    <div>
      <Typography variant="h6">Payment Method</Typography>
      <RadioGroup
        value={paymentMethod}
        onChange={(event) => setPaymentMethod(event.target.value)}
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="card" control={<Radio />} label="Card" />
      </RadioGroup>
    </div>
  );
}
