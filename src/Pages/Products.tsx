import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../components/ProductCard';
import {products} from '../../src/data/products';

const Products = () => {
    const ProductsData=[ {
        id: 2,
        name: "Laptop",
        price: 49999,
        description: "High-performance laptop for professionals",
        image:
          " https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Electronics",
        stock: 5,
      },
      {
        id: 3,
        name: "T-Shirt",
        price: 999,
        description: "Comfortable cotton t-shirt",
        image:
          " https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Clothing",
        stock: 20,
      }]
  return (
    <Container>
        <Box>
            <Typography>
                <h1>This is products page</h1>
            </Typography>
        </Box>
        <Box>
        {ProductsData.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Box>
    </Container>
  );
};

export default Products;