import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layout'
import { React, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import AdminLayout from '../Components/adminLayout'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const conditionAdmin = router.asPath.toLowerCase().includes("/admin");
  return (
    <div>
      {
        conditionAdmin ? <AdminLayout><Component {...pageProps} /></AdminLayout> : <Layout><Component {...pageProps} /></Layout>
      }
    </div>
  )
}

export default MyApp
