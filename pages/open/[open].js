import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import _ from 'lodash'
import openBlog from '../../store/actions/fetchBlogAction'
export default function blogs() {
  const [formData, setFormData] = useState({})
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = _.cloneDeep(formData);
    newState[key] = value;
    setFormData(newState);
  };
  
  const onComment = () => {

  }
  return (
    <>
      <div className='bg-white border border-secondary border-3 rounded-3 p-3 mx-2'>
        <h3 className="text-black fw-bold ">
          title
        </h3>
        <p>
          lorem33
        </p>
        <div className='d-flex justify-content-between'>

        </div>
        <h6> like</h6>
        <h6 className='text-end'>~author Name</h6>
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
      </div>

    </>
  )
}