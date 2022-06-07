import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
// css component
const blockStyle = { color: 'white', fontWeight: 'bolder', position: 'relative' };
const borderLeft = { borderLeft: '2px solid white', marginLeft: '20px', cursor: 'pointer' };
const pointer = { cursor: 'pointer' };
const ref = { color: 'white', textShadow: '1px 1px 1.5px grey', textDecoration: 'none' };
// change the css for the mobile view

export default function Footer() {
     const router = useRouter()

     return (
          <Container className="bg-dark" fluid style={blockStyle}>
               <Row className="px-3 py-2 mx-4 h4" style={{ ...pointer, ...{ textShadow: "2px 2px 3px pink" } }} >
                    Contact us
               </Row>
               <Row className="px-3 py-2 mx-4" style={pointer} >
                    <Col style={{ position: 'relative', left: "-13px" }}>
                         Email~<a href="skprogrammer1007@gmail.com" style={ref}>skprogrammer1007@gmail.com</a>
                    </Col>
               </Row>
               <Row className="px-3 py-2 mx-4" style={pointer}  >
                    <Col style={{ position: 'relative', left: "-13px" }}>
                         Mobile no ~ <a href="tel:6261460741" style={ref}>6261460741</a>
                    </Col>
                    <Col>
                         <Row>
                              {/* <Col style={borderLeft} > Facebook</Col> */}
                              {/* <Col style={borderLeft}>Youtube</Col> */}
                              {/* <Col style={borderLeft}>Twitter</Col> */}

                              {/* add the links here  */}
                              <Col style={borderLeft}>Instagram</Col>
                              <Col style={borderLeft}>Linkedin</Col>
                              <Col style={borderLeft}>Github</Col>
                         </Row>
                    </Col>
               </Row>
          </Container >
     )

}
