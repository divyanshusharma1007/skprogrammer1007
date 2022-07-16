import react from 'react'
import { Offcanvas } from 'react-bootstrap'
export default function sideBar({show,handleClose}) {
     return (
          <div>
               <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                         <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                         Some text as placeholder. In real life you can have the elements you
                         have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
               </Offcanvas>
          </div>
     )
}