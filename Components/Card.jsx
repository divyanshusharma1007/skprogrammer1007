import React from 'react';

const Card = ({blog}) => {

     return (
          <div className="col-md-3">
               <div class="card" >
                    <div class="card-body">
                         <h5 class="card-title">{blog?.heading}</h5>
                         <p class="card-text">{blog?.description.slice(0,80)}</p>
                         <div>
                         <Link href={`/open/${blog.id}`} class="btn btn-primary">Read More</Link>
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
