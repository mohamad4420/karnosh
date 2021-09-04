import React, { useEffect, useState }  from 'react'
import Head from "next/head"
import axios from 'axios'
import loadable from '@loadable/component'

const Taps = loadable(() => import('../../Components/Watch/Taps'))
const Most = loadable(() => import('../../Components/Most/Most'))

function Movie({ SSR }) {
    return(
        <>
 <Head>

<meta httpEquiv="x-ua-compatible" content="text/html" charSet="utf-8"/>
<meta name="language" content="ar"/>
<title>  مترجم اون لاين {SSR.name} </title>
<meta name="description" content={"  مترجم | كرنوش ,"+SSR.Description+SSR.name +"مشاهده "}/>
<meta name="keywords" content={"كرنوش, Karnosh,    ,كرنوش افلام,,افلام,فيلم,مسلسلات,مسلسل,جديد,افلام,مسلسلات اون لاين,افلام , series , مسلسلات , مشاهدة , فيلم , مباشر , اون لاين , مسلسل , حلقة  , اجنبي , عربي , تحميل , انمي , مشاهدة فيلم ,Online  ,Movies,anime ,watch,انمي , one piece  , boruto ,boruto مترجم , one piece مترجم ,"}/>
<meta property="og:title"       content={ "مترجم اون لاين " +SSR.name} /> 
<meta property="og:image"       content={SSR.poster} /> 
<meta property="og:description" content={"  مترجم | كرنوش ,"+SSR.Description+SSR.name +"مشاهده "}/>
<meta property="og:image:width" content="400"/>
<meta property="og:image:height" content="400"/>
<meta property="og:site_name" content="karnosh | كرنوش"/>
<meta property="og:locale" content="ar_AR" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content={ "مترجم اون لاين " +SSR.name}/>
<meta name="twitter:description" content={"  مترجم | كرنوش ,"+SSR.Description+SSR.name +"مشاهده "}/>
<meta name="twitter:image" content={SSR.poster} />
<meta httpEquiv="Content-Language" content="ar-AR"/>
<meta httpEquiv="Cache-Control" content="no-cache"/>
<meta httpEquiv="Pragma" content="no-cache"/>
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
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
</Head>
   
        <Most
        key={SSR.name}
        data={SSR}
        />
        <Taps/>
    
        </>
    )
}


Movie.getInitialProps= async (context) =>   {
 try{
  let da = await axios.post('http://karnoshapi.herokuapp.com/DataVideo/search',{name:context.query.name});
  const SSR =  JSON.parse(JSON.stringify(da.data[0]));
 return{SSR:SSR}
 }catch(err){
  return {SSR: "null" } 
}
}

 export default  Movie;
 