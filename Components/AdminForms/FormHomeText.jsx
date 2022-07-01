import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import _ from 'lodash'
export default function FormHomeText() {
     const initialFormState = {
          heading: "",
          description: ""
     };
     const [heading, setHeading] = useState('');
     const [formData, SetFormData] = useState([initialFormState]);
     const addMore = () => {

     }
     return (
          <Container style={{ border: '2px solid white', padding: '20px', borderRadius: '8px' }}>
               <Form>
                    <Row>
                         <Col >
                              <Form.Label>
                                   <h4>  Heading</h4>
                              </Form.Label>
                              <Form.Control placeholder="Enter the Right Card Top heading here" onChange={(e) => { setHeading(e.target.value); console.log(heading) }} value={heading} />
                         </Col>
                    </Row>
               </Form>
               <Button variant="light" className="my-3" onClick={addMore} syle={{ fontWeight: "bolder" }}>Add More</Button>
          </Container>
     )
}
