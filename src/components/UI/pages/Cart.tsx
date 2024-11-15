import React from 'react';
import { useCart } from '../../Context/cartContext';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import Layout from '../Layout/Layout';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <Layout onCategorySelect={() => {}}>
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
              {cart.map(item => (
                <ListItem key={item.id} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100px', height: '100px', marginRight: '16px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <ListItemText
                        primary={item.name}
                        secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
                      />
                      <Button variant="outlined" onClick={() => addToCart({ ...item, quantity: 1 })} sx={{ marginRight: 1 }}>
                        Add More
                      </Button>
                      <Button variant="outlined" onClick={() => removeFromCart(item.id)} sx={{ marginTop: 1 }}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCart}
              sx={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff6f61', marginTop: 2 }}
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
