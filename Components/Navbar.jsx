// module designed by himanshu patel 


import React from 'react'

// importing the bootstrap componets 
import { Container, Navbar, Nav, NavDropdown, Col, Row } from 'react-bootstrap'


export default function NavbarComponent() {
     return (
          <div style={{ postition: 'fixed' }}>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home">
                              <Container>
                                   <Col style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Row>
                                             S K
                                        </Row>
                                        <Row>
                                             Programmer
                                        </Row>
                                   </Col>
                              </Container>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link href="#features">Features</Nav.Link>
                                   <Nav.Link href="#pricing">Pricing</Nav.Link>
                                   <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                   </NavDropdown>
                              </Nav>
                              <Nav>
                                   <Nav.Link href="#deets">More deets</Nav.Link>
                                   <Nav.Link eventKey={2} href="#memes">
                                        Dank memes
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     )
}
