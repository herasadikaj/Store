/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, Grid } from '@mui/material';
import { useArticles } from '../../../Context/ArticlesContext'; // Import the context
import Layout from '../Layout';

type Inputs = {
  name: string;
  description: string;
  price: string;
  type: string;
  image: string;
};

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { addArticle } = useArticles(); // Get the addArticle function from context

  // Handle form submission
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newArticle = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID (you might want to improve this logic)
      ...data,
    };
    addArticle(newArticle); // Add the new article to the context
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      {/* Assuming Layout accepts onCategorySelect function */}
      <Layout onCategorySelect={(category: string) => { 
        // Implement the category selection logic here if necessary
        console.log('Selected category:', category); 
      }}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              {...register("description", { required: "Description is required" })}
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ""}
            />
          </Grid>

          {/* Price */}
          <Grid item xs={12}>
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              type="number"
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
          </Grid>

          {/* Type */}
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={!!errors.type}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                {...register("type", { required: "Type is required" })}
              >
                <MenuItem value="">
                  <em>Select a type</em>
                </MenuItem>
                <MenuItem value="T-shirt">T-shirt</MenuItem>
                <MenuItem value="Shoes">Shoes</MenuItem>
                <MenuItem value="Jeans">Jeans</MenuItem>
              </Select>
              {errors.type && <FormHelperText>{errors.type.message}</FormHelperText>}
            </FormControl>
          </Grid>

          {/* Image URL */}
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              fullWidth
              variant="outlined"
              {...register("image", { required: "Image URL is required" })}
              error={!!errors.image}
              helperText={errors.image ? errors.image.message : ""}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Layout>
    </form>
  );
};

export default Form;
