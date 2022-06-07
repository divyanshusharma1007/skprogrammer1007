import { React, useEffect, useState } from 'react'
import Description from './Description'

export default function Right() {
     // main state 
     const [width, setWidth] = useState(0);

     // dummy state
     const arr = [
          { heading: "hello", description: "hello world" },
          { heading: "hello", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt quam fuga, quo architecto totam quis? Ullam eum accusamus voluptate reiciendis aperiam." },
          {
               heading: "hello", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum ex iure nesciunt porro. Nam beatae dolores magni minima ratione eveniet tempore inventore nihil unde sapiente impedit officia voluptates quo molestiae tempora nisi atque ea deserunt maiores provident, sed quam eius placeat! Corporis aut quia neque nobis modi odio repudiandae, commodi voluptatum voluptas, atque mollitia iure iste officia soluta odit harum totam? Dignissimos aperiam, eligendi officiis odio enim error quibusdam modi voluptas facilis eveniet quam necessitatibus libero consequuntur. Consequuntur saepe magnam sunt, autem beatae sed quasi nulla quidem non ea delectus accusantium cupiditate, quis dignissimos cumque quia? Molestiae laboriosam, illo eum adipisci asperiores nemo. Repudiandae, id hic mollitia possimus sint laboriosam accusamus facere odio nemo soluta magni nulla, culpa ullam cum odit natus fugit. Nihil modi cumque sed voluptas temporibus consectetur! Expedita molestiae, qui molestias, repellendus incidunt perferendis maxime harum et accusantium necessitatibus id! Asperiores voluptatem fugiat minima repellendus. Accusantium deleniti aliquid qui quo nihil voluptatibus voluptates obcaecati consequuntur! Hic, obcaecati tenetur doloribus praesentium error magni. Aut laborum accusantium culpa ratione quasi! Suscipit voluptatibus mollitia error quis iste ratione quisquam quas corrupti blanditiis, iure cumque maiores, odit nostrum dicta quasi ullam quod cum, pariatur vitae iusto et. Dolorem ipsam architecto magni consectetur quo fuga velit. Inventore, corporis fugit suscipit doloribus laboriosam fugiat fuga quia in est officia voluptas ea ipsam illum quos iste nisi vero non doloremque nam officiis saepe, cupiditate ullam! Qui repellat voluptas temporibus aperiam ducimus in. Magnam tempore, animi atque incidunt assumenda quae quisquam eveniet earum, quo consequatur eaque voluptatem accusantium, corporis eos molestiae culpa amet delectus. Eius aspernatur nemo laboriosam similique amet qui, eligendi distinctio tempora molestias quia quaerat, ducimus at unde  world"
          }
     ];

     // adding effects on the dom
     useEffect(() => { setWidth(window.innerWidth + 20) })
     // returning jsx
     return (
          <div style={{ width: '38vw', display: `${width < 800 ? "none" : "block"}` }}>
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
