// Components/Orders/CompletedOrders.jsx
import React from 'react';
import OrderCard from './OrderCard';
import './CompletedOrders.css'; // Import the CSS file

const CompletedOrders = ({ completedOrders }) => {
  return (
    <div className="completed-orders">
      <h2>Completed Orders</h2>
      {completedOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default CompletedOrders;
