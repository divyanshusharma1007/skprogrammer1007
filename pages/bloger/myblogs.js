import React from "react";
import glassMorphism from "../../helpers/glassMorphism";

aproved: false;
authorName: "fasdkfjhfj ";
blogerid: "62c2af39d4bf4880248296eb";
comments: [];
date: "2022-07-04T09:26:10.041Z";
description: "hjsdhfa jff; faljf haf;";
hashtags: (4)[("fjkhjf jfhs jl j", " l fka", " fafhka", "")];
likes: [];
programmingLanguage: "css";
title: "nonone dear herehrwejk hfja ";
__v: 0;
_id: "62c2b232d4bf48802482974c";

export default function showblogs() {
  return (
    <div style={glassMorphism}>
      <Row>
        <Col>title</Col>
        <Col>Author Name</Col>
        <Col>Programming Language</Col>
        <Col>Blog Id</Col>
        <Col>Date Time</Col>
        <Col>Comments</Col>
        <Col>Likes</Col>
      </Row>
    </div>
  );
}
