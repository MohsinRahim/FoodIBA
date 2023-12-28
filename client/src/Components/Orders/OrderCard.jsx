// Components/Orders/OrderCard.jsx
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import './OrderCard.css'; // Import the CSS file
import { updateOrder } from '../../Services/orderService';

const OrderCard = ({ order }) => {
  const { _id, name, items, amount, time, status } = order;
  const renderItemsList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          item && item.menuItem && item.menuItem.name && (
            <li key={index}>{`${item.quantity} x ${item.menuItem.name}`}</li>
          ) ))}
      </ul>
    );
  };

  const calculateTotalBill = (items) => {
    console.log("items");
    console.log(items);
    if(items.length === 0) return 0;
    return items.reduce((total, item) => {
      if (item && item.menuItem && item.menuItem.price) {
        return total + item.quantity * item.menuItem.price;
      } else {
        // Handle the case where an item or its price is null
        return total;
      }
    }, 0);
    };
  const totalBill = calculateTotalBill(items);

  const renderPricesList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          item && item.menuItem && typeof item.menuItem.price === 'number' && (
            <li key={index}>{`$${(item.quantity * item.menuItem.price).toFixed(2)}`}</li>
          )))}
      </ul>
    );
  };
  const handleCompleteOrder = async (orderId) => {
    await updateOrder(orderId, "Completed");
    alert("Order Completed");
  };
useEffect(() => {
  console.log("order");
  console.log(order);
}
, [order]);

return (
  <div className={`order-card ${status === 'Accepted' ? 'Accepted' : ''}`}>
    <p className="order-id">Order ID: {_id}</p>
    {/* <p className="order-name">Name: {name}</p> */}
    <p className="order-items">Items: {renderItemsList(items)}</p>  
    <p className="order-prices">Prices: {renderPricesList(items)}</p>  
    <p className="order-total">Total Bill: ${totalBill.toFixed(2)}</p>
    {/* <p className="order-time">Time: {time}</p> */}
    {status === 'Accepted' && (
      <Button className="complete-button" variant="contained" color="primary" onClick={() => handleCompleteOrder(_id)}>
        Complete Order
      </Button>
    )}

  </div>
);



};

export default OrderCard;
