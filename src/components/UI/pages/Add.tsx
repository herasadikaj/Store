import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, Grid } from '@mui/material';
import { useArticles } from '../../Context/ArticlesContext'; 
import Layout from '../Layout/Layout';

type ProductType = "T-shirt" | "Shoes" | "Jeans";

type Inputs = {
  name: string;
  description: string;
  price: string;
  type: ProductType;  
  image: string;
};

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { addArticle } = useArticles();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newArticle = {
      id: Math.floor(Math.random() * 1000), 
      name: data.name,
      description: data.description,
      price: data.price,
      type: data.type, 
      image: data.image,
    };

    
    addArticle(newArticle); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <Layout onCategorySelect={(category: string) => { 
        console.log('Selected category:', category); 
      }}>
        <Grid container spacing={2}>
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

          <Grid item xs={12}>
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              type="text"
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
          </Grid>

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
