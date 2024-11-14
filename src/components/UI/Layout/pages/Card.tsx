import React, { useState } from 'react';
import { Card as MCard, CardContent, CardMedia, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useArticles } from '../../../Context/articlesContext'; // Import context hook

interface CardProps {
  article: Article;
}

const Card: React.FC<CardProps> = ({ article }) => {
  const { addToCart, editArticle, deleteArticle } = useArticles();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editedArticle, setEditedArticle] = useState(article);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedArticle({
      ...editedArticle,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    editArticle(editedArticle);
    setOpenEditDialog(false);
  };

  const handleDeleteConfirm = () => {
    deleteArticle(article.id);
    setOpenDeleteDialog(false);
  };

  return (
    <MCard sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300"
        width="250"
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
          {article.price}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => addToCart(article)} 
          sx={{ marginRight: 1 }}>
          Add
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={() => setOpenEditDialog(true)} 
          sx={{ marginRight: 1 }}>
          Edit
        </Button>
        <Button 
          variant="outlined" 
          color="error" 
          onClick={() => setOpenDeleteDialog(true)}>
          Delete
        </Button>
      </Box>

      {/* Edit Product Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editedArticle.name}
            onChange={handleEditChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={editedArticle.description}
            onChange={handleEditChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Image URL"
            name="image"
            value={editedArticle.image}
            onChange={handleEditChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Product Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </MCard>
  );
};

export default Card;
