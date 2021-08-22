import { Button, Header, Modal } from "semantic-ui-react";
import { useState } from "react";
import baseUrl from "../../utils/baseUrl";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

function ProductAttributes({ product: { description, _id } }) {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const deleteHandler = async () => {
    const url = `${baseUrl}/api/product?_id=${_id}`;
    await axios.delete(url);
    router.push('/')
  };
  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        content="Delete Product"
        color="red"
        onClick={() => setShow(!show)}
      />
      <Modal open={show} dimmer="blurring">
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" onClick={() => setShow(!show)} />
          <Button
            negative
            icon="trash"
            labelPosition="right"
            content="Delete"
            onClick={deleteHandler}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
