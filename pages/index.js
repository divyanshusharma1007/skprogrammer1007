// write the custom responsive ness from 473
import Head from 'next/head'
import Image from 'next/image'
import Right from '../Components/Right'
import Left from '../Components/Left'
export default function Home() {
  return (
    <div >
      <Head>
        <title>sk-programmer</title>
        <meta name="description" content="sk programmer is the platform , helps the software enginer to learn how to develope software , it also provide the platform for the creators who wants to publish there aritcles on the technical for free ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="d-flex justify-content-between sx-column">
        <Left />
        <Right />
      </div>
    </div>
  )
}
