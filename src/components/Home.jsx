import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div style={{ margin: '5%' }}>
      <Grid container spacing={4}>
        {cardData.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: 'contain', padding: '10px' }}
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title.length > 40 ? `${product.title.slice(0, 40)}...` : product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating?.rate || "N/A"} ⭐
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
