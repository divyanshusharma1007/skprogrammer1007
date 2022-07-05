import React from 'react'
import glassMorphism from '../../helpers/glassMorphism'


// show comments here who made 
export default function inspectBlog({ blog }) {
     return (
          <div className="position-fixed mx-3" style={{ ...glassMorphism, position: 'absolute', zIndex: "5", width: "68%" }}>
               <div className="d-flex justify-content-between">
                    <div className='mx-3 p-3'>
                          <h4 className="text-white">Data Base Id : {blog?._id}</h4>
                         <h4 className='text-white'>Title  : <span className='text-center ' > {blog?.title}</span></h4>
                        
                         <h5 className="text-white bg-pink my-3">
                              like Number  : {blog?.likes?.length}</h5>
                              <h5 className='text-white'>Comments : {blog?.comments?.length}</h5>
                    </div>

                    <div className='mx-3 p-3 text-justify text-white' style={{ width: "50%" }}>
                         <h5 className='text-white '>Description</h5>
                         <div className="bg-light text-dark py-2 border border-3 border-secondary rounded">
                              <div className="text-justify position-relative" style={{ height: "30vh", overflow: 'auto' }}>
                                   {blog?.description}
                              </div>
                         </div>
                         <h5 className="text-end"> ~ {blog?.authorName}</h5>
                    </div>
               </div>
          </div>
     )
}
