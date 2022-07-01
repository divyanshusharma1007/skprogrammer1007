import React ,{useState}from "react";
import { Container } from "react-bootstrap";
import LoginPage from '../Components/loginSignup/Login'
export default function login() {
    
const [authMember,setAuthMember]=useState("U");

return (
  <>
    <Container
      className="bg-white text-secondary position-relative p-2 my-2 border border-secondary border-3 "
      style={{ width: "40%", zIndex: 100,background:"black" }}
    >
      <LoginPage authMember={authMember} setAuthMember={setAuthMember}/>
    </Container>
  </>
);
}
