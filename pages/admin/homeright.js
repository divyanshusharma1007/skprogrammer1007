import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import _ from "lodash";
export default function homeright() {
  const initialState = {
    heading: "",
    box: [
      {
        heading: "",
        description: "",
      },
    ],
  };
  const [formData, setFormData] = useState(initialState);
  const addMore = () => {
    const newFormData = _.cloneDeep(formData);
    newFormData.box.push(initialState["box"][0]);
    setFormData(newFormData);
  };
  const Box = ({ i }) => {
    return (
      <Container
        className="p-3 shadow-lg m-2 mr-3"
        style={{ border: "2px solid gray", borderRadius: "5px" }}
      >
        <h5> Box id {i + 1}</h5>
        <Form.Group className="mr-3" controlId={i + 1}>
          <Form.Label>Heading </Form.Label>
          <Form.Control type="text" placeholder="welcome" name="heading" />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder='Enter your text here'
            rows={2}
          />
        </Form.Group>
      </Container>
    );
  };
  return (
    <>
      <Container
        className="mx-3"
        style={{
          background: "white",
          widht: "60%",
          border: "3px solid gray",
          borderRadius: "8px",
        }}
      >
        <h2 className="my-3 mx-2  text-dark"> Home Right</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="heading">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text" placeholder="welcome" name="heading" />
          </Form.Group>
          {formData.box.map((e, i) => (
            <Box i={i} />
          ))}
        </Form>
        <Button className="mb-2" variant="secondary" onClick={addMore}>
          Add More Box
        </Button>
      </Container>
    </>
  );
}
