
import React, { useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import signUp from '../../store/actions/signupAction'
import { toast } from 'react-toastify'
export default function UserSignUp() {
    const dispatch = useDispatch()
    const [previewImage, setPreviewImage] = useState("")
    const [formData, setFromData] = useState({})
    const [imgStatus, setImageStatus] = useState(false)
    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newState = _.cloneDeep(formData);
        newState[key] = value;
        setFromData(newState);
    }

    let uploadImage = async (e) => {
        setImageStatus(true);
        const form = new FormData();
        console.log("upload image is running")
        let file = e.target.files[0];
        form.append('file', file);
        const reader = new FileReader();
        reader.onload = function async(onLoadEvent) {
            setPreviewImage(onLoadEvent.target.result);
        }
        form.append('upload_preset', 'skprogrammer')
        reader.readAsDataURL(e.target.files[0]);
        const res = await fetch("http://api.cloudinary.com/v1_1/dboiupu8k/image/upload", {
            method: 'POST',
            body: form
        });
        res = await res.json();
        console.log(res);
        const newState = _.cloneDeep(formData);
        newState['image'] = res.secure_url
        setFromData(newState);
        toast("iamage saved successfully")
        setImageStatus(false)
    }
    const Uploading = () => {
        if (imgStatus) {
            return <h6 style={{ color: "red" }}>Image is stil uploading </h6>
        }
        return;
    }

    return (
        <>
    
            <Row >
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5"> Full Name</Form.Label>
                    <Form.Control
                        onChange={onChange}
                        name="name"
                        className=" border-secondary border-2 shadow-lg"
                        type="text"
                        id="inputPassword6"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5">Contact Number</Form.Label>
                    <Form.Control
                        onChange={onChange}
                        name="contactNumber"
                        className=" border-secondary border-2  shadow-lg "
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
            </Row>
            <Row >
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5"> Programming Language</Form.Label>
                    <Form.Control
                        onChange={onChange}
                        name="programmingLanguage"
                        className="border-secondary border-2 shadow-lg"
                        type="text"
                        id="inputPassword6"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5">Git Hub</Form.Label>
                    <Form.Control
                        onChange={onChange}
                        name="gitHub"
                        className=" border-secondary border-2  shadow-lg "
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5">Email Address</Form.Label>
                    <Form.Control
                        name="email"
                        onChange={onChange}
                        className="border-secondary border-2 shadow-lg bg-body"
                        type="text"
                        id="inputPassword4"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label className="fw-bold" htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        className=" border-secondary border-2 shadow-lg bg-body"
                        type="password"
                        id="inputPassword3"
                        onChange={onChange}
                        name="password"
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col >
                    <Image src={!previewImage ? require("../../Images/spidy.jpg") : previewImage} height={90} width={170}></Image>

                    {Uploading() }

                    <Form.Control
                        style={{ width: "108px" }}
                        className=" border-secondary bg-secondary border-2 shadow-lg bg-body"
                        type="file"
                        id="file"
                        name="file"
                        onChange={(e) => { uploadImage(e) }}
                        aria-describedby="passwordHelpBlock"
                    />
                </Col>
                <Col className="mt-3">
                    <Link href="/login"><h4>Already had account : <Link href="/login">Sign in</Link></h4></Link>
                    <Button variant="secondary " type="submit" className={`mt-5 ${imgStatus?'disabled':''}`} style={{ width: "100%", marginTop: "3px" }} onClick={async () => { dispatch(await signUp(formData, 'bloger')) }}>signed up</Button>
                    <h5></h5>
                </Col>
            </Row>
        </>

    )
}