import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
