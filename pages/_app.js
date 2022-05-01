
import Head from 'next/head'

import Menu from '../Components/Menu/Index'
import Footer from '../Components/Footer/Index'
import '../styles/globals.scss'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  
  return( 
  <>


   <Head>
  <meta charset="utf-8" />
  <title> Karnosh</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <link rel="stylesheet" href="/css/bootstrap.min.css" />

<link rel="stylesheet" href="/css/style.css" />

<link rel="stylesheet" href="/css/responsive.css" />
   </Head>
      
      <Menu/>

      <Component {...pageProps} />
     
</>
    )
}

export default MyApp
