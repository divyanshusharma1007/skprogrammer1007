import React from 'react'
import OurTop from './OurTop'
import TopBlogs from './TopBlogs'
import LeftAnimation from '../Components/LeftAnimation'
export default function Left() {
     return (
          <div style={{ color: 'white',zIndex: -1 }}>
               < LeftAnimation />
               <OurTop />
               <TopBlogs />

          </div>
     )
}
