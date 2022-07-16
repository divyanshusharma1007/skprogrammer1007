import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify'
// import {useRouter} from 'next/router';
const Card = ({ blog }) => {

     const share = () => {
          navigator.clipboard.writeText(`/open/${blog._id}`)
          toast("refral link is coppied to your clipboard")
     }

     return (
          <div className="col-md-3 ">
               <div class="card border-3 border-secondary border-3 shadow-lg  my-2" style={{ height: '100%' }}>
                    <div class="card-body">
                         <h4 class="card-title">{blog?.title.slice(0, 80)} ...</h4>
                         <p class="card-text">{blog?.description.slice(0, 80)}</p>
                         <div>
                              <h5><Link href={`/open/${blog._id}`} >Read More</Link></h5>
                              <div onClick={share}>
                                   <h5>share</h5>
                              </div>
                         </div >
                    </div>
               </div>
          </div>
     );
}

export default Card;
