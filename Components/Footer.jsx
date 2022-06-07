import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// css component
const blockStyle = { color: 'white', fontWeight: 'bolder' };
const borderLeft = { borderLeft: '2px solid white', marginLeft: '20px' };

// change the css for the mobile view

export default function Footer() {

     return (
          <Container className="bg-dark" fluid style={blockStyle}>
               <Row className="px-3 py-2 mx-4" >
                    Lorem, ipsum dolor.
               </Row>
               <Row className="px-3 py-2 mx-4">
                    Lorem ipsum dolor sit.
               </Row>
               <Row className="px-3 py-2 mx-4">
                    <Col>
                         lorem ipsum dolor sit
                    </Col>
                    <Col>
                         <Row> <Col style={borderLeft}>hello</Col>  <Col style={borderLeft}>hello</Col>
                              <Col style={borderLeft}>hello</Col><Col style={borderLeft}>hello</Col>
                         </Row>
                    </Col>
               </Row>
          </Container >
     )
}
