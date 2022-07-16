import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import openBlog from '../../store/actions/fetchBlogAction'
import _ from 'lodash'
export default function blogs() {
  const [formData, setFormData] = useState({})
  const router = useRouter()
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = _.cloneDeep(formData);
    newState[key] = value;
    setFormData(newState);
  };

  const onComment = () => {

  }
  console.log(router.query,"router.query")
  const FetchBlog = () => {
   openBlog(router.query.open, setFormData)
  }
  useEffect(FetchBlog, [])
  console.log(formData,"form data");
  return (
    <>
      <div className='bg-white border border-secondary border-3 rounded-3 p-3 m-4'>
        <h3 className="text-black fw-bold ">
          {formData?.title}
        </h3>
        <p>
         {formData?.description}
        </p>
        <div className='d-flex justify-content-between'>

        </div>
        <h6 className="text-info"> like</h6>
        <h6 className='text-end'>~ {formData?.authorName}</h6>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">
              add your comment
            </Form.Label>
            <Form.Control
              as="textarea"
              onChange={onChange}
              name="comments"
              placeholder=" enter the comment on the blog"
              value={formData?.comments}
              style={{ height: "80px" }}
            />

            <Button
              className="fw-bold my-3"
              variant="outline-danger"
              onClick={onComment}
            >
              Drop Comment
            </Button>
          </Form.Group>
        </Form>
        <h6 className='text-primary'>All Comments</h6>
      <div  className='border border-secondary border-3 rounded-3' style={{height:'30vh'}}>
        <div className="border border-3 border-gray ">
          adding commments here 
        </div>
      </div>
      </div>

    </>
  )
}