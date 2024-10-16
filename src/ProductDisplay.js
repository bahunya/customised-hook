import React from "react";
import { Container } from "@mui/material";
import Grid2 from "@mui/material-next/Grid"
import ProductCard from "./ProductCard";

import GetApiData from './utils';

const ProductDisplay = () => {
  const products = GetApiData('https://fakestoreapi.com/products/1');

  return (
    <Container>
      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={products} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductDisplay;