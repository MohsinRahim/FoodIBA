// Pages/Orders/Orders.jsx
import React, { useEffect, useState } from 'react';
import ActiveOrders from '../../Components/Orders/ActiveOrders';
import CompletedOrders from '../../Components/Orders/CompletedOrders';
import IncomingOrders from '../../Components/Orders/IncomingOrders';
import Navbar from '../../Components/NavBar/Navbar';
import './Orders.css'; // Import the CSS file
import { getOrders } from '../../Services/orderService';

const Orders = () => {

  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);

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
  }, [setOrders]);

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