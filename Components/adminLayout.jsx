import { React, useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image'
import img from '../Images/spidy.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import AdminLeft from './AdminForms/AdminLeft'
export default function adminLayout({ children }) {
     const [height, setHeight] = useState(0)
     const [width, setWidth] = useState(0);
     useEffect(() => {

          setHeight(window.innerHeight);
          setWidth(window.innerWidth);

     })

     return (
          <div>
               <Container fluid className="position-fixed" style={{
                    top: '40px', zIndex: -50, background: "#6162ff",
               }}>
                    <Image src={img} width={width} height={height} />
               </Container>
               {/* <Container style={{ position: "absolute", zIndex: 1, width: "120%" }}> */}
               <Navbar style={{ zIndex: 5000, }} />
               <br />
               <br />
               <br />
               <br />
               <Container className="d-flex">
                    <AdminLeft />
                    <main style={{ marginLeft: "20%", zIndex: 10 }}>{children}</main>
               </Container>
               <Footer style={{ zIndex: 5000, }} />
               {/* </Container> */}
          </div>
     )
}
