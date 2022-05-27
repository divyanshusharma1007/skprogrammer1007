// module designed by himanshu patel , teach module
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// importing the bootstrap componets 

import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'

export default function NavbarComponent() {
     const router = useRouter()
     return (
          <div className="position-fixed" style={{ width: '100%', height: "100%" }}>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand >
                              <Link href="/">
                                   <Container>
                                        <Col style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                             <Row style={{ color: 'red', fontWeight: 'bolder', textShadow: '2px 2px 2px pink' }}>
                                                  S K
                                             </Row>
                                             <Row sytle={{ fontWeight: 'bold', textShadow: '2px 2px 2px pink' }}>
                                                  Programmer
                                             </Row>
                                        </Col>
                                   </Container>
                              </Link>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link onClick={() => router.push('/about')}> Features</Nav.Link>
                                   <Nav.Link >Pricing</Nav.Link>
                              </Nav>
                              <Nav>
                                   <Nav.Link >More deets</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     )
}
