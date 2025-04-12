import React from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total: number, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Add some products to your cart to see them here.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cartItems.map((item) => (
          <Card key={item.id}>
            {/*Change to Table and add some more fumctionality */}

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                p: 2,
              }}>
              <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: "contain" }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    ${item.price}
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Button
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}>
                      <RemoveIcon />
                    </Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button
                      size="small"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      <AddIcon />
                    </Button>
                    <Tooltip title="Remove">
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ ml: 2 }}>
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h5" component="div">
          Total: ${calculateTotal()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Cart;
