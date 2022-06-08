import React from 'react'
import { Container } from 'react-bootstrap'
import MovingText from 'react-moving-text'


export default function LeftAnimation() {

     return (

          <MovingText
               type="fadeIn"
               duration="1000ms"
               delay="0s"
               direction="normal"
               timing="ease"
               iteration="infinite"
               fillMode="none">
               <h1>Radhe Radhe</h1>
          </MovingText>
     );
}


