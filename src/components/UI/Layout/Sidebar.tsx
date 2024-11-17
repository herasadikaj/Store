import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const Sidebar = ({ open, onCategorySelect }: { open: boolean; onCategorySelect: (category: string) => void }) => {
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 250,  
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,  
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',  
          marginTop: '64px', 
          position: 'absolute', 
          zIndex: 1200, 
        },
        '& .MuiDrawer-paperAnchorLeft': {
          left: open ? 0 : -250, 
        },
      }}
    >
      <List>
        <ListItemButton onClick={() => handleCategorySelect('Products')}>
          <Link to="/product" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4477/4477393.png"
                alt="Products Icon"
                style={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={() => handleCategorySelect('Add Product')}>
          <Link to="/add-product" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <img
                src="https://static.thenounproject.com/png/1014395-200.png"
                alt="Add Product Icon"
                style={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={() => handleCategorySelect('Cart')}>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <img
                src="https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-shopping-cart-icon-vector-symbol-png-image_5676170.png"
                alt="Cart Icon"
                style={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={() => handleCategorySelect('Recipt')}>
          <Link to="/recipt" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBJQiwshsL1iTDLcm5tkj-p6kGRim8yNU7ruVg8ZeDul2FNlGYLUMtW8pjSqE3HpfCzY&usqp=CAU"
                alt="Recipt Icon"
                style={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText primary="Recipt" />
          </Link>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
