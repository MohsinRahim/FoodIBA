// Components/Orders/ActiveOrders.jsx
import React from 'react';
import OrderCard from './OrderCard';
import './ActiveOrders.css'; // Import the CSS file

const ActiveOrders = ({ activeOrders }) => {
  return (
    <div className="active-orders">
      <h2>Active Orders</h2>
      {activeOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default ActiveOrders;
