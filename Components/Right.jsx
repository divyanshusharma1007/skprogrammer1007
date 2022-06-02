import React from 'react'
import Description from './Description'

export default function Right() {
     const arr = [{ id: 0, heading: "hello", description: "hajdhfkjahfkjhadjkfhaskjhf" },
     { id: 1, heading: "hello", description: "hajdhfkjahfkjhadjkfhaskjhf" }];
     return (
          <div>
               {arr.map((obj, i) => {
                    return <Description node={obj} key={i} />
               })}
          </div>
     )
}
