/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useArticles } from "../../Context/ArticlesContext";
import Layout from "../Layout/Layout";
import Card from "./Card";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";

const ProductList: React.FC = () => { 
  const { articlesList, deleteArticle, editArticle } = useArticles();
  const [editMode, setEditMode] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  const handleDelete = (id: number) => {
    deleteArticle(id); 
  };

  const handleEdit = (article: any) => {
    setEditMode(true);
    setCurrentArticle(article); 
  };

  const handleSave = (updatedArticle: any) => {
    editArticle(updatedArticle); 
    setEditMode(false);
    setCurrentArticle(null); 
  };

  return (
    <Layout>
      <Box sx={{ padding: 2, backgroundColor: 'white' }}> 
        <Typography variant="h4" gutterBottom>
          Product List
        </Typography>
        <Grid container spacing={2} className="product-grid">
          {articlesList.map((article: any) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card 
                article={article} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            </Grid>
          ))}
        </Grid>

        {editMode && currentArticle && (
          <Box className="edit-form" sx={{ marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
              Edit Article
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={currentArticle.name}
                onChange={(e) => setCurrentArticle({ ...currentArticle, name: e.target.value })}
              />
              <TextField
                label="Price"
                fullWidth
                margin="normal"
                value={currentArticle.price}
                onChange={(e) => setCurrentArticle({ ...currentArticle, price: e.target.value })}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={currentArticle.description}
                onChange={(e) => setCurrentArticle({ ...currentArticle, description: e.target.value })}
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleSave(currentArticle)}
                sx={{ marginTop: 2 }}
              >
                Save
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default ProductList;
