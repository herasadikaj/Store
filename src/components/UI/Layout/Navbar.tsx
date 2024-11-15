/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ListItem from '@mui/material/ListItem';

const Sidebar = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleCategoryClick = (category: string) => {
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
        {open ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
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
         
          <ListItemButton>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Products" />
            </Link>
          </ListItemButton>

          <ListItem button>
            <Link to="/add-product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Add Product" />
            </Link>
         
          </ListItem>

          <ListItem button>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Cart" />
            </Link>
         
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
