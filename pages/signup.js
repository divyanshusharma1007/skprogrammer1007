import UserSignUp from "../Components/loginSignup/UserSignUp";
import {Container}from 'react-bootstrap'
import {useState} from 'react'
import CreatorSignUp from '../Components/loginSignup/CreatorSignUp'
function FormDisabledExample() {


const [authMember,setAuthMember]=useState("U");

  return (
    <>
      <Container
        className="bg-white text-secondary position-relative p-2 my-2 border border-secondary border-3 "
        style={{ width: "40%", zIndex: 100 }}
      >

        <h1 className="mx-3 text-center">Sign up</h1>

          {/* add cursor pointer here */}
        <div className="d-flex px-2 ">
          <h3 className="text-left mt-3 mx-2 py-1 px-5 border-secondary border-2  shadow-lg " onClick={()=>{setAuthMember('U')} } style={authMember==='U'?{borderRadius:"5px",background:"gray",color:"white"}:{borderRadius:"5px"}}>
          User
          </h3>
          <h3 className="text-left mt-3 mx-2 py-1 px-5 border-secondary border-2  shadow-lg " onClick={()=>{setAuthMember('C')} } style={authMember==='C'?{borderRadius:"5px",background:"gray",color:"white"}:{borderRadius:"5px"}}>
            Creator
          </h3>
        </div>
     { authMember==='U'?<UserSignUp />:<CreatorSignUp/>}
      </Container>
    </>
  );
}

export default FormDisabledExample;
