import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import axios from 'axios'
const Menu = dynamic(() => import('../../src/menu/menu'))
const Slider = dynamic(() => import('../../src/slider/slider'))
const Footer = dynamic(() => import('../../src/Footer'))
const Most = dynamic(() => import('../../src/Most/Most'))
function Movie({   
data
}) {



  return (
   <>
        <Head>
        <title> كرنوش افلام مترجمه </title>
    <meta httpEquiv="x-ua-compatible" content="text/html" charSet="utf-8"/>
    <meta name="language" content="ar"/>
    <meta name="description" content="كرنوش | karnosh - مشاهدة افلام اون لاين و مسلسلات و انمي الحلقات الأسبوعية مترجمة مشاهدة اون لاين مباشرة افلام اجنبي مترجمة و افلام عربي و افلام تركية و هندية ."/>
    <meta name="keywords" content={"كرنوش, Karnosh, game of thrones,vikings,Braking Bad,lost,دكستر, مسلسل لعبة العروش ,كرنوش افلام,aflammmovie,افلام,فيلم,مسلسلات,مسلسل,جديد,افلام,مسلسلات اون لاين,افلام , series , مسلسلات , مشاهدة , فيلم , مباشر , اون لاين , مسلسل , حلقة  , اجنبي , عربي , تحميل , مشاهدة فيلم ,Online  ,Movies,anime ,watch,انمي , one piece  , boruto ,boruto مترجم , one piece مترجم"+data.keywords}/>
    <meta property="og:url"         content="https://karnosh.ml/Movie" /> 
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
        data={data.Main[0]}
      />

كرنوش افلام مترجمه
<div className="firstSlider">

      <Slider
       name="افلام اجنبيه"
       get={data.Movie_Ajnaby}
       more="Movie-Ajnaby"
      />   

        <Slider
       name="افلام عربيه"
       get={data.Movie_Arab}
       more="Movie-Arab"
      />  


    <Slider
       name="افلام تركيه"
       get={data.Movie_Turky}
       more="Movie-Turky"
      />  

       <Slider
       name="افلام هنديه"
       get={data.Movie_Hindi}
       more="Movie-Hindi"
      />  

 
      <Slider
       name="افلام وثائقيه"
       get={data.Movie_Wathaiqe}
       more="Movie-Wathaiqe"
      />  


      {
  
}

</div>



      <Footer/>
        









 </> 
   
  )
}
export async function getStaticProps(context){

  let data = await axios.post(process.env.domains+'/api/movie/Movie')
return{
  props:{
    data:data.data
  },
  revalidate:60
}
}




export default  Movie;
