import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './OrderDetails.css'; // Import the CSS file

const useStyles = makeStyles((theme) => ({
  orderDetails: 'orderDetails', // reference to the CSS class
  detailItem: 'detailItem', // reference to the CSS class
}));

function OrderDetails({ orderId, items, amountDue, restaurant, readyTime }) {
  const classes = useStyles();

  // In your OrderDetails component
// In your OrderDetails component
return (
  <div className="orderDetailsContainer">
    <div className="confirmationMessage">Your order has been confirmed!</div>
    <div className="orderDetailsBox">
      <div className={classes.time}><strong>Ready Time:</strong> {readyTime}</div>
      <div className={classes.detailItem}><strong>Order ID:</strong> {orderId}</div>
      <div className={classes.detailItem}><strong>Items:</strong> {items.join(', ')}</div>
      <div className={classes.detailItem}><strong>Amount Due:</strong> {amountDue}</div>
      <div className={classes.detailItem}><strong>Restaurant:</strong> {restaurant}</div>
    </div>
  </div>
);


}

export default OrderDetails;
