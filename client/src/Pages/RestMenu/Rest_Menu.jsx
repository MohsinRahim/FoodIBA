// RestMenu.jsx

import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import MenuItem from '../../Components/Rest_Menu/MenuItem';
import DealItem from '../../Components/Rest_Menu/DealItem';
import EditItemDialog from '../../Components/Rest_Menu/EditItemDialog';
import Navbar from '../../Components/NavBar/Navbar';
import './RestMenu.css'; // Import the CSS file
import { fetchMenuItemsByOwner } from '../../Services/menuService';

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
    // Implement logic to update or add item to the menu
    // if (currentItem) {
    //   // Update existing item
    //   const index = currentItem.isDeal
    //     ? dealItems.findIndex((deal) => deal.id === currentItem.id)
    //     : menuItems.findIndex((item) => item.id === currentItem.id);

    //   if (currentItem.isDeal) {
    //     const updatedDealItems = [...dealItems];
    //     updatedDealItems[index] = { ...currentItem, ...formData };
    //     setDealItems(updatedDealItems);
    //   } else {
    //     const updatedMenuItems = [...menuItems];
    //     updatedMenuItems[index] = { ...currentItem, ...formData };
    //     setMenuItems(updatedMenuItems);
    //   }
    // } else {
    //   // Add new item or deal
    //   const newItemOrDeal = {
    //     id: formData.isDeal ? dealItems.length + 1 : menuItems.length + 1,
    //     ...formData,
    //     items: formData.isDeal ? [] : undefined,
    //   };

    //   if (formData.isDeal) {
    //     setDealItems([...dealItems, newItemOrDeal]);
    //   } else {
    //     setMenuItems([...menuItems, newItemOrDeal]);
    //   }
    // }

    setEditItemDialogOpen(false);
  };

  useEffect(() =>{
      fetchMenuItemsByOwner().then((response) => {
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
            <div key={item.id}>
              <MenuItem {...item} />
              <Button onClick={() => handleEditItemClick(item)}>
                Edit Item
              </Button>
            </div>
          ))}
          <Button variant="contained" onClick={handleAddItemClick} style={{ backgroundColor: '#800000', color: 'white' }}>
            Add Item/Deal
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">Deals</Typography>
          {/* {dealItems.map((deal) => (
            <div key={deal.id}>
              <DealItem {...deal} />
              <Button onClick={() => handleEditItemClick(deal)}>
                Edit Deal
              </Button>
            </div>
          ))} */}
          <Button variant="contained" onClick={handleAddItemClick} style={{ backgroundColor: '#800000', color: 'white' }}>
            Add Deal
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
