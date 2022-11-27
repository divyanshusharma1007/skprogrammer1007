import React from 'react'

export default function Description(props) {
     const { heading, description } = props?.node;
     return (
          <div><p><strong className="" style={{
               fontSize: "20px"
               ,
          }}>{heading} ~</strong>
               {description}</p></div>
     )
}
