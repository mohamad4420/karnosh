import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import axios from 'axios'
const Menu = dynamic(() => import('../src/menu/menu'))
const Slider = dynamic(() => import('../src/slider/slider'))
const Footer = dynamic(() => import('../src/Footer'))
const Most = dynamic(() => import('../src/Most/Most'))





function Home(
  {
   data
  }) {

  return (
   <>
    <Head>
    <meta httpEquiv="x-ua-compatible" content="text/html" charSet="utf-8"/>
    <meta name="language" content="ar"/>
    <title>كرنوش  | افلام  و مسلسلات وانمي  مترجمة اون لاين </title>
    <meta name="description" content="كرنوش | karnosh - مشاهدة افلام اون لاين و مسلسلات و انمي الحلقات الأسبوعية مترجمة مشاهدة اون لاين مباشرة افلام اجنبي مترجمة و افلام عربي و افلام تركية و هندية ."/>
    <meta name="keywords" content={ data.keywords+"كرنوش, Karnosh, game of thrones,vikings,Braking Bad,lost,دكستر, مسلسل لعبة العروش ,كرنوش افلام,aflammmovie,افلام,فيلم,مسلسلات,مسلسل,جديد,افلام,مسلسلات اون لاين,افلام , series , مسلسلات , مشاهدة , فيلم , مباشر , اون لاين , مسلسل , حلقة  , اجنبي , عربي , تحميل , مشاهدة فيلم ,Online  ,Movies,anime ,watch,انمي"}/>
    <meta property="og:url"         content="https://karnosh.ml/" /> 
    <meta property="og:title"       content=" كرنوش  | افلام  و مسلسلات وانمي  مترجمة اون لاين " /> 
    <meta property="og:image"       content="/icon/favicon.png" /> 
    <meta property="og:description" content="كرنوش | karnosh - مشاهدة افلام اون لاين و مسلسلات و انمي الحلقات الأسبوعية مترجمة مشاهدة اون لاين مباشرة افلام اجنبي مترجمة و افلام عربي و افلام تركية و هندية ."/>
    <meta property="og:image:width" content="400"/>
    <meta property="og:image:height" content="400"/>
    <meta property="og:site_name" content="افلام اجنبي مترجم | كرنوش"/>
    <meta property="og:locale" content="ar" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="كرنوش  | افلام  و مسلسلات وانمي  مترجمة اون لاين "/>
    <meta name="twitter:description" content="كرنوش | karnosh - مشاهدة افلام اون لاين و مسلسلات و انمي الحلقات الأسبوعية مترجمة مشاهدة اون لاين مباشرة افلام اجنبي مترجمة و افلام عربي و افلام تركية و هندية ."/>
    <meta name="twitter:image" content="/icon/favicon.png" />
    <meta httpEquiv="Content-Language" content="ar"/>
    <meta httpEquiv="cache-control" content="max-age=0" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta httpEquiv="expires" content="0" />
    <meta httpEquiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta httpEquiv="pragma" content="no-cache" />
    <meta name="Expires" content="0"/>
    <meta name="rating" content="General"/>
    <meta name="robots" content="index, follow"/>
    <meta name="robots" content="NOODP,NOYDIR"/>
    <meta name="revisit-after" content="1 hour"/>
    <meta name="distribution" content="Global"/>
    <meta name="classification" content="All"/>
    <meta name="googlebot" content="archive"/>
    <meta name="resource-type" content="document"/>
    <meta name="copyright" content="كرنوش  | افلام  و مسلسلات وانمي  مترجمة اون لاين"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
    </Head>
      <Menu/>
       
     <Most
     data={ data.Main[0]}
      key="home"
      />
كرنوش  | افلام  و مسلسلات وانمي  مترجمة اون لاين
     <div className="firstSlider" key="homeT">
      <Slider
       name="احدث الافلام المضافه"
       get={ data.Main}
       more="MovieUbdate"
       key="MovieUbdateMain"
      />
  </div>
     <Footer/>

 </> 
   
  )
}
export async function getStaticProps(context){
  let data = await axios.post('http://localhost:5000/DataVideo/Home')

return{
  props:{
    data:data.data
  },
  revalidate:60
}
}


export default  Home;

