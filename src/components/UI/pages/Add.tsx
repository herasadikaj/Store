import { useForm, SubmitHandler } from 'react-hook-form';
import { useArticles } from '../../Context/ArticlesContext'; 
import Layout from '../Layout/Layout';
import { AiOutlineDollar, AiOutlineTag, AiOutlineInfoCircle, AiOutlinePicture } from 'react-icons/ai'; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

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
    <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginLeft: '250px', 
          padding: '20px',
          width: '100%',
        }}
      >
        <Card sx={{ maxWidth: 800, width: '100%', boxShadow: 8, borderRadius: 3 }}>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
              <Layout>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
                    Add New Product
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 4, color: '#555', fontSize: '1.1rem' }}>
                    Fill in the form below to add a new product to the inventory.
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Product Name"
                      fullWidth
                      variant="outlined"
                      {...register("name", { required: "Name is required" })}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                      sx={{
                        mb: 2, 
                        backgroundColor: 'white',
                        borderRadius: 1.5,
                      }} 
                      InputProps={{
                        startAdornment: <AiOutlineTag style={{ marginRight: '8px' }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Product Description"
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={4}
                      {...register("description", { required: "Description is required" })}
                      error={!!errors.description}
                      helperText={errors.description ? errors.description.message : ""}
                      sx={{
                        mb: 2, 
                        backgroundColor: 'white',
                        borderRadius: 1.5,
                      }} 
                      InputProps={{
                        startAdornment: <AiOutlineInfoCircle style={{ marginRight: '8px' }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      label="Price"
                      fullWidth
                      variant="outlined"
                      type="text"
                      {...register("price", { required: "Price is required" })}
                      error={!!errors.price}
                      helperText={errors.price ? errors.price.message : ""}
                      sx={{
                        mb: 2, 
                        backgroundColor: 'white',
                        borderRadius: 1.5,
                      }} 
                      InputProps={{
                        startAdornment: <AiOutlineDollar style={{ marginRight: '8px' }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <FormControl fullWidth variant="outlined" error={!!errors.type} sx={{ mb: 2, backgroundColor: 'white' }}>
                      <InputLabel>Type</InputLabel>
                      <Select
                        label="Type"
                        {...register("type", { required: "Type is required" })}
                        sx={{
                          borderRadius: 1.5,
                        }}
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
    sx={{
      backgroundColor: 'white',
      borderRadius: 1.5,
    }} 
    InputProps={{
      startAdornment: <AiOutlinePicture style={{ marginRight: '8px' }} />,
    }}
  />
</Grid>

<Grid item xs={12}>
  <Button 
    variant="contained" 
    color="primary" 
    type="submit" 
    fullWidth
    sx={{
      padding: '12px 20px', 
      fontSize: '16px', 
      textTransform: 'none', 
      borderRadius: 3,
      backgroundColor: '#3f51b5',
      height: '40px', 
      width: '150px',
      marginTop: '8px' 
    }}
  >
    Add Product
  </Button>
</Grid>


                </Grid>
              </Layout>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Form;
