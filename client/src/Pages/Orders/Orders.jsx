// Pages/Orders/Orders.jsx
import React, { useEffect, useState } from 'react';
import ActiveOrders from '../../Components/Orders/ActiveOrders';
import CompletedOrders from '../../Components/Orders/CompletedOrders';
import IncomingOrders from '../../Components/Orders/IncomingOrders';
import Navbar from '../../Components/NavBar/Navbar';
import './Orders.css'; // Import the CSS file
import { getOrders } from '../../Services/orderService';

const Orders = () => {
  // Dummy data for demonstration
  const dummyActiveOrders = [
    { id: 1, orderId: 'A001', name: 'John Doe', items: ['Burger', 'Fries'], amount: 15.99, time: '12:30 PM', status: 'active' },
    { id: 2, orderId: 'A002', name: 'Jane Smith', items: ['Pizza', 'Salad'], amount: 22.50, time: '1:45 PM', status: 'active' },
    { id: 3, orderId: 'A003', name: 'Chris Brown', items: ['Chicken Wings', 'Coke'], amount: 12.75, time: '2:30 PM', status: 'active' },
  ];

  const dummyCompletedOrders = [
    { id: 4, orderId: 'C001', name: 'Alice Johnson', items: ['Pasta', 'Garlic Bread'], amount: 18.75, time: '2:15 PM', status: 'completed' },
    { id: 5, orderId: 'C002', name: 'Bob Wilson', items: ['Sushi', 'Miso Soup'], amount: 30.00, time: '3:30 PM', status: 'completed' },
    { id: 6, orderId: 'C003', name: 'Eva Miller', items: ['Steak', 'Wine'], amount: 45.50, time: '4:45 PM', status: 'completed' },
  ];

  const dummyIncomingOrders = [
    { id: 7, name: 'Sam Johnson', items: ['Pasta', 'Garlic Bread'], amount: 18.75, time: '5:15 PM' },
    { id: 8, name: 'Emma Wilson', items: ['Sushi', 'Miso Soup'], amount: 30.00, time: '6:30 PM' },
  ];
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);

  const [activeOrdersUser, setActiveOrdersUser] = useState([]);
  const [completedOrdersUser, setCompletedOrdersUser] = useState([]);
  const [pendingOrdersUser, setPendingOrdersUser] = useState([]);
  const [cancelledOrdersUser, setCancelledOrdersUser] = useState([]);

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        const allOrders = res.data.orders;
        
        // Filter orders by status
        const active = allOrders.filter(order => order.status === "Accepted");
        const completed = allOrders.filter(order => order.status === "Completed");
        const pending = allOrders.filter(order => order.status === "Pending");
        const cancelled = allOrders.filter(order => order.status === "Cancelled");
  
        

        // Update state
        setOrders(allOrders);
        setActiveOrders(active);
        setCompletedOrders(completed);
        setPendingOrders(pending);
        setCancelledOrders(cancelled);
      } catch (err) {
        console.error(err);
        // Handle error here
      }
    };
  
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <Navbar />
      <h1>Orders Page</h1>
      <div className="orders-container">
        <ActiveOrders activeOrders={activeOrders} />
        {/* <CompletedOrders completedOrders={completedOrders} /> */}
      </div>
      <IncomingOrders incomingOrders={pendingOrders} />
    </div>
  );
};

export default Orders;