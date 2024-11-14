import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%', 
        height: '30px',           
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#B83D02', 
        color: 'white',         
        bottom: 0,
        left: 0,
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
