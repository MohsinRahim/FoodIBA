// Components/Orders/IncomingOrders.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';

const IncomingOrders = ({ incomingOrders }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAcceptOrder = (orderId) => {
    // You can implement the logic to add the accepted order to the active orders here
    console.log(`Order ${orderId} accepted`);
    handleCloseDialog();
  };

  const handleRejectOrder = (orderId) => {
    // You can implement the logic to reject the order here
    console.log(`Order ${orderId} rejected`);
    handleCloseDialog();
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      {/* Button to open the dialog */}
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Incoming Orders
        {/* Display the number of incoming orders */}
        <span style={{ marginLeft: 5 }}>{incomingOrders.length}</span>
      </Button>

      {/* Dialog to display incoming orders */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Incoming Orders</DialogTitle>
        <DialogContent>
          {/* Map through incoming orders and display order details */}
          {incomingOrders.map((order) => (
            <div key={order.id} style={{ marginBottom: 10 }}>
              <Typography variant="subtitle1">Orderer: {order.name}</Typography>
              <Typography variant="body2">Items: {order.items.join(', ')}</Typography>
              <Typography variant="body2">Amount Due: ${order.amount}</Typography>
              <Typography variant="body2">Time: {order.time}</Typography>
              <div style={{ marginTop: 10 }}>
                {/* Accept and Reject buttons */}
                <Button variant="contained" color="primary" onClick={() => handleAcceptOrder(order.id)}>
                  Accept
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleRejectOrder(order.id)}>
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
