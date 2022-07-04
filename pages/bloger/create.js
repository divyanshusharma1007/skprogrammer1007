import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import createBlog from "../../store/actions/createBlogAction";
import { Form, Button, Row, Col } from "react-bootstrap";
import glassMorphism from "../../helpers/glassMorphism";
import _ from "lodash";
export default function createblog() {
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    description: "",
    authorName: "",
    hashtags: "",
    programmingLanguage: "java script",
  };
  const [formData, setFormData] = useState(initialState);
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = _.cloneDeep(formData);
    newState[key] = value;
    setFormData(newState);
  };
  const authtoken=useSelector(state=>state.login).authtoken
  const onCreate = async () => {
    console.log('formData',formData);
    await createBlog(formData,authtoken)
    setFormData(initialState)
  };

  return (
    <>
      <Container className="">
        <div className=" " style={glassMorphism}>
          <Container className="p-3">
            <h3 className="text-white fw-bold my-3"> Create your Blog</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder text-white">
                  Heading
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={onChange}
                  placeholder="Enter your Blog Heading here"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bolder text-white">
                      AuthorName
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.authorName}
                      name="authorName"
                      onChange={onChange}
                      placeholder="Enter the Name of the Author"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bolder text-white">
                      Tags
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={onChange}
                      name="hashtags"
                      value={formData.hashtags}
                      placeholder=" Enter Searching Tags"
                      style={{ height: "50px" }}
                    />
                    <Form.Text className="text-danger fw-bold">
                      {" "}
                      Use SemiColen ( ; ) to seprate Tags
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder text-white">
                  Blog Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={onChange}
                  name="description"
                  placeholder=" Enter the content of your Blog "
                  value={formData.description}
                  style={{ height: "200px" }}
                />
              </Form.Group>
              <Row >
                <Col>
                  <select
                    onChange={onChange}
                    className="form-select"
                    aria-label="Programming Language"
                    name="programmingLanguage"
                    value={formData.programmingLanguage}
                  >
                    <option value="JavaScript">Java Script </option>
                    <option value="html">HTML</option>
                    <option value="css"> CSS</option>
                  </select>
                </Col>
                <Col style={{paddingLeft:'35%'}}>
                  <Button
                    className="fw-bold"
                    variant="outline-danger"
                    onClick={onCreate}
                    
                    style={{ marginLeft:'35%',width: "150px" }}
                  >
                    Create Blog
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </Container>
    </>
  );
}
