/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useCart } from '../../../Context/cartContext';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import Layout from '../Layout';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price || '0') * item.quantity, 0);

  // Update the quantity of an item
  

  return (
    <Layout onCategorySelect={function (category: string): void {
          throw new Error('Function not implemented.');
      } }>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Shopping Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            Your cart is empty.
          </Typography>
        ) : (
          <>
            <List sx={{ marginBottom: 2 }}>
              {cart.map((item) => (
                <ListItem key={item.id} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100px', height: '100px', marginRight: '16px', objectFit: 'cover' , color:'white'}}
                    />
                    <div>
                      
        
                      <Button variant="outlined" onClick={() => removeFromCart(item.id)} sx={{ marginTop: 1 }}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
            
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCart}
              sx={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff6f61' }}
            >
              Clear Cart
            </Button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
