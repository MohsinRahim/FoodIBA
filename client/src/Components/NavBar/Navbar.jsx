// Components/NavBar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderIcon from '@mui/icons-material/Reorder';
import RestoreIcon from '@mui/icons-material/Restore';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#800000', /* Maroon background */
});

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const handleLoginClick = () => {
    navigate(`/login`);
  };

  const handleLogOutClick = () => {
    localStorage.removeItem('token');
    navigate(`/home`);
    window.location.reload();
  };

  const handleHomeClick = () => {
    navigate(`/home`);
  };

  const handleCartClick = () => {
    navigate(`/cart`);
  };

  const handleProfileClick = () => {
    navigate(`/profile`);
  };

  const handleHistoryClick = () => {
    navigate(`/history`);
  };

  const handleOrderClick = () => {
    navigate(`/orders`);
  };

  const handleRestMenuClick = () => {
    navigate(`/restmenu`);
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
  }, []);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        {role === 'restaurant owner' ? (
          <>
            <IconButton color="inherit" aria-label="history" onClick={handleHistoryClick}>
              <RestoreIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="orders" onClick={handleOrderClick}>
              <ReorderIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="restmenu" onClick={handleRestMenuClick}>
              <RestaurantMenuIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton edge="start" color="inherit" aria-label="home" onClick={handleHomeClick}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="cart" onClick={handleCartClick}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="account" onClick={handleProfileClick}>
              <AccountCircleIcon />
            </IconButton>
          </>
        )}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        {token === null ? (
          <Button color="inherit" onClick={handleLoginClick}>Login</Button>
        ) : <Button color="inherit" onClick={handleLogOutClick}>Log Out</Button>}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
