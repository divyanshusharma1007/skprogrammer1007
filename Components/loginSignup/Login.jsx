
import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import addAuth from '../../store/actions/loginAction'
const _ = require("lodash")
import * as ActionTypes from '../../store/ActionTypes'

export default function UserSignUp(props) {
    const a = useSelector(state => state.login)
    const [loginState, setLoginState] = useState({})
    const dispatch = useDispatch();
    const { setAuthMember, authMember } = props;
    const login = async () => {
        if (!a.status) {
            switch (authMember) {
                case 'U':
                    dispatch(await addAuth(loginState, 'user'))
                    break;
                case 'C':
                    dispatch(await addAuth(loginState, 'bloger'))

                    break;
                case 'A':
                    dispatch(await addAuth(loginState, 'authority'))
                    break;
            }
        }else{
            dispatch({ payload:{authby:null,authtoken:null,status:false}, type: ActionTypes.LOG_IN })
        }
    }
    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newState = _.cloneDeep(loginState);
        newState[key] = value;
        setLoginState(newState);
    }

    return (

        <Container className="border-2 border-gray-200" >
            {a.status ? <h2 className='my-3'>loged as {a.authby}</h2> : <h2 className=' my-3'>Login</h2>}
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" name="email" className="shadow-lg" placeholder="Enter email" onChange={onChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" name="password" className="shadow-lg " placeholder="Password" onChange={onChange} />
                </Form.Group>
                <h5 className='text-center'>login as </h5>
                <div className='text-center d-flex justify-content-center'>
                    <div ><h4 onClick={() => setAuthMember('U')} className={`px-3 shadow py-2 mx-2 ${(authMember === 'U') ? 'bg-primary text-light' : 'bg-secondary text-white'} border rounded-circle `}> U</h4><h6 style={{ color: "red" }}   >user</h6></div>
                    <div ><h4 onClick={() => setAuthMember('C')} className={`px-3 shadow py-2 mx-2 ${(authMember === 'C') ? 'bg-primary text-light' : 'bg-secondary text-white'} border rounded-circle `}> C</h4><h6 style={{ color: "red" }}   >creator</h6></div>
                    <div ><h4 onClick={() => setAuthMember('A')} className={`px-3 shadow py-2 mx-2 ${(authMember === 'A') ? 'bg-primary text-light' : 'bg-secondary text-white'} border rounded-circle `}> A</h4><h6 style={{ color: "red" }}   >admin</h6></div>
                </div>
                <h5 className='text-center'>Had no account :<span><Link className='text-decoration-none' href="/signup"> Sign up</Link></span></h5>
                <Button variant="secondary" style={{ width: "150px" }} onClick={() => login()}>
                  { !a.status? 'Login':'Logout'}
                </Button>
            </Form>
        </Container>
    )
}
