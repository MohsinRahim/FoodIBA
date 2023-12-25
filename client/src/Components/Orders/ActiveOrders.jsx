// Components/Orders/ActiveOrders.jsx
import React from 'react';
import OrderCard from './OrderCard';

const ActiveOrders = ({ activeOrders }) => {
  // Dummy data for demonstration
  const dummyActiveOrders = [
    { id: 1, orderId: 'A001', name: 'John Doe', items: ['Burger', 'Fries'], amount: 15.99, time: '12:30 PM', status: 'active' },
    { id: 2, orderId: 'A002', name: 'Jane Smith', items: ['Pizza', 'Salad'], amount: 22.50, time: '1:45 PM', status: 'active' },
    { id: 3, orderId: 'A003', name: 'Chris Brown', items: ['Chicken Wings', 'Coke'], amount: 12.75, time: '2:30 PM', status: 'active' },
  ];

  return (
    <div style={{ flex: 1, marginRight: '20px' }}>
      <h2>Active Orders</h2>
      {dummyActiveOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default ActiveOrders;
