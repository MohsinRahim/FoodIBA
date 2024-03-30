// ProfilePage.jsx

import React, { useState } from 'react';
import UploadImage from '../../Components/UploadImage/UploadImage';
import EmptyBox from '../../Components/EmptyBox/EmptyBox';
import TheTable from '../../Components/TheTable/TheTable';
import './ProfilePage.css';

const ProfilePage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div className="profile-page-container">
      <div className="upload-container">
        <UploadImage onImageUpload={handleImageUpload} />
        <EmptyBox image={uploadedImage} />
      </div>
      <TheTable />
    </div>
  );
};

export default ProfilePage;
