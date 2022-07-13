import React from 'react';
import Link from 'next/link';
const Card = ({blog}) => {

     return (
          <div className="col-md-3">
               <div class="card" >
                    <div class="card-body">
                         <h4 class="card-title">{blog?.title}</h4>
                         <p class="card-text">{blog?.description.slice(0,80)}</p>
                         <div>
                         <h5><Link href={`/open/${blog._id}`} >Read More</Link></h5>
                         <div>
                         <h5>share</h5>
                         </div>
                         </div >
                    </div>
               </div>
          </div>
     );
}

export default Card;
