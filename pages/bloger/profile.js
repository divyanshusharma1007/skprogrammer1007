// add bloger data here from fetch myself

import React from 'react'
import glassMorphism from '../../helpers/glassMorphism'
import Image from 'next/image'
export default function myprofile() {
  return (
    <div className="text-white p-3 mx-4 bg-white border-4 border border-secondary rounded shadow-lg" >
      <div className="d-flex justify-content-between text-dark p-3 mt-2">
        <div className='px-2'>
          <Image src={require("../../Images/spidy.jpg")} height={120} width={120} style={{ border: '10px solid red', borderRadius: '50%' }} />
          <h3 className="fw-bolder">Divyanshu Sharma</h3>
          <hr />
          <h4 className='text-danger '> <span className='border-bottom border-2 border-info'>
                Programming Lanuage :</span> <span className='text-dark' >Java Script</span></h4>
          <h4 className='fw-bold border-botom borde-3 border-danger mt-4 pt-4'>Contact Information</h4>
          <h6>Contact Number : <span className='text-primary'> 626146741 </span></h6>
          <h6>email :<span className='text-primary'> divyanshu23082002@gmail.com</span></h6>
      
        </div>
        <div className='mt-5'>
          <br />
          <h4 className="fw-bold lh-lg mt-5"> Sk Id : <h5 className='text-primary'> 6261460741 </h5></h4>
          <h4 > git Hub : <h5 className="py-2 text-primary">
            skprogrammer1007@gmail.com</h5>
          </h4>
        </div>
      </div>



    </div>
  )
}
