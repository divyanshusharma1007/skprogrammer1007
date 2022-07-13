import React, { useEffect, useState } from 'react'
import fetchblogs from '../store/actions/fetchApprovedBlogs'
import BlogCard from '../Components/blogCard'
export default function blogs() {
   const [myBlogs, setMyBlogs] = useState([]);

   const FetchBlogs = () => {
      fetchblogs(setMyBlogs);
   };
   useEffect(FetchBlogs, []);
   console.log(myBlogs)
   return (
      <>
         <div className='mx-2'>
            <h2 className='text-center text-secondary my-3 py-2 shadow-lg bg-light fw-bold mt-4 border border-3 border-secondary'> Our all Blogs</h2>
            {/* add some searching and filter options here using the side bar  */}
            <div className='row'>
               {
                  myBlogs?.map((e) => <BlogCard key={e._id} blog={e} />)
               }
            </div>
         </div>
      </>
   )
}
