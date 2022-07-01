import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
export default function AdminLeft() {
     const authAs = useSelector((state) => state.login)
     console.log(authAs)
     return (
          <>
               <Container className="position-fixed mx-3" style={{ color: "#00174c", top: '50px', marginTop: "40px", background: "white", width: "23%", border: '3px solid gray', borderRadius: "8px" }}>
                    <h3 className='mt-4'> Welcome {authAs?.authby?.toLowerCase()}   !</h3>
                    <hr />
                    <div className='px-3 ' >
                         <Link href="/admin/home" ><h4 className='py-1'>Home</h4></Link> 
                         <Link href="/admin/blogs" ><h4 className='py-1'>Blogs</h4></Link> 
                         <Link href="/admin/homeright" ><h4 className='py-1'>Home Right </h4></Link> 
                    </div>
               </Container>
          </>
     )
}
