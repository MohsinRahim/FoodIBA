import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/NavBar/Navbar';

export default function History() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Sample data
    setOrderHistory([
      { date: '2023-12-20', items: [{ name: 'Chicken Pizza', quantity: 2 }, { name: 'Beef Burger', quantity: 1 }] },
      { date: '2023-12-19', items: [{ name: 'Veggie Burger', quantity: 1 }] },
      { date: '2023-12-18', items: [{ name: 'Pepperoni Pizza', quantity: 3 }] },
      { date: '2023-12-17', items: [{ name: 'Chicken Burger', quantity: 2 }, { name: 'Cheese Pizza', quantity: 1 }] },
      { date: '2023-12-16', items: [{ name: 'Veggie Pizza', quantity: 1 }, { name: 'Grilled Cheese Sandwich', quantity: 2 }] },
      // ...other orders
    ]);
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Order History
        </Typography>
        {orderHistory.map((order, index) => (
          <Paper elevation={3} key={index} style={{ marginBottom: '15px', padding: '15px' }}>
            <Typography variant="h6" color="secondary">
              Date: {order.date}
            </Typography>
            <List>
              {order.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <ListItem>
                    <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                  </ListItem>
                  {itemIndex < order.items.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        ))}
      </Container>
      <Footer />
    </>
  );
}
