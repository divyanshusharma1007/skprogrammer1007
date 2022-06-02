import React from 'react'

export default function Description(props) {

     const { description, heading } = props.node;
     return (
          <div>
               <h3>{heading}</h3>
               {description}
          </div>
     )
}
