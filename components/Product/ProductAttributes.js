import { Button, Header } from "semantic-ui-react";

function ProductAttributes({ product: { description } }) {
  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button icon='trash alternate outline' content='Delete Product' color='red'
      />
    </>
  );
}

export default ProductAttributes;
