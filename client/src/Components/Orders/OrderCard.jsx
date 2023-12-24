// Components/Orders/OrderCard.jsx
import React from 'react';
import Button from '@mui/material/Button'; // Import MUI Button component

const OrderCard = ({ order }) => {
  const { orderId, name, items, amount, time, status } = order;

  const handleCompleteOrder = () => {
    // Handle the logic to move the order to the completed column
    // This could involve updating the order status or moving it to a different array
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p>Order ID: {orderId}</p>
      <p>Name: {name}</p>
      <p>Items: {items.join(', ')}</p>
      <p>Amount: ${amount}</p>
      <p>Time: {time}</p>
      {status === 'active' && (
        <Button variant="contained" color="primary" onClick={handleCompleteOrder}>
          Complete Order
        </Button>
      )}
    </div>
  );
};

export default OrderCard;
