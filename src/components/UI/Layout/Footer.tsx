import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',  // Ensures the footer spans full width
        py: 2,          // Adjusted padding for a more balanced height
        backgroundColor: '#B83D02',  // Background color
        color: 'white',  // Text color
        bottom: 0,
        left: 0,
        position: 'relative', // Ensures the footer sticks to the bottom if content is short
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" align="center">
          © 2024 BB
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
