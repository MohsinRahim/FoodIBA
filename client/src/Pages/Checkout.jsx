import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import OrderSummary from '../Components/Checkout/OrderSummary';
import PaymentMethod from '../Components/Checkout/PaymentMethod';
import ConfirmDialog from '../Components/Checkout/ConfirmDialog';
import Navbar from '../Components/NavBar/Navbar';
import { fetchCart } from '../Services/cartService';

export default function Checkout() {
  const [orderDetails, setOrderDetails] = useState();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      try {
        console.log("i am here");
        const { items } = await fetchCart();
        // Assume each cart item has menuItem data embedded in it
        setOrderDetails(items);
        console.log(items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    loadCart();
  }, []);

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
      <Navbar />
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <OrderSummary orderDetails={orderDetails} />
      <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <Button variant="contained" color="primary" onClick={handleOrderPlacement} sx={{ mt: 2 }}>
        Place Order
      </Button>
      <Typography variant="body1" sx={{ mt: 2 }}>Name: {orderDetails}</Typography>
      <Typography variant="body1">Phone: {orderDetails}</Typography>
      <Typography variant="body1">Estimated Pickup Time: {orderDetails}</Typography>
      <ConfirmDialog open={confirmDialogOpen} handleClose={() => setConfirmDialogOpen(false)} handleConfirm={handleConfirmOrder} />
    </Container>
  );
}
