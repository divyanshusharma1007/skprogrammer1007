import React from 'react'
import Head from 'next/head'
import { Card } from 'react-bootstrap'
import img from '../Images/spidy.jpg'
export default function Left() {
     return (
          <div style={{ color: 'white', zIndex: -1, width: "60vw" }}>
               <div className='mx-4 '>
                    <h1 className=" shadow-sm text-center text-secondary fw-bolder bg-gradient mx-5 p-3 border border-3 my-3 border-secondary bg-light rounded rounded-4 " style={{ textShadow: '5px 5px 10px gray' }} >Our Tops</h1>
               </div>
          </div>
     )
}
