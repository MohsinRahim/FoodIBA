import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import MenuHeader from '../Components/Menu/MenuHeader';
import MenuItem from '../Components/Menu/MenuItem';
import AddToCartDialog from '../Components/Menu/AddToCartDialog';

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddToCartClick = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddToCartConfirm = (quantity, specialInstructions) => {
    console.log('Add to cart:', selectedItem, quantity, specialInstructions);
    // Here you would handle adding the item to the cart
    setDialogOpen(false);
  };

  // Dummy data for the menu items
  const menuItems = [
    {
      category: 'Pizza',
      items: [
        {
          name: 'Chicken Pizza',
          description: 'Topped with grilled chicken, onions, and green peppers.',
          price: '9.99',
          image: '/path/to/chicken-pizza.jpg' // Replace with the actual image path
        },
        {
          name: 'Pepperoni Pizza',
          description: 'Classic pepperoni pizza with mozzarella cheese.',
          price: '8.99',
          image: '/path/to/pepperoni-pizza.jpg' // Replace with the actual image path
        },
        // ...other pizza items
      ],
    },
    {
      category: 'Burger',
      items: [
        {
          name: 'Beef Burger',
          description: 'Juicy beef patty with cheese, lettuce, and tomato.',
          price: '7.99',
          image: '/path/to/beef-burger.jpg' // Replace with the actual image path
        },
        {
          name: 'Veggie Burger',
          description: 'Made with fresh veggies and a hint of spices.',
          price: '6.99',
          image: '/path/to/veggie-burger.jpg' // Replace with the actual image path
        },
        // ...other burger items
      ],
    },
    // ...other categories
  ];

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <MenuHeader name="Restaurant Name" image="/path/to/restaurant-image.jpg" />
        {menuItems.map((category) => (
          <React.Fragment key={category.category}>
            <Typography variant="h4" gutterBottom>
              {category.category}
            </Typography>
            {category.items.map((item) => (
              <MenuItem key={item.name} item={item} onAddToCart={handleAddToCartClick} />
            ))}
          </React.Fragment>
        ))}
        <AddToCartDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onConfirm={handleAddToCartConfirm}
          item={selectedItem}
        />
      </Container>
      <Footer />
    </>
  );
}
