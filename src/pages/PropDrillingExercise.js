import React, { useState } from "react";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import WrapperBox from "../components/WrapperBox";

const RootComponent = (props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([
    { id: "p1", title: "Product 1", price: 1999 },
    { id: "p2", title: "Product 2", price: 999 },
  ]);
  // eslint-disable-next-line
  const [cart, setCart] = useState({
    products: [
      { id: "p1", title: "Product 1", price: 0, qty: 0 },
      { id: "p2", title: "Product 2", price: 0, qty: 0 },
    ],
    totalPrice: 0,
  });

  // Step 0 Read and understand the structure of the app

  // Step 1
  // Write a function called addProductToCart() that takes a product object as an argument
  // Example newProduct = { id: "p1", title: "Product 1", price: 1999 }
  // The function will add one new product into the cart
  const addProductToCart = (newProduct) => {
    const productList = cart.products.map((product) => {
      if (product.title === newProduct.title) {
        product.qty += 1;
        product.price += newProduct.price;
        console.log(product.qty);
      }
      return product;
    });
    const newTotalPrice = cart.totalPrice + newProduct.price;
    setCart({ products: productList, totalPrice: newTotalPrice });
  };

  const removeProductFromCart = (removeProduct) => {
    let newTotalPrice = cart.totalPrice;
    const newProductList = cart.products.map((product) => {
      if (product.title === removeProduct.title && product.qty > 0) {
        product.qty -= 1;
        product.price -= removeProduct.price;
        newTotalPrice -= removeProduct.price;
      }
      return product;
    });
    setCart({ products: newProductList, totalPrice: newTotalPrice });
  };

  // Step 2
  // Write a function called removeProductFromCart() that takes a product object as an argument
  // Example removedProduct = { id: "p1", title: "Product 1", price: 1999 }
  // The function will remove one product from the cart. The min value of quantity is 0

  // Step 3
  // Pass the functions to the product components to handle the click event of the Add/Remove buttons

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        RootComponent {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="state"
          src={{ products, cart }}
          collapsed={true}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <ProductPage
            removeProduct={removeProductFromCart}
            products={products}
            addProduct={addProductToCart}
          />
        </Grid>
        <Grid item md={6}>
          <CartPage cart={cart} />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Product Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item sm={6}>
          <ProductOne
            addProduct={props.addProduct}
            removeProduct={props.removeProduct}
            product={props.products[0]}
          />
        </Grid>
        <Grid item sm={6}>
          <ProductTwo
            addProduct={props.addProduct}
            product={props.products[1]}
            removeProduct={props.removeProduct}
          />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Cart Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <CartProductOne product={props.cart.products[0]} />
        </Grid>
        <Grid item md={6}>
          <CartProductTwo product={props.cart.products[1]} />
        </Grid>
        <Grid item md={12}>
          <Typography p="0.5rem" variant="h5">
            Total Price: 💵 {props.cart.totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {props.product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {props.product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => props.addProduct(props.product)}
              variant="success"
              sx={{ width: "5rem" }}
            >
              Add
            </Button>
            <Button
              onClick={() => props.removeProduct(props.product)}
              variant="error"
              sx={{ width: "5rem" }}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductTwo = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {props.product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h5" sx={{ color: "success.main" }}>
            💵 {props.product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => props.addProduct(props.product)}
              variant="success"
              size="sm"
              style={{ width: "5rem" }}
            >
              Add
            </Button>
            <Button
              onClick={() => props.removeProduct(props.product)}
              variant="error"
              size="sm"
              style={{ width: "5rem" }}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 1 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {props.product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {props.product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const CartProductTwo = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 2 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {props.product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {props.product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const PropDrillingExercise = () => {
  return (
    <Container>
      <br />
      <Typography p="0.5rem" variant="h6">
        How to add products to the cart?
      </Typography>
      <br />
      <RootComponent />
    </Container>
  );
};

export default PropDrillingExercise;
