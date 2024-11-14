import React from 'react';
import Sidebar from './Navbar'; 
import Footer from './Footer';  
import { Box } from '@mui/material';

interface LayoutProps {
  onCategorySelect: (category: string) => void;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ onCategorySelect, children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
 
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
       
        <Sidebar onCategorySelect={onCategorySelect} />


        <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>

  
      <Footer />
    </Box>
  );
};

export default Layout;
