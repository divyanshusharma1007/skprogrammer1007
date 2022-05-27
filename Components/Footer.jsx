import React from 'react'
import Image from 'next/Image'
// import InstagramLogo from '../public/Images/InstagramLogo.webp'
import { Table } from 'react-bootstrap'
export default function Footer() {
     return (
          <div>
               <Table striped bordered hover size="sm">
                    <thead>
                         <tr>
                              <th>#</th>
                              <th>First Name   </th>
                              <th>Last Name    </th>
                              <th>Username      </th>
                              <th>              </th>
                              <th>             </th>
                         </tr>
                    </thead>
                    <tbody>

                         <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr><tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr><tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr>
                         <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                         </tr>
                         <tr>
                              <td>3</td>
                              <td colSpan={2}>Larry the Bird</td>
                              <td>@twitter</td>
                         </tr>
                    </tbody>
               </Table>
               {/* <Image source={{ InstagramLogo }} height={5} width={5} /> */}
          </div>
     )
}
