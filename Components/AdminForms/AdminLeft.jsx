import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useRouter } from 'next/router'
export default function AdminLeft() {
     const router = useRouter();
     return (
          <div>
               <Accordion defaultActiveKey={['0']} style={{ width: "20%", left: '10px', top: "20%", position: 'fixed' }}>
                    <Accordion.Item eventKey="0">
                         <Accordion.Header onClick={() => { router.push("home") }} >HOME</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                         <Accordion.Header onClick={() => { router.push("/admin/blogs") }}>BLOGS</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                         <Accordion.Header onClick={() => { router.push("/admin/creators") }}>CREATORS</Accordion.Header>
                    </Accordion.Item>

               </Accordion >
          </div>
     )
}
