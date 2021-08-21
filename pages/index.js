import axios from "axios";
import React, { useEffect } from "react";
import products from "../static/products.json";
import ProductList from '../components/Index/ProductList'

function Home(props) {
  return <ProductList products={products}></ProductList>;
}

// getInitialProps enables server-side rendering in a page and allows you to do initial data population,
// it means sending the page with the data already populated from the server
Home.getInitialProps = async () => {
  // Fetch Data on Server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  
  // Return Response Data as an Object
  return { products: response.data };
  retu;
};

export default Home;
