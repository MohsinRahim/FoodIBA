import React, { useEffect, useState } from 'react';
import { Container, List, Button, Typography, Box } from '@mui/material';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CartItem from '../Components/Cart/CartItem';
import EditItemDialog from '../Components/Cart/EditItemDialog';
import VoucherDialog from '../Components/Cart/VoucherDialog';
import { fetchCart, clearCart } from '../Services/cartService';
import Navbar from '../Components/NavBar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [voucherDialogOpen, setVoucherDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      try {
        if(localStorage.getItem('token') === null){
          alert('Please login first');
          return;
        } else{
          const { items } = await fetchCart();
          setCartItems(items);
        }
        // Assume each cart item has menuItem data embedded in it
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
    // Assuming you have a backend endpoint for updating cart item
    // Update the cart item and then fetch updated cart

    // Close dialog after updating
    setEditDialogOpen(false);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleVoucherApply = (code) => {
    // Implement voucher validation logic here
    console.log('Voucher code applied:', code);
    // If valid, update cart state
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
    navigate('/checkout')
  };

  const totalBill = cartItems.reduce((total, item) => total + item.quantity * item.menuItem.price, 0);

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
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



// import React, { useState } from 'react';
// import { Container, List, Button, Typography, Box } from '@mui/material';
// import Header from '../Components/Header/Header';
// import Footer from '../Components/Footer/Footer';
// import CartItem from '../Components/Cart/CartItem';
// import EditItemDialog from '../Components/Cart/EditItemDialog';
// import VoucherDialog from '../Components/Cart/VoucherDialog';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Chicken Pizza',
//       quantity: 2,
//       price: 9.99,
//       specialInstructions: 'Extra cheese, no onions',
//     },
//     {
//       id: 2,
//       name: 'Beef Burger',
//       quantity: 1,
//       price: 8.99,
//       specialInstructions: 'Well done, add pickles',
//     },
//     // Add more items as needed for testing
//     {
//       id: 3,
//       name: 'Vegan Salad',
//       quantity: 3,
//       price: 5.99,
//       specialInstructions: 'No dressing, add olives',
//     },
//     {
//       id: 4,
//       name: 'Spaghetti Carbonara',
//       quantity: 1,
//       price: 7.99,
//       specialInstructions: 'Extra bacon',
//     }
//   ]);
//   const [editingItem, setEditingItem] = useState(null);
//   const [voucherDialogOpen, setVoucherDialogOpen] = useState(false);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);

//   const handleEditClick = (item) => {
//     setEditingItem(item);
//     setEditDialogOpen(true);
//   };

//   const handleEditItem = (id, quantity, specialInstructions) => {
//     setCartItems(currentItems =>
//       currentItems.map(item =>
//         item.id === id
//           ? { ...item, quantity: parseInt(quantity, 10), specialInstructions }
//           : item
//       )
//     );
//     setEditDialogOpen(false);
//   };

//   const handleEditDialogClose = () => {
//     setEditDialogOpen(false);
//   };

//   const handleVoucherApply = (code) => {
//     // Implement voucher validation logic here
//     console.log('Voucher code applied:', code);
//     // If valid, update cart state
//     setVoucherDialogOpen(false);
//   };

//   const handleVoucherDialogClose = () => {
//     setVoucherDialogOpen(false);
//   };

//   const totalBill = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

//   return (
//     <>
//       <Header />
//       <Container maxWidth="md">
//         <Typography variant="h3" gutterBottom>
//           Your Cart
//         </Typography>
//         <List>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} onEdit={handleEditClick} />
//           ))}
//         </List>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//           <Typography variant="h5">Total: ${totalBill.toFixed(2)}</Typography>
//           <Button variant="contained" color="primary" onClick={() => setVoucherDialogOpen(true)}>
//             Add Voucher
//           </Button>
//           <Button variant="contained" color="secondary" onClick={() => alert('Proceed to checkout?')}>
//             Checkout
//           </Button>
//         </Box>
//         {editingItem && (
//           <EditItemDialog
//             open={editDialogOpen}
//             onClose={handleEditDialogClose}
//             item={editingItem}
//             onUpdate={handleEditItem}
//           />
//         )}
//         <VoucherDialog
//           open={voucherDialogOpen}
//           onClose={handleVoucherDialogClose}
//           onApplyVoucher={handleVoucherApply}
//         />
//       </Container>
//       <Footer />
//     </>
//   );
// }


