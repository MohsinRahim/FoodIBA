// Components/Orders/CompletedOrders.jsx
import React from 'react';
import OrderCard from './OrderCard';

const CompletedOrders = ({ completedOrders }) => {
  // Dummy data for demonstration
  const dummyCompletedOrders = [
    { id: 3, orderId: 'C001', name: 'Alice Johnson', items: ['Pasta', 'Garlic Bread'], amount: 18.75, time: '2:15 PM', status: 'completed' },
    { id: 4, orderId: 'C002', name: 'Bob Wilson', items: ['Sushi', 'Miso Soup'], amount: 30.00, time: '3:30 PM', status: 'completed' },
  ];

  return (
    <div style={{ flex: 1 }}>
      <h2>Completed Orders</h2>
      {dummyCompletedOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default CompletedOrders;
