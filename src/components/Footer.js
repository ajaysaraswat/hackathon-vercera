import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/exer.jpg';

const Footer = () => (
  
  <Box mt="80px" bgcolor="skyblue">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100%', height: '350px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '40px', xs: '20px' } }} mt="5px" textAlign="center" pb="40px" bgcolor={"red"}>Sweat + Sacrifice = Success</Typography>
    <Typography textAlign="center">copyright@vercera 2024</Typography>
  </Box>
 
);


export default Footer;
