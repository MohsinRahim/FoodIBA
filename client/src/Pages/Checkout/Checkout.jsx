// Checkout.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import OrderSummary from '../../Components/Checkout/OrderSummary/OrderSummary';
import PaymentMethod from '../../Components/Checkout/PaymentMethod/PaymentMethod';
import ConfirmDialog from '../../Components/Checkout/ConfirmDialog/ConfirmDialog';
import Navbar from '../../Components/NavBar/Navbar';
import { fetchCart } from '../../Services/cartService';
import './Checkout.css'; // Import the CSS file

export default function Checkout() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const { items } = await fetchCart();
        setOrderDetails(items);
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
    console.log('Order confirmed');
    // Implement order placement logic here
  };

  return (
    <>
    <Navbar />
    <Container maxWidth="lg" className="checkout-container">
      
      <Typography variant="h4" gutterBottom className="checkout-title">
        Checkout
      </Typography>
      <OrderSummary orderDetails={orderDetails} />
      <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <hr />
      <div className="subtotal-container">
        {/* Subtotal content goes here */}
      </div>
      {orderDetails.map((menuItem) => (
        <div key={menuItem.menuItem.id} className="order-item">
          {/* Order item details go here */}
        </div>
      ))}
      <div className="total-container">
        {/* Total content goes here */}
      </div>
      <div className="order-button-container">
        <Button variant="contained" color="primary" onClick={handleOrderPlacement} className="place-order-button">
          Place Order
        </Button>
      </div>
      <ConfirmDialog open={confirmDialogOpen} handleClose={() => setConfirmDialogOpen(false)} handleConfirm={handleConfirmOrder} />
    </Container>
    </>
  );
}