import React from 'react';
import { Box} from '@mui/material';
import Layout from '../Layout/Layout';
import '../../style.css';

const Homepage: React.FC = () => {
  const backgroundImage =
    'https://i.pinimg.com/736x/af/99/60/af996083d4762e4609dd324037473fed.jpg';

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 64px - 100px)', 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          margin: 0,
          padding: 0,
        }}
      >
       
      </Box>
    </Layout>
  );
};

export default Homepage;
