import React, { useEffect, useState } from "react";
import glassMorphism from "../../helpers/glassMorphism";
import { Row, Col, Table } from "react-bootstrap";
import fetchMyBlogs from "../../store/actions/fetchMyBlogsAction";
import { useSelector } from "react-redux";
import RowData from "../../Components/blogerFroms/blogerMyBlogsRow";
import InspectBlog from "../../Components/blogerFroms/inspectBlog";
export default function showblogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  const [descBlog,setDescBlog]=useState({})
  const state = useSelector((state) => state.login);
  console.log(state.authtoken);
  const FetchBlogs = () => {
    fetchMyBlogs(state.authtoken, setMyBlogs);
  };
  useEffect(()=>setDescBlog(myBlogs[0]),[myBlogs])
  useEffect(FetchBlogs, []);
  return (
    <>
    <InspectBlog blog={descBlog}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="mx-2 my-3 px-3" style={glassMorphism}>
        <Row className="text-center py-3 border-bottom border-5 border-secondary fw-bolder text-light  mx-2">
          <Col>Id</Col>
          <Col>Title</Col>
          <Col>Author Name</Col>
          <Col>Programming</Col>
          <Col>Date</Col>
          <Col>Approval</Col>
          <Col>Other</Col>
        </Row>

        {myBlogs.map((e, i) => (
          <RowData setDescBlog={setDescBlog} data={e} key={i} />
        ))}
      </div>
    </>
  );
}
