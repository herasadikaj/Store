import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        margin: 0, 
        padding: 0, 
        backgroundColor: '#FFF',
        color: 'black',
        position: 'relative', 
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
