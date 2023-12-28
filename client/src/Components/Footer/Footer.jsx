import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', padding: '12px', textAlign: 'center' }}>
      <Typography variant="subtitle1">
        © {new Date().getFullYear()} foodIBA - All Rights Reserved.
      </Typography>
    </Box>
  );
}
