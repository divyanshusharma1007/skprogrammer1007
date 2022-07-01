import { React, useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image'
import img from '../Images/spidy.jpg'
import { Container } from 'react-bootstrap';
export default function Layout({ children }) {
     const [height, setHeight] = useState(0)
     const [width, setWidth] = useState(0);
     useEffect(() => {

          setHeight(window.innerHeight);
          setWidth(window.innerWidth);

     })
     return (
          <div style={{ height: "100vh" }}>
               <div className='position-fixed' style={{ zIndex: -10 }}>
                    <Image src={img} width={width} height={height} />
               </div>
               <div className='my-5'>
                    <br />
                    <br />
                    <main className="my-5">{children}</main>
                    <Footer />
               </div>
          </div>
     )

}
