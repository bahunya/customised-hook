import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({product}) => {
  return(
    <Card>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6">{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  )

}
export default ProductCard;