import React, { useState } from 'react';
import { Container, Typography, Paper, Avatar } from '@mui/material';
import UserInfoForm from '../components/Profile/UserInfoForm';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleUserDataChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  };

  const saveUserData = () => {
    // Implement user data save logic
    console.log('User data saved:', userData);
  };

  const changePassword = () => {
    // Implement password change logic
    console.log('Password change request:', passwords);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 4 }}>
        <Avatar
          src="/path/to/user-image.jpg" // Replace with dynamic source
          sx={{ width: 56, height: 56, mb: 2 }}
        />
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <UserInfoForm userData={userData} onUserDataChange={handleUserDataChange} onSave={saveUserData} />
        <ChangePasswordForm passwords={passwords} onPasswordChange={handlePasswordChange} onSubmit={changePassword} />
      </Paper>
    </Container>
  );
}
