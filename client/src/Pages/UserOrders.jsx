import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, List, ListItem, Divider } from '@mui/material';
import Navbar from '../Components/NavBar/Navbar';
import { fetchUserOrders } from '../Services/orderService'; // Import a service function to fetch user orders

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadUserOrders = async () => {
      try {
        const userOrders = await fetchUserOrders();
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    loadUserOrders();
  }, []);

  return (
    <Container maxWidth="md">
      <Navbar />
      <Typography variant="h4" gutterBottom>My Orders</Typography>
      <List>
        {orders.map((order, index) => (
          <Paper key={index} elevation={3} sx={{ mb: 2, p: 2 }}>
            <Typography variant="h6">Order ID: {order._id}</Typography>
            <Typography variant="subtitle1">Status: {order.status}</Typography>
            <Typography variant="subtitle1">Placed on: {new Date(order.createdAt).toLocaleDateString()}</Typography>
            <Divider sx={{ my: 1 }} />
            {order.items.map((item, idx) => (
              <ListItem key={idx} sx={{ py: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.menuItem.name} x {item.quantity}</span>
                <span>Rs.{(item.quantity * item.menuItem.price).toFixed(2)}</span>
              </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1">Total Bill: Rs.{order.items.reduce((total, item) => total + item.quantity * item.menuItem.price, 0).toFixed(2)}</Typography>
          </Paper>
        ))}
      </List>
    </Container>
  );
}
