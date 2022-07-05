import React from 'react'
import { Row, Col,DropdownButton,Dropdown } from 'react-bootstrap'
import Link from 'next/link'
export default function blogerMyBlogsRow({ data,setDescBlog }) {
  return (
    <div>
      <Row className="text-center py-3 fw-bold text-light border-bottom border-3 mx-2">
        <Col className="px-2 text-center" style={{ overflow: 'hidden', position: 'relative', marginLeft: '10px' }}>{data._id}</Col>
        <Col className="px-2 text-center" >{data.title}</Col>
        <Col className="px-2 text-center">{data.authorName}</Col>
        <Col className="px-2 text-center">{data.programmingLanguage}</Col>
        <Col className="px-2 text-center" >{data.date.split('T')[0]}</Col>
        <Col className="px-2 text-center">{data.aproved ? 'True' : 'False'}</Col>
        <Col>
        <DropdownButton id="dropdown-basic-button" title="Other">
          <Dropdown.Item onClick={()=>setDescBlog(data)} >View Details</Dropdown.Item>
          <Dropdown.Item> <Link href={`/bloger/update/${data._id}`}>Update</Link></Dropdown.Item>
        </DropdownButton>
        </Col>
      </Row>
    </div>
  )
}
