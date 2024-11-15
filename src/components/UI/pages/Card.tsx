/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Card as MCard, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useCart } from '../../Context/cartContext';

interface CardProps {
  article: any;
  onEdit: (article: any) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ article, onEdit, onDelete }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(article); 
  };

  return (
    <MCard sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={article.image}
        alt={article.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          {article.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${article.price}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart} 
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => onEdit(article)} 
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(article.id)} 
        >
          Delete
        </Button>
      </Box>
    </MCard>
  );
};

export default Card;
