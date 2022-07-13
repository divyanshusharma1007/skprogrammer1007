import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import glassMorphism from "../../../helpers/glassMorphism";
import { useRouter } from "next/router";
import { Row, Col } from "react-bootstrap";
import fetchBlogAction from "../../../store/actions/fetchBlogAction";
import updateBlog from "../../../store/actions/updateBlogAuthority";
import _ from 'lodash'
export default function createblog() {
     const router = useRouter();
     const [formData, setFormData] = useState();
     const onChange = (e) => {
          const key = e.target.name;
          const value = e.target.value;
          const newState = _.cloneDeep(formData);
          newState[key] = value;
          setFormData(newState);
     };
     const FetchBlogs = () => {
          console.log(router.query, 'running fetch blogs');
          fetchBlogAction(router.query.update, setFormData);
     };
     const state = useSelector(state => state.login)
     useEffect(FetchBlogs, []);
     const onUpdate = () => {
          console.log(state);
          updateBlog(formData, state?.authtoken)
     };
console.log(formData)
     return (
          <>
               <Container className="mx-2">
                    <div className="bg-white border-3 border border-secondary rounded-3 ">
                         <Container className="p-3">
                              <h3 className="text-white fw-bold my-3"> Update your Blog</h3>
                              <Form>
                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fw-bolder text-white">
                                             Heading
                                        </Form.Label>
                                        <Form.Control
                                             type="text"
                                             name="title"
                                             value={formData?.title}
                                             onChange={onChange}
                                             placeholder="Enter your Blog Heading here"
                                        />
                                   </Form.Group>
                                   <Row>
                                        <Col>
                                             <h6 className="text-white">approved status</h6>
                                             <select
                                                  onChange={onChange}
                                                  className="form-select mt-4"
                                                  aria-label="aproved"
                                                  name="aproved"
                                                  value={formData?.aproved}
                                             >
                                                  <option value={true}>True</option>
                                                  <option value={false}> False</option>
                                             </select>
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
                                                       value={formData?.hashtags}
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
                                             value={formData?.description}
                                             style={{ height: "200px" }}
                                        />
                                   </Form.Group>
                                   <Row>
                                        <Col>
                                             <select
                                                  onChange={onChange}
                                                  className="form-select"
                                                  aria-label="Programming Language"
                                                  name="programmingLanguage"
                                                  value={formData?.programmingLanguage}
                                             >
                                                  <option value="JavaScript">Java Script </option>
                                                  <option value="html">HTML</option>
                                                  <option value="css"> CSS</option>
                                             </select>
                                        </Col>
                                        <Col style={{ paddingLeft: "35%" }}>
                                             <Button
                                                  className="fw-bold"
                                                  variant="outline-danger"
                                                  onClick={onUpdate}
                                                  style={{ marginLeft: "35%", width: "150px" }}
                                             >
                                                  Update Blog
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
