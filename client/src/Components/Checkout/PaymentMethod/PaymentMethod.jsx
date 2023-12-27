// PaymentMethod.js
import React from 'react';
import { RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import './PaymentMethod.css'; // Import the CSS file

export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="payment-method-container">
      <Typography variant="h6" className="payment-method-title">
        Payment Method
      </Typography>
      <RadioGroup
        value={paymentMethod}
        onChange={(event) => setPaymentMethod(event.target.value)}
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" className="radio-label" />
        <FormControlLabel value="card" control={<Radio />} label="Card" className="radio-label" />
      </RadioGroup>
    </div>
  );
}
