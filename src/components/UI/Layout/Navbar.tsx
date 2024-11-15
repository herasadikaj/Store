import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidebar = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category); 
  };

  return (
    <div style={{ display: 'flex' }}>
      <IconButton
        onClick={toggleDrawer}
        style={{
          position: 'absolute',
          top: '15px',
          left: open ? '250px' : '15px',
          transition: 'left 0.3s',
          zIndex: 1,
        }}
      >
        {open ? <KeyboardArrowLeftIcon color="primary" /> : <KeyboardArrowRightIcon />}
      </IconButton>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: open ? 250 : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? 250 : 0,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
          },
        }}
      >
        <List>
          <ListItemButton onClick={() => handleCategorySelect("Products")}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Products" />
            </Link>
          </ListItemButton>

          <ListItemButton onClick={() => handleCategorySelect("Add Product")}>
            <Link to="/add-product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Add Product" />
            </Link>
          </ListItemButton>

          <ListItemButton onClick={() => handleCategorySelect("Cart")}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Cart" />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
