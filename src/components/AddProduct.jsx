import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    image: '',
    rating: ''
  });

  
  function addProduct() {
    
    if (
      !productData.title.trim() ||
      !productData.price.trim() ||
      !productData.image.trim() ||
      !productData.rating.trim()
    ) {
      alert('Please fill out all fields.');
      return;
    }

    alert('✅ Product added successfully!');
    console.log('New Product:', productData);
  };

  return (
    <div style={{ textAlign: 'center', margin: '10%', marginLeft: '60%' }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Typography variant='h4' style={{ color: 'Red', fontWeight: 'bold', marginTop: '10%' }}>
          ADD NEW PRODUCT
        </Typography> <br />

        
        <Grid item xs={12} sm={10} md={8}>
          <TextField className="textField"
            label='Product Name'
            variant='outlined'
            name='title'
            onChange={(e) => setProductData({ ...productData, title: e.target.value })}
            fullWidth
          />
        </Grid> <br />

        
        <Grid item xs={12} sm={8} md={6}>
          <TextField className="textField"
            label='Price'
            variant='outlined'
            name='price'
            type='number'
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            fullWidth
          />
        </Grid> <br />

        
        <Grid item xs={12} sm={8} md={6}>
          <TextField className="textField"
            label='Image URL'
            variant='outlined'
            name='image'
            onChange={(e) => setProductData({ ...productData, image: e.target.value })}
            fullWidth
          />
        </Grid> <br />

        
        <Grid item xs={12} sm={8} md={6}>
          <TextField className="textField"
            label='Rating (0-5)'
            variant='outlined'
            name='rating'
            type='number'
            inputProps={{ step: "0.1", min: "0", max: "5" }}
            onChange={(e) => setProductData({ ...productData, rating: e.target.value })}
            fullWidth
          />
        </Grid> <br />

        
        <Grid item>
          <Button color='error' variant='contained' onClick={addProduct}>
            ADD PRODUCT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;
