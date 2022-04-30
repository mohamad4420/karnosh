
import Head from 'next/head'
import Menu from '../Components/Menu/Index'
import Footer from '../Components/Footer/Index'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  
  return( 
  <>
  <div id="gen-loading">
        <div id="gen-loading-center">
          <img src="images/logo-1.png" alt="loading" />
        </div>
      </div>
  <Head>
  <meta charset="utf-8" />
    <title> Karnosh</title>

   <link rel="stylesheet" href="/css/bootstrap.min.css" />

   <link rel="stylesheet" href="/css/style.css" />

   <link rel="stylesheet" href="/css/responsive.css" />

  
  
   </Head>
    <Menu/> 
      


      <Component {...pageProps} />
      <Footer/>


   <script src="/js/jquery-3.6.0.min.js"></script>

   <script src="/js/asyncloader.min.js"></script>

   <script src="/js/bootstrap.min.js"></script>

   <script src="/js/owl.carousel.min.js"></script>

   <script src="/js/jquery.waypoints.min.js"></script>

   <script src="/js/jquery.counterup.min.js"></script>

   <script src="/js/popper.min.js"></script>

   <script src="/js/swiper-bundle.min.js"></script>

   <script src="/js/isotope.pkgd.min.js"></script>

   <script src="/js/jquery.magnific-popup.min.js"></script>

   <script src="/js/slick.min.js"></script>

   <script src="/js/streamlab-core.js"></script>

   <script src="/js/script.js"></script>
  </>
    )
}

export default MyApp
