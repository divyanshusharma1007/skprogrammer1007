import { React, useEffect, useState } from 'react'
import Description from './Description'

export default function Right() {
     const [width, setWidth] = useState(0);
     const arr = [
          { heading: "hello", description: "hello world" },
          { heading: "hello", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt quam fuga, quo architecto totam quis? Ullam eum accusamus voluptate reiciendis aperiam." },
          { heading: "hello", description: "hello world" }
     ];


     useEffect(() => { setWidth(window.innerWidth) })
     return (
          <div className="" style={{ width: '38vw', display: `${width < 600 ? "none" : "block"}` }}>
               <div className="p-3 mr-3 border border-3 m-3 border-secondary" style={{ borderRadius: '54px 0% 54px 0%', backgroundColor: 'white' }}>
                    <h2 className="mx-sm-3">Welcome</h2>
                    {
                         arr.map((obj, i) => {
                              return <Description node={obj} key={i} />
                         })
                    }

               </div>
          </div>
     )
}
