import React from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function UserInfoForm({ userData, onUserDataChange, onSave }) {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        value={userData.name}
        onChange={onUserDataChange}
      />
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={userData.email}
        onChange={onUserDataChange}
      />
      <TextField
        margin="normal"
        fullWidth
        id="phone"
        label="Phone Number"
        name="phone"
        autoComplete="tel"
        value={userData.phone}
        onChange={onUserDataChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onSave}
      >
        Save Changes
      </Button>
    </Box>
  );
}
