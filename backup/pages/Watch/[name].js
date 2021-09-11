import React, { useEffect, useState }  from 'react'
import Head from "next/head"
import Link from 'next/link'
import axios from 'axios'
import dynamic from 'next/dynamic'

const TrendingUpIcon = dynamic(() => import('@material-ui/icons/TrendingUp'))
const TrendingDownIcon = dynamic(() => import('@material-ui/icons/TrendingDown'))
const TextField = dynamic(() => import('@material-ui/core/TextField'))
const IconButton = dynamic(() => import('@material-ui/core/IconButton'))
const Fotter = dynamic(() => import('../../src/Footer'))
const Related = dynamic(() => import('../../src/Most/Related'))
const Comment = dynamic(() => import('../../src/Comment'))
const Most = dynamic(() => import('../../src/Most/Most'))
const Menu = dynamic(() => import('../../src/menu/menu'))

function Movie({ SSR,KeyW,path }) {
  const [show,setShow]=useState(undefined)
  const[UPDOWN,setUPDOWN]=useState(true);
  const [array,setAray]=useState([])
  useEffect(()=>{
    if(SSR=="null"){
      location.replace('/')
    }
    if(SSR.type==undefined){
   
    }
    else if(SSR.type.search('movie')!=-1){
      setShow(1)
    }
    else if( SSR.type.search('anime')!=-1 ){
      setShow(2)
    }

  },[SSR])
  useEffect(()=>{
    if(SSR.type!=undefined){
    if((SSR.type.search('anime')!=-1 || SSR.type.search('series')!=-1) ){
    var foo = [];
    for (var i = 1; i <= SSR.episodes.length; i++) {
       foo.push(i);
    }
    setAray(foo);
  }
    }
  },[])
let Eps;
let Rel;
let Episodes;
let upDown;



if((SSR.type.search('anime')!=-1 || SSR.type.search('series')!=-1) ){


  function keyPress (event){
    var foo = [];
    for (var i = 1; i <= SSR.episodes.length; i++) {
      var test = i.toString();
      if(test.search(event.target.value)!=-1)
         foo.push(i);
   }
   setAray(foo);
  }
  function up (){
    var foo = [];
    for (var i = 1; i <= SSR.episodes.length; i++) {
       foo.push(i);
    }
    setAray(foo);
    setUPDOWN(true)
  }
  function down (){
    var foo = [];
    for (var i = 1; i <= SSR.episodes.length; i++) {
       foo.push((SSR.episodes.length-i)+1);
    }
    setAray(foo);
    setUPDOWN(false)
  
  }
  if(UPDOWN){
    upDown=
    <>
          <IconButton color="primary"  onClick={down}  aria-label="search" style={{ color:'#ffffff94' }}  >
          <TrendingUpIcon/>
          </IconButton>
    </>
  }else{
    upDown=
    <>
          <IconButton color="primary"  onClick={up}  aria-label="search" style={{ color:'#ffffff94' }}  >
          <TrendingDownIcon/>
          </IconButton>
    </> 
  }


  
  




Eps=
<>
<div  className={show==2?"SersNo active":"SersNo"}  onClick={()=>{setShow(2)}}>({SSR.episodes.length}) الحلقات</div>
</>

if(show==2 ){
Episodes=
<>
<div className="searchSerss">

<TextField InputLabelProps={{style: {color: '#ffffff59'  } }} dir="rtl" id="filled-basic" label="البحث حسب رقم الحلقه" onKeyUp={keyPress} variant="filled" />

 
     
  
  
     
{upDown}


</div>
        {
          
          array.reverse().map((server,i) => (
           <Link href={'/play/'+encodeURI(SSR.name.replace(/ /g,'-'))} key={server}>
           <a  className="spisss">
            الحلقه {server} 
          </a>
          </Link>
        
        ))

        }

</>
}


}
if(show==3){

  Rel=
  <>
  <Comment/>
  </>
}
if(show==1){

  Rel=
  <>

  <Related  key={SSR.name+"Related"} Related={SSR.Related}/>

  </>
}
    return(
        <>
 <Head>

<meta httpEquiv="x-ua-compatible" content="text/html" charSet="utf-8"/>
<meta name="language" content="ar"/>
<title>  مترجم اون لاين {SSR.name} </title>
<meta name="description" content={"  مترجم | كرنوش ,"+SSR.Description+SSR.name +"مشاهده "}/>
<meta name="keywords" content={"كرنوش, Karnosh,    ,كرنوش افلام,,افلام,فيلم,مسلسلات,مسلسل,جديد,افلام,مسلسلات اون لاين,افلام , series , مسلسلات , مشاهدة , فيلم , مباشر , اون لاين , مسلسل , حلقة  , اجنبي , عربي , تحميل , انمي , مشاهدة فيلم ,Online  ,Movies,anime ,watch,انمي , one piece  , boruto ,boruto مترجم , one piece مترجم ,"+KeyW}/>
<meta property="og:url"         content={path} /> 
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
        <Menu/>
        <Most
        key={SSR.name}
        data={SSR}
        />
        <div className="mainChange">
          {Eps}
   
          <div className={show==1?"SersNo active":"SersNo"}   onClick={()=>{setShow(1)}}>ذات صله</div>
          <div className={show==3?"SersNo active":"SersNo"}   onClick={()=>{setShow(3)}}>التعليقات</div>
        </div>

      {Episodes}
       {Rel}
       <div className="footeFalm">
       <Fotter/>
       </div>
    
        </>
    )
}


Movie.getInitialProps= async (context) =>   {
 const name = context.query.name
 try{
  let da = await axios.post(process.env.domains+'/api/movie/searchAdd',{q:context.query.name});
  const SSR =  JSON.parse(JSON.stringify(da.data[0]));

let KeyW=""
try{
  if(SSR.episodes.length!=0){
    for(let i =0;i<SSR.episodes.length;i++){
      let w= "مشاهده "+SSR.name +" الحلقه "+(i+1) +" مترجمه"
      let z ="مشاهده "+SSR.name +" الحلقه "+(i+1) 
      KeyW=KeyW+","+w
      KeyW=KeyW+","+z
    }
  }
}catch(err){}
  return {SSR: SSR ,KeyW:KeyW,path:process.env.domains+SSR.name} 

 }
 catch(err){
  return {SSR: "null" } 
}
}

 export default  Movie;
 