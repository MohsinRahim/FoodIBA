import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';
import { useNavigate } from 'react-router-dom';
// Assume fetchRestaurants is a function that gets restaurant data from your backend
import { fetchRestaurants } from '../Services/restaurantService'; 

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    loadRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/menu/${restaurantId}`);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Premium Quality Food for your Healthy & Daily Life
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet interdum erat.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {restaurants.map((restaurant, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} onClick={() => handleRestaurantClick(restaurant._id)}>
              <RestaurantCard {...restaurant} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}


// import React, { useEffect, useState } from 'react';
// import { Grid, Container, Typography, Box } from '@mui/material';
// import Navbar from '../Components/NavBar/Navbar';
// import Footer from '../Components/Footer/Footer';
// import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';
// import { fetchRestaurants } from '../Services/restaurantService';

// export default function Home() {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const loadRestaurants = async () => {
//       try {
//         const fetchedRestaurants = await fetchRestaurants();
//         setRestaurants(fetchedRestaurants);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };

//     loadRestaurants();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="lg">
//         <Box sx={{ my: 4 }}>
//           <Typography variant="h4" component="h1" gutterBottom>
//             Premium Quality Food for your Healthy & Daily Life
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet interdum erat.
//           </Typography>
//         </Box>
//         <Grid container spacing={4}>
//           {restaurants.map((restaurant, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <RestaurantCard {...restaurant} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Footer />
//     </>
//   );
// }


