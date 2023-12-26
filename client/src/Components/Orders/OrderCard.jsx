// Components/Orders/OrderCard.jsx
import React from 'react';
import Button from '@mui/material/Button';
import './OrderCard.css'; // Import the CSS file

const OrderCard = ({ order }) => {
  const { orderId, name, items, amount, time, status } = order;

  const handleCompleteOrder = () => {
    // Handle the logic to move the order to the completed column
    // This could involve updating the order status or moving it to a different array
  };

  return (
    <div className={`order-card ${status === 'active' ? 'active' : ''}`}>
      <p className="order-id">Order ID: {orderId}</p>
      <p className="order-name">Name: {name}</p>
      <p className="order-items">Items: {items.join(', ')}</p>
      <p className="order-amount">Amount: ${amount}</p>
      <p className="order-time">Time: {time}</p>
      {status === 'active' && (
        <Button className="complete-button" variant="contained" color="primary" onClick={handleCompleteOrder}>
          Complete Order
        </Button>
      )}
    </div>
  );
};

export default OrderCard;
