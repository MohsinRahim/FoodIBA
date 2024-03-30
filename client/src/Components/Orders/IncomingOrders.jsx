// Components/Orders/IncomingOrders.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import './IncomingOrders.css'; // Import the CSS file

const IncomingOrders = ({ incomingOrders }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAcceptOrder = (orderId) => {
    console.log(`Order ${orderId} accepted`);
    handleCloseDialog();
  };

  const handleRejectOrder = (orderId) => {
    console.log(`Order ${orderId} rejected`);
    handleCloseDialog();
  };

  return (
    <div className="incoming-orders" style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Incoming Orders
        <span className="order-count">{incomingOrders.length}</span>
      </Button>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth style={{ margin: 20 }}>
        <DialogTitle>Incoming Orders</DialogTitle>
        <DialogContent style={{ textAlign: 'center' }}>
          {incomingOrders.map((order) => (
            <div key={order.id} style={{ marginBottom: 10 }}>
              <Typography variant="subtitle1">Orderer: {order.name}</Typography>
              <Typography variant="body2">Items: {order.items.join(', ')}</Typography>
              <Typography variant="body2">Amount Due: ${order.amount}</Typography>
              <Typography variant="body2">Time: {order.time}</Typography>
              <div style={{ marginTop: 10 }}>
                <Button variant="contained" color="primary" onClick={() => handleAcceptOrder(order.id)}>
                  Accept
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleRejectOrder(order.id)} style={{ marginLeft: 10 }}>
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default IncomingOrders;
