// RestMenu.jsx

import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import MenuItem from '../../Components/Rest_Menu/MenuItem';
import DealItem from '../../Components/Rest_Menu/DealItem';
import EditItemDialog from '../../Components/Rest_Menu/EditItemDialog';
import Navbar from '../../Components/NavBar/Navbar';
import './RestMenu.css'; // Import the CSS file
import { createMenuItem, deleteMenuItem, fetchMenuItemsByOwner } from '../../Services/menuService';

const RestMenu = () => {
  const [menuItems, setMenuItems] = useState([
  ]);

  const [editItemDialogOpen, setEditItemDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleEditItemClick = (item) => {
    setCurrentItem(item);
    setEditItemDialogOpen(true);
  };

  const handleAddItemClick = () => {
    setCurrentItem(null);
    setEditItemDialogOpen(true);
  };

  const handleEditItemSubmit = (formData) => {
    createMenuItem(formData);
    setEditItemDialogOpen(false);
  };

  const onDelete = (id) => {
    deleteMenuItem(id);
  }

  useEffect(() =>{
    fetchMenuItemsByOwner().then((response) => {
      localStorage.setItem('restaurantId', response[0].restaurant);
      console.log(response);
      setMenuItems(response);
    });
  }, []); 

  return (
    <div className="rest-menu-container">
      <Navbar />

      <Typography variant="h4">Menu</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="h5">Items</Typography>
          {menuItems.map((item) => (
            console.log(item),
            <div key={item._id}>
              <MenuItem 
                name={item.name} 
                price={item.price} 
                description={item.description} 
                id={item._id}
                onDelete={onDelete} 
              />
              <Button onClick={() => handleEditItemClick(item)}>
                Edit Item
              </Button>
            </div>
          ))}
          <Button variant="contained" onClick={handleAddItemClick} style={{ backgroundColor: '#800000', color: 'white' }}>
            Add Item/Deal
          </Button>
        </Grid>
      </Grid>
      <EditItemDialog
        open={editItemDialogOpen}
        handleClose={() => setEditItemDialogOpen(false)}
        handleSubmit={handleEditItemSubmit}
        currentItem={currentItem}
      />
    </div>
  );
};

export default RestMenu;
