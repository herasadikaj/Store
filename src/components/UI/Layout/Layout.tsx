import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleCategorySelect = (category: string) => {
    console.log('Selected Category:', category);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar toggleDrawer={toggleDrawer} />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar open={open} onCategorySelect={handleCategorySelect} />
        <main
          style={{
            flexGrow: 1,
            marginLeft: open ? 250 : 0,  
            transition: 'margin-left 0.3s ease',  
            padding: '20px',
            marginTop: '64px',  
          }}
        >
          {children}
        </main>
      </Box>

      <Footer />
    </div>
  );
};

export default Layout;
