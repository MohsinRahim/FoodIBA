import React from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function ChangePasswordForm({ passwords, onPasswordChange, onSubmit }) {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <TextField
        margin="normal"
        fullWidth
        name="oldPassword"
        label="Old Password"
        type="password"
        id="old-password"
        autoComplete="current-password"
        value={passwords.oldPassword}
        onChange={onPasswordChange}
      />
      <TextField
        margin="normal"
        fullWidth
        name="newPassword"
        label="New Password"
        type="password"
        id="new-password"
        autoComplete="new-password"
        value={passwords.newPassword}
        onChange={onPasswordChange}
      />
      <TextField
        margin="normal"
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirm-password"
        autoComplete="new-password"
        value={passwords.confirmPassword}
        onChange={onPasswordChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onSubmit}
      >
        Change Password
      </Button>
    </Box>
  );
}
