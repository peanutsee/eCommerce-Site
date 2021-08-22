import axios from "axios";
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'
import baseUrl from '../utils/baseUrl'


function Product({ product }) {
  console.log(product)
  return <>
    <ProductSummary product={product} />
    <ProductAttributes product={product}/>
  </>;
}

Product.getInitialProps = async ({ query: {_id} }) => {
  // Fetch Data from Server
  const url = `${baseUrl}/api/product?_id=${_id}`;
  const response = await axios.get(url);
  
  return {product: response.data}
}

export default Product;
