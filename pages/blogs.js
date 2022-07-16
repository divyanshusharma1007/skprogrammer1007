import React, { useEffect, useState } from 'react'
import fetchblogs from '../store/actions/fetchApprovedBlogs'
import BlogCard from '../Components/blogCard'
import Sidebar from '../Components/sidebar';
import { Button } from 'react-bootstrap';
export default function blogs() {
   const [myBlogs, setMyBlogs] = useState([]);

   const FetchBlogs = () => {
      fetchblogs(setMyBlogs);
   };
   useEffect(FetchBlogs, []);
   console.log(myBlogs)

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <Sidebar show={show} handleClose={handleClose} />
         <div className=' my-3 '>
            <div className='position-fixed' style={{ width: '100vw', zIndex: 5 }}>
               <div className=' d-flex justify-content-between text-secondary  py-2    shadow-lg bg-light fw-bold  border border-3 border-secondary '>
                  <div>
                     <Button variant="primary" onClick={handleShow}>
                        Search and Filter
                     </Button>
                  </div>
                  <h2 style={{ width: '55vw' }}>
                     Our all Blogs
                  </h2>
               </div>

            </div>
            <br />
            <br />
            <div className='row mt-5 mx-3'>
               {
                  myBlogs?.map((e) => <BlogCard key={e._id} blog={e} />)
               }
            </div>
         </div>
      </>
   )
}
