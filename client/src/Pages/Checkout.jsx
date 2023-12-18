import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import OrderSummary from '../Components/Checkout/OrderSummary';
import PaymentMethod from '../Components/Checkout/PaymentMethod';
import ConfirmDialog from '../Components/Checkout/ConfirmDialog';

export default function Checkout() {
  const [orderDetails, setOrderDetails] = useState({
    items: [
      { name: 'Chicken Pizza', quantity: 2, price: 18.98 },
      { name: 'Vegan Salad', quantity: 1, price: 9.99 },
    ],
    total: 28.97,
    userName: 'John Doe',
    userPhone: '123-456-7890',
    estimatedTime: '15 mins',
  });
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleOrderPlacement = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmOrder = () => {
    setConfirmDialogOpen(false);
    // Implement order placement logic here
    console.log('Order confirmed');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <OrderSummary orderDetails={orderDetails} />
      <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <Button variant="contained" color="primary" onClick={handleOrderPlacement} sx={{ mt: 2 }}>
        Place Order
      </Button>
      <Typography variant="body1" sx={{ mt: 2 }}>Name: {orderDetails.userName}</Typography>
      <Typography variant="body1">Phone: {orderDetails.userPhone}</Typography>
      <Typography variant="body1">Estimated Pickup Time: {orderDetails.estimatedTime}</Typography>
      <ConfirmDialog open={confirmDialogOpen} handleClose={() => setConfirmDialogOpen(false)} handleConfirm={handleConfirmOrder} />
    </Container>
  );
}
