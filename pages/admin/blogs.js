import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import fetchallblogsAction from '../../store/actions/fetchallblogsAction'
import { Form } from 'react-bootstrap'

const RowData = ({ blog }) => {
     const state = useSelector(state => state);
     console.log(state)
     return (
          <Row className="mt-3">
               <Col style={{ overflow: 'auto' }}>{blog?._id || "noen"}</Col>
               <Col>{blog?.authorName || "noen"}</Col>
               <Col>{blog?.programmingLanguage || "noen"}</Col>
               <Col>{blog?.title || "none"}</Col>
               <Col>{blog?.aproved.toString() || "noen"}</Col>
               <Col>
                    <Dropdown className="my-2">
                         <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              Dropdown Button
                         </Dropdown.Toggle>
                         <Dropdown.Menu>

                              <Link href={`/admin/update/${blog?._id}`}>
                                   <h5 className="mx-3 text-decoration-none">
                                        Update
                                   </h5>
                              </Link>
                              <h5 className='mx-3'> Delete Blog</h5>
                         </Dropdown.Menu>
                    </Dropdown>
               </Col>
          </Row >
     )
}
export default function blogs() {
     console.log("runing blogs ")
     const [data, setData] = useState([])
     const state = useSelector(state => state?.login)
     const FetchBlogs = () => {
          console.log(state)
          fetchallblogsAction(state?.authtoken, setData);
     };
     console.log(data)
     useEffect(FetchBlogs, [])
     return (
          <>
               <Container className="bg-white text-secondary fw-bold mx-3 border border-secondary border-3 rounded-3">
                    <Row className="p-2">
                         hello
                    </Row>
                    <Row className="mt-3">
                         <Col>Bloger Id</Col>
                         <Col>Author Name</Col>
                         <Col>Prog. Lang</Col>
                         <Col>Title</Col>
                         <Col>aproved</Col>
                         <Col>Other</Col>
                    </Row>
                    <hr />
                    {
                         data.map((e) => <RowData blog={e} key={e} />)
                    }
               </Container>
          </>

     )
}
