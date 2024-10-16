import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import "./App.css";
import GetApiData from "./utils";
import ProductCard from "./ProductCard";

function App() {
  const { data: products, loading, error } = GetApiData("https://fakestoreapi.com/products"); // Fetch multiple products

  // Ensure products is valid before attempting to render it
  // if (!products || products.length === 0) {
  //   return <p>Loading...</p>; 
  // }

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container maxWidth="xl" style={{marginTop: 50, marginBottom: 50}}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
