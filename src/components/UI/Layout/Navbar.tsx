import MenuIcon from '@mui/icons-material/Menu';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
const Navbar = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        boxShadow: 'none',
        width: '100%', 
        margin: 0, 
        padding: 0,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{
            marginRight: 2,
            color: '#000000',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          underline="none"
          sx={{
            flexGrow: 1,
            color: '#000000',
            textDecoration: 'none',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Dancing Script'",
              fontSize: '1.5rem',
            }}
          >
            Better to Buy
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
