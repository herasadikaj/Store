import  Box  from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
