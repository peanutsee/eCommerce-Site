import { Card } from 'semantic-ui-react';

function ProductList({ products }) {
  return <Card.Group stackable itemsPerRow="3" centered items={products.map(product => ({
    header: product.name,
    image: product.mediaUrl,
    meta: `${product.price}`,
    color: 'black',
    fluid: true, 
    childKey: product._id,
    href: `/product?_id=${product._id}`
  }))}/>;
}

export default ProductList;
