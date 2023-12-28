// Components/Orders/IncomingOrders.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import './IncomingOrders.css'; // Import the CSS file
import { updateOrder } from '../../Services/orderService';

const IncomingOrders = ({ incomingOrders }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAcceptOrder = async (orderId) => {
    console.log(`Order ${orderId} accepted`);
    await updateOrder(orderId, "Accepted");
    handleCloseDialog();
  };

  const handleRejectOrder = (orderId) => {
    console.log(`Order ${orderId} rejected`);
    handleCloseDialog();
  };

  console.log(incomingOrders);
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
          <div key={order._id} style={{ marginBottom: 10 }}>
            <Typography variant="subtitle1">Orderer: {order.user}</Typography>
            <Typography variant="body2">Items:</Typography>
            <ul>
              {order.items.map((item) => (
                <li key={item._id}>
                  {item.menuItem.name} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
            {/* <Typography variant="body2">Amount Due: ${calculateTotal(order.items)}</Typography> */}
            <Typography variant="body2">Time: {order.createdAt}</Typography>
            <div style={{ marginTop: 10 }}>
              <Button variant="contained" color="primary" onClick={() => handleAcceptOrder(order._id)}>
                Accept
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleRejectOrder(order._id)} style={{ marginLeft: 10 }}>
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
