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
import loadable from '@loadable/component'
import Theme from '../Components/theme'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Menu = loadable(() => import('../Components/Menu/Menu'))
function MyApp({ Component, pageProps }) {
  return( 
  <>
  <ThemeProvider theme={Theme}>
      <Menu/>
      <Component {...pageProps} />
    </ThemeProvider>

  </>
    )
}

export default MyApp
