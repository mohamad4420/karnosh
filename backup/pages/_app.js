import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../styles/menu.scss'
import '../styles/slider.scss'
import '../styles/search.scss'
import '../styles/more.scss'
import '../styles/play.scss'
import '../styles/menuMobile.scss'
import '../styles/falm.scss'
import '../styles/footer.scss'
import '../styles/test.scss'
import '../styles/p404.scss'
import '../styles/Comment.scss'
import '../styles/sherd.scss'
import Head from 'next/head';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mobile from '../redux/mobile'
function MyApp({ Component, pageProps }) {
  const store =createStore(mobile)
  return(
    <>
    <Head>
    <meta name="propeller" content="1beff06039c27419dd05e836498e0b6d"/>
    <meta name="google-site-verification" content="UpDyinpGYFZat5h_qNqR7ahHn_0sjuee1eWwM2Vn2ik" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <link rel="shortcut icon" href="/icon/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href='/icon/favicon.png' type="image/png"></link>
    <meta name="theme-color" content="#720101"/>
  </Head>
  <Provider store={store}>
     <Component {...pageProps} />
   </Provider>
     </>
     )
}

export default MyApp
