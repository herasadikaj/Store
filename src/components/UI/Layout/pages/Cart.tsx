// import React from 'react';
// import { useAppContext } from '../Context/Context';
// import { Link } from 'react-router-dom';
// import { Typography, Button, List, ListItem, ListItemText, Card, CardMedia } from '@mui/material';

// const Cart: React.FC = () => {
//   const { cartItems, removeFromCart, clearCart, totalPrice } = useAppContext();

//   return (
   
//       <div style={{ padding: '20px' }}>
//         <Typography variant="h4">Shopping Cart</Typography>
//         {cartItems.length === 0 ? (
//           <Typography variant="body1">Your cart is empty.</Typography>
//         ) : (
//           <>
//             <List>
//               {cartItems.map(item => (
//                 <ListItem key={item.id} divider>
//                   <Card sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//                     <CardMedia
//                       component="img"
//                       image={item.image}
//                       alt={item.name}
//                       sx={{ width: 100, height: 100 }}
//                     />
//                     <ListItemText
//                       primary={item.name}
//                       secondary={`Price: $${parseFloat(item.price).toFixed(2)} | Quantity: ${item.quantity}`}
//                     />
//                     <Button
//                       variant="outlined"
//                       color="secondary"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </Button>
//                     <Link to={`/article/${item.id}`} style={{ marginLeft: 16 }}>
//                       View Details
//                     </Link>
//                   </Card>
//                 </ListItem>
//               ))}
//             </List>
//             <Typography variant="h5" sx={{ mt: 3 }}>
//               Total Price: ${totalPrice.toFixed(2)}
//             </Typography>
//             <Button variant="contained" color="error" onClick={clearCart} sx={{ mt: 2 }}>
//               Remove All
//             </Button>
//           </>
//         )}
//       </div>
//   );
// };

// export default Cart;
