// Components/Orders/OrderCard.jsx
import React from 'react';
import Button from '@mui/material/Button';
import './OrderCard.css'; // Import the CSS file

const OrderCard = ({ order }) => {
  const { _id, name, items, amount, time, status } = order;
  const renderItemsList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{`${item.quantity} x ${item.menuItem.name}`}</li>
        ))}
      </ul>
    );
  };

  const calculateTotalBill = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.menuItem.price, 0);
  };
  const totalBill = calculateTotalBill(items);

  const renderPricesList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{`$${(item.quantity * item.menuItem.price).toFixed(2)}`}</li>
        ))}
      </ul>
    );
  };
  const handleCompleteOrder = () => {
    // Handle the logic to move the order to the completed column
    // This could involve updating the order status or moving it to a different array
  };
console.log(order);
return (
  <div className={`order-card ${status === 'active' ? 'active' : ''}`}>
    <p className="order-id">Order ID: {_id}</p>
    {/* <p className="order-name">Name: {name}</p> */}
    <p className="order-items">Items: {renderItemsList(items)}</p>  
    <p className="order-prices">Prices: {renderPricesList(items)}</p>  
    <p className="order-total">Total Bill: ${totalBill.toFixed(2)}</p>
    {/* <p className="order-time">Time: {time}</p> */}
    {status === 'active' && (
      <Button className="complete-button" variant="contained" color="primary" onClick={handleCompleteOrder}>
        Complete Order
      </Button>
    )}
  </div>
);



};

export default OrderCard;
