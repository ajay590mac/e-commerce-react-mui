import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { products } from "../../src/data/products";

const categoryImages = {
  Electronics:
    "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
  Clothing:
  "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  Books:
    "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
  Home: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  Sports:
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww",
  Beauty:
    "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8fHww",
  Toys: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95c3xlbnwwfHwwfHx8MA%3D%3D",
  Automotive:
    "https://images.unsplash.com/photo-1595787142842-7404bc60470d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGF1dG9tb3RpdmV8ZW58MHx8MHx8fDA%3D",
};

const Home: React.FC = () => {
  // Get unique categories from products
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Flipkom Store
        </Typography>

        {/* Categories Section */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Available Categories
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
                lg: "1fr 1fr 1fr 1fr",
              },
              gap: 3,
              mt: 3,
            }}
          >
            {categories.map((category) => (
              <Card
                key={category}
                component={RouterLink}
                to={`/products?category=${category}`}
                sx={{
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    categoryImages[category as keyof typeof categoryImages] ||
                    "https://via.placeholder.com/300"
                  }
                  alt={category}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" align="center">
                    {category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

