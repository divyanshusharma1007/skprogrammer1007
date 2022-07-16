import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Card } from 'react-bootstrap'
import img from '../Images/spidy.jpg'
import HomeCard from './homeCard'
export default function Left() {
     const layoutArray = [
          {
               langImg: "",
               langName: "",
               langUse: "for web development "
          },
          {
               langImg: "",
               langName: "",
               langUse: "for"
          },
          {
               langImg: "",
               langName: "",
               langUse: "fornt end\n data anylasis\nother"
          }
     ]


     const [width, setWidth] = useState(0);
     useEffect(() => { setWidth(window.innerWidth + 20) })
     return (
          <div style={{ color: 'white', zIndex: -1, width: width }}>
               <div className='mx-4 '>
                    <h1 className=" shadow-sm text-center text-secondary fw-bolder bg-gradient mx-5 p-3 border border-3 my-3 border-secondary bg-light rounded rounded-4 " style={{ textShadow: '5px 5px 10px gray' }} >Our Tops</h1>

                    <div className='row'>
                         {
                              layoutArray?.map((e) => <HomeCard data={e} />)
                         }
                    </div>
               </div>
          </div>
     )
}
