import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import MenuHeader from '../Components/Menu/MenuHeader';
import MenuItem from '../Components/Menu/MenuItem';
import AddToCartDialog from '../Components/Menu/AddToCartDialog';
import { useParams } from 'react-router-dom';
import { fetchMenuItemsByRestaurant, fetchRestaurantById } from '../Services/menuService'; // Import required functions
import {  addToCart, fetchCart, clearCart } from '../Services/cartService'; // Import required functions

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null); // State for restaurant details

  useEffect(() => {
    const loadRestaurantAndMenuItems = async () => {
        try {
            const restaurantDetails = await fetchRestaurantById(restaurantId);
            setRestaurant(restaurantDetails);

            const items = await fetchMenuItemsByRestaurant(restaurantId);
            setMenuItems(items);
        } catch (error) {
            console.error('Error: kuch to masla he', error);
        }
    };

    loadRestaurantAndMenuItems();
}, [restaurantId]);

  // useEffect(() => {
  //   const loadMenuItems = async () => {
  //     try {
  //       const items = await fetchMenuItemsByRestaurant(restaurantId);
  //       setMenuItems(items);
  //     } catch (error) {
  //       console.error('Error fetching menu items:', error);
  //     }
  //   };

  //   loadMenuItems();
  // }, [restaurantId]);

  const handleAddToCartClick = async (item) => {
    if(localStorage.getItem('token') === null){
      window.alert('Please Login First');
      return;
    }
    const existingCart = await fetchCart();

    if (existingCart.items.length > 0 && existingCart.items[0].menuItem.restaurant !== restaurantId) {
      if (window.confirm("Remove existing items from Cart?")) {
        await clearCart();
      } else {
        return;
      }
    }

    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddToCartConfirm = async (quantity, specialInstructions) => {
    console.log('Add to cart:', selectedItem, quantity, specialInstructions);
    if(localStorage.getItem('token') === null){
      window.alert('Please Login First');
      return;
    } else {
      await addToCart(selectedItem._id, quantity); // Assuming the quantity is 1 for simplicity
    }
    setDialogOpen(false);
  };

//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="md">
//         <MenuHeader name="Restaurant Name" image="/path/to/restaurant-image.jpg" />
//         {menuItems.map((item, index) => (
//           <React.Fragment key={index}>
//             <Typography variant="h5" gutterBottom>
//               {item.category}
//             </Typography>
//             <MenuItem key={item._id} item={item} onAddToCart={() => handleAddToCartClick(item)} />
//           </React.Fragment>
//         ))}
//         <AddToCartDialog
//           open={dialogOpen}
//           onClose={handleDialogClose}
//           onConfirm={handleAddToCartConfirm}
//           item={selectedItem}
//         />
//       </Container>
//       <Footer />
//     </>
//   );
// }

return (
  <>
      <Navbar />
      <Container maxWidth="md">
          {restaurant && <MenuHeader name={restaurant.name} image={restaurant.logo} />}
          {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                  <Typography variant="h5" gutterBottom>
                      {item.category}
                  </Typography>
                  <MenuItem key={item._id} item={item} onAddToCart={() => handleAddToCartClick(item)} />
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



//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="md">
//         <MenuHeader name="Restaurant Name" image="/path/to/restaurant-image.jpg" />
//         {menuItems && menuItems.map((category) => ( // Check if menuItems is available
//           <React.Fragment key={category.category}>
//             <Typography variant="h4" gutterBottom>
//               {category.category}
//             </Typography>
//             {category.items && category.items.map((item) => ( // Check if items are available
//               <MenuItem key={item.name} item={item} onAddToCart={handleAddToCartClick} />
//             ))}
//           </React.Fragment>
//         ))}
//         <AddToCartDialog
//           open={dialogOpen}
//           onClose={handleDialogClose}
//           onConfirm={handleAddToCartConfirm}
//           item={selectedItem}
//         />
//       </Container>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import Header from '../Components/Header/Header';
// import Footer from '../Components/Footer/Footer';
// import MenuHeader from '../Components/Menu/MenuHeader';
// import MenuItem from '../Components/Menu/MenuItem';
// import AddToCartDialog from '../Components/Menu/AddToCartDialog';

// export default function Menu() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleAddToCartClick = (item) => {
//     setSelectedItem(item);
//     setDialogOpen(true);
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   const handleAddToCartConfirm = (quantity, specialInstructions) => {
//     console.log('Add to cart:', selectedItem, quantity, specialInstructions);
//     // Here you would handle adding the item to the cart
//     setDialogOpen(false);
//   };

//   // Dummy data for the menu items
//   const menuItems = [
//     {
//       category: 'Pizza',
//       items: [
//         {
//           name: 'Chicken Pizza',
//           description: 'Topped with grilled chicken, onions, and green peppers.',
//           price: '9.99',
//           image: '/path/to/chicken-pizza.jpg' // Replace with the actual image path
//         },
//         {
//           name: 'Pepperoni Pizza',
//           description: 'Classic pepperoni pizza with mozzarella cheese.',
//           price: '8.99',
//           image: '/path/to/pepperoni-pizza.jpg' // Replace with the actual image path
//         },
//         // ...other pizza items
//       ],
//     },
//     {
//       category: 'Burger',
//       items: [
//         {
//           name: 'Beef Burger',
//           description: 'Juicy beef patty with cheese, lettuce, and tomato.',
//           price: '7.99',
//           image: '/path/to/beef-burger.jpg' // Replace with the actual image path
//         },
//         {
//           name: 'Veggie Burger',
//           description: 'Made with fresh veggies and a hint of spices.',
//           price: '6.99',
//           image: '/path/to/veggie-burger.jpg' // Replace with the actual image path
//         },
//         // ...other burger items
//       ],
//     },
//     // ...other categories
//   ];

//   return (
//     <>
//       <Header />
//       <Container maxWidth="md">
//         <MenuHeader name="Restaurant Name" image="/path/to/restaurant-image.jpg" />
//         {menuItems.map((category) => (
//           <React.Fragment key={category.category}>
//             <Typography variant="h4" gutterBottom>
//               {category.category}
//             </Typography>
//             {category.items.map((item) => (
//               <MenuItem key={item.name} item={item} onAddToCart={handleAddToCartClick} />
//             ))}
//           </React.Fragment>
//         ))}
//         <AddToCartDialog
//           open={dialogOpen}
//           onClose={handleDialogClose}
//           onConfirm={handleAddToCartConfirm}
//           item={selectedItem}
//         />
//       </Container>
//       <Footer />
//     </>
//   );
// }
