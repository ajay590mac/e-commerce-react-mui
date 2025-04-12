import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        py: 2,
        textAlign: "center",
        mt: 4,
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
