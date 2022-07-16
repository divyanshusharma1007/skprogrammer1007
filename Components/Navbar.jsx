// module designed by himanshu patel , teach module
import React, { useState } from 'react'
// functional behavior of the compoent 
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
// importing the bootstrap componets 
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { createRedirectRoute } from 'next/dist/server/server-route-utils'

export default function NavbarComponent({ conditionAdmin, conditionBloger, authby, setauthby }) {
     const [customRoute, setCustomRoute] = useState("/policy")
     const router = useRouter()
     console.log(router.asPath, "router pateh")
     const state = useSelector(state => state?.login);
     useEffect(() => {
          console.log(state);
          setauthby(state?.authby)
     }, [state])
     if (conditionAdmin) {
          if (!(authby === "ADMIN")) {
               router.push("/login")
               console.log("not as authority")
          }
     }

     if (conditionBloger) {
          if (!(authby === "BLOGER")) {
               router.push("/login")
          }
     }
     return (
          <div style={{ width: '100%', top: '0px', height: "100%" }}>
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
                                   <Link href="/"  ><a className="mx-2" style={{ textDecoration: "none", color: 'grey', fontWeight: 'bolder' }}> Home </a></Link>
                                   <Link href="/blogs"  ><a className="mx-2" style={{ textDecoration: "none", color: 'grey', fontWeight: 'bolder' }}>Blogs </a></Link>
                                   <Link href={authby === 'ADMIN' ? '/admin/home' : authby === 'BLOGER' ? '/bloger/create' : '/creatorspage'}  ><a className="mx-2" style={{ textDecoration: "none", color: 'grey', fontWeight: 'bolder' }}>Creators's page</a></Link>
                                   <Link href="/about"  ><a className="mx-2" style={{ textDecoration: "none", color: 'grey', fontWeight: 'bolder' }}>About </a></Link>
                              </Nav>
                              <Nav>
                                   <Link href="/login"  ><a className="mx-2" style={{ textDecoration: "none", color: 'grey', fontWeight: 'bolder' }}>Login /Sign up </a></Link>
                              </Nav>
                         </Navbar.Collapse >
                    </Container >
               </Navbar >
          </div >
     )
}
