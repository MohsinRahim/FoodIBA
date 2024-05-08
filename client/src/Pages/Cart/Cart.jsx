// cart.jsx
import React, { useEffect, useState } from 'react';
import { Container, List, Button, Typography, Box } from '@mui/material';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CartItem from '../../Components/Cart/CartItem/CartItem';
import EditItemDialog from '../../Components/Cart/EditItemDialog/EditItemDialog';
import VoucherDialog from '../../Components/Cart/VoucherDialog/VoucherDialog';
import { fetchCart, clearCart } from '../../Services/cartService';
import Navbar from '../../Components/NavBar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [voucherDialogOpen, setVoucherDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const { items } = await fetchCart();
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    loadCart();
  }, []);

  const handleEditClick = (item) => {
    setEditingItem(item);
    setEditDialogOpen(true);
  };

  const handleEditItem = (id, quantity, specialInstructions) => {
    setEditDialogOpen(false);
    // Update the cart item and then fetch the updated cart
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleVoucherApply = (code) => {
    console.log('Voucher code applied:', code);
    setVoucherDialogOpen(false);
  };

  const handleVoucherDialogClose = () => {
    setVoucherDialogOpen(false);
  };

  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      try {
        await clearCart();
        setCartItems([]);
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalBill = cartItems.reduce((total, item) => total + item.quantity * item.menuItem.price, 0);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" className="cart-container">
        <Typography variant="h3" gutterBottom>
          Your Cart
        </Typography>
        <List>
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} onEdit={() => handleEditClick(item)} />
          ))}
        </List>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h5">Total: ${totalBill.toFixed(2)}</Typography>
          <Button variant="contained" color="secondary" onClick={handleCheckout}>
            Checkout
          </Button>
          <Button variant="contained" color="error" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </Box>
        {editingItem && (
          <EditItemDialog
            open={editDialogOpen}
            onClose={handleEditDialogClose}
            item={editingItem}
            onUpdate={handleEditItem}
          />
        )}
        <VoucherDialog
          open={voucherDialogOpen}
          onClose={handleVoucherDialogClose}
          onApplyVoucher={handleVoucherApply}
        />
      </Container>
      <Footer />
    </>
  );
}
