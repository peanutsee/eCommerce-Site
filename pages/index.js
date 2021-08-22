import axios from "axios";
import React, { useEffect } from "react";
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'

function Home({products}) {
  return <ProductList products={products}></ProductList>;
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
