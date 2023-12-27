import React from 'react';
import OrderDetails from '../../Components/Confirmation/OrderDetails/OrderDetails';
import Navbar from '../../Components/NavBar/Navbar';

import './Confirmation.css';

function Confirmation() {
  return (
    <div className="confirmationPage">
      <Navbar />
      <div className="orderDetailsContainer">
        <OrderDetails
          orderId="123456"
          items={['Item 1', 'Item 2', 'Item 3']}
          amountDue="$50.00"
          restaurant="Awesome Restaurant"
          readyTime="30 minutes"
        />
      </div>
    </div>
  );
}

export default Confirmation;
