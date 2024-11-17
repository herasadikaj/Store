/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Card as MCard, CardContent, CardMedia, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useCart } from '../../Context/cartContext';
import { AiOutlineShoppingCart, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; 

interface CardProps {
  article: any;
  onEdit: (article: any) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ article, onEdit, onDelete }) => {
  const { addToCart } = useCart();
  
  const [openDialog, setOpenDialog] = useState(false);
  const [editedArticle, setEditedArticle] = useState(article);

  const handleAddToCart = () => {
    addToCart(article);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedArticle({
      ...editedArticle,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    onEdit(editedArticle); 
    setOpenDialog(false);
  };

  return (
    <MCard sx={{ 
      maxWidth: 345, 
      margin: 2, 
      borderRadius: 2, 
      boxShadow: 3, 
      border: '1px solid black', 
    }}>
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
          onClick={handleAddToCart}
          startIcon={<AiOutlineShoppingCart />}
        >
        
        </Button>
        <Button
          variant="outlined"
          onClick={handleDialogOpen}
          startIcon={<AiOutlineEdit />}
        >
          
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(article.id)}
          startIcon={<AiOutlineDelete />}
        >
         
        </Button>
      </Box>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            fullWidth
            variant="outlined"
            value={editedArticle.name}
            onChange={handleInputChange}
            name="name"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={editedArticle.description}
            onChange={handleInputChange}
            name="description"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Price"
            fullWidth
            variant="outlined"
            value={editedArticle.price}
            onChange={handleInputChange}
            name="price"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Image URL"
            fullWidth
            variant="outlined"
            value={editedArticle.image}
            onChange={handleInputChange}
            name="image"
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MCard>
  );
};

export default Card;
