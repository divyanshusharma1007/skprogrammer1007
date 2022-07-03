import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import createBlog from "../../store/actions/createBlogAction";
import BlogerSideBar from "../../Components/blogerFroms/blogerSideBar";
import { Form, Button } from "react-bootstrap";
import glassMorphism from "../../helpers/glassMorphism";
export default function createblog() {
  return (
    <>
      <Container className="">
        <div
          className=" "
          style={glassMorphism}
        >
          <Container className="p-3">
            <h3 className="text-white fw-bold"> Create your Blog</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold text-white">Heading</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Blog Heading here"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Blog Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=" Enter the content of your Blog "
                   style={{height:'200px'}}
                />
              </Form.Group>
              <Button className="fw-bold" variant="outline-danger" style={{width:'150px'}}>
                Create Blog
              </Button>
            </Form>
          </Container>
        </div>
      </Container>
    </>
  );
}
