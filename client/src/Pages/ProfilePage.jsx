// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import Navbar from '../Components/NavBar/Navbar';
// import userService from '../Services/userServicetest';

// const ProfilePage = () => {
//   const [userProfile, setUserProfile] = useState({});

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const profileData = await userService.fetchUserProfile();
//         setUserProfile(profileData);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Placeholder functions for future implementation
//   const handleChangePassword = () => {
//     console.log('Change password');
//   };

//   const handleDeleteAccount = () => {
//     console.log('Delete account');
//   };

//   return (
//     <div>
//       <Navbar />
//       <Container maxWidth="sm" style={{ marginTop: '20px' }}>
//         <Typography variant="h4">Profile</Typography>
//         <Typography variant="subtitle1">First Name: {userProfile.firstName}</Typography>
//         <Typography variant="subtitle1">Last Name: {userProfile.lastName}</Typography>
//         <Typography variant="subtitle1">Email: {userProfile.email}</Typography>

//         <Button variant="contained" color="primary" onClick={handleChangePassword} style={{ marginTop: '20px' }}>
//           Change Password
//         </Button>

//         <Button variant="contained" color="secondary" onClick={handleDeleteAccount} style={{ marginTop: '20px' }}>
//           Delete Account
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default ProfilePage;



import React, { useState } from 'react';
import AppBar_material from '../Components/AppBar_Material/AppBar';  // Adjust the path if needed
import Profile from '../Components/Profile3/Profile';  // Adjust the path if needed
import UploadImage from '../Components/UploadImage/UploadImage';
import EmptyBox from '../Components/EmptyBox/EmptyBox';
import TemporaryDrawer from '../Components/sidebar_material/sidebar';
import TheTable from '../Components/TheTable/TheTable';
import Navbar from '../Components/NavBar/Navbar';

const ProfilePage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); // State to store the uploaded image URL

  // Function to handle the image upload
  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Navbar />
      {/* <AppBar_material toggleDrawer={toggleDrawer} />
      <TemporaryDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> */}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '50px' }}>
        <UploadImage onImageUpload={handleImageUpload} />
        <EmptyBox image={uploadedImage} />
      </div>
      <TheTable/>
    </div>
  );
};

export default ProfilePage;
