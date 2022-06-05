import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout({ children }) {
     return (
          <>
               <Navbar />
               <br /><br /><br /><br />
               <main>{children}</main>
               <Footer />
          </>)

}
