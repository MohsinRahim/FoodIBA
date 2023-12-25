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
