import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layout'
import { React, useEffect, useState } from 'react'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
