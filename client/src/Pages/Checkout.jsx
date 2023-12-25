import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import OrderSummary from '../Components/Checkout/OrderSummary';
import PaymentMethod from '../Components/Checkout/PaymentMethod';
import ConfirmDialog from '../Components/Checkout/ConfirmDialog';
import Navbar from '../Components/NavBar/Navbar';
import { fetchCart } from '../Services/cartService';

export default function Checkout() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const { items } = await fetchCart();
        // Assume each cart item has menuItem data embedded in it
        setOrderDetails(items);
        console.log("Items {}", items);
        console.log("Order {}", orderDetails);
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
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div></div>
        <Typography variant="body1" sx={{ mt: 2 }}>Sub Total</Typography>  
      </div>
    
      {orderDetails.map((menuItem) => (
        <div>
          <Typography variant="body1" sx={{ mt: 2 }}>Name: {menuItem.menuItem.name}</Typography>  
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1">Quantity: {menuItem.quantity}</Typography>
            <Typography variant="body1">Rs.{menuItem.quantity * menuItem.menuItem.price}</Typography>
          </div>
          <Typography variant="body1">Price: Rs.{menuItem.menuItem.price}</Typography>
          <hr />
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
        <div></div>
        <Typography variant="body1" sx={{ mt: 2 }}>Total: Rs.{orderDetails.reduce((total, item) => total + item.quantity * item.menuItem.price, 0).toFixed(2)}</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
        <div></div>
        <Button variant="contained" color="primary" onClick={handleOrderPlacement} sx={{ mt: 2 }}>
          Place Order
        </Button>
      </div>
       
      <ConfirmDialog open={confirmDialogOpen} handleClose={() => setConfirmDialogOpen(false)} handleConfirm={handleConfirmOrder} />
    </Container>
  );
}
