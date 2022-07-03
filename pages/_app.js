import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Components/Layout";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../Components/adminLayout";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import {store} from '../store/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from "../Components/Navbar";
import BlogerLayout from '../Components/blogerLayout'
// import CloudinaryContext from 'cloudinary-react'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const conditionAdmin = router.asPath.toLowerCase().includes("/admin");
  const conditionBloger = router.asPath.toLowerCase().includes("/bloger");
  console.log(conditionBloger)
  return (
  
    <Provider store={store}>
      <div>
        <ToastContainer />
        <div className="position-fixed" style={{zIndex:500,width:"100vw",top:"0px"}}>
        <NavbarComponent/>
        </div>
        {conditionAdmin ? (<AdminLayout><Component {...pageProps} /></AdminLayout>) : conditionBloger?(<BlogerLayout><Component {...pageProps} /></BlogerLayout>):(<Layout><Component {...pageProps} /></Layout>)}
      </div>
    </Provider>
    // </CloudinaryContext>
  );
}

export default MyApp;
