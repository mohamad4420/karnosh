import React, { useEffect,useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head"
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Shared = dynamic(() => import('../../src/shared'))
const Menu = dynamic(() => import('../../src/menu/menu'))
const Foter = dynamic(() => import('../../src/Footer'))

function whatMore(git){
  if(git=="MovieUbdate"){
    return "احدث الافلام المضافه"
  }else if(git=="Most-A"){
    return "الافلام الاكثر مشاهده"
  }
  else if(git=="MostAnimeMain"){
    return "الانمي الاكثر مشاهده"
  }
  else if(git=="Movie-Ajnaby"){
    return "افلام اجنبيه"
  }
  else if(git=="Movie-Arab"){
    return "افلام عربيه"
  }
  else if(git=="Movie-Turky"){
    return "افلام تركيه"
  }
  else if(git=="Movie-Hindi"){
    return "افلام هنديه"
  }
  else if(git=="Movie-Wathaiqe"){
    return "افلام وثائقيه"
  }
  else if(git=="AnimeUbdate"){
    return "اخر الحلقات المعروضه"
  }
  else if(git=="MostAnime"){
    return "الانمي الاكثر مشاهده"
  }
  else if(git=="انميات الاكشن"){
    return "ActionAnime"
  }
  else if(git=="Supernatural"){
    return "انميات خارقه للطبيعه"
  }
  else if(git=="Top-Anime"){
    return "الانمي الاكثر تقييما"
  }
  else if(git=="انميات الشونين"){
    return "Shounen"
  }
  else if(git=="Magic"){
    return "انميات السحر"
  }
  else{
    return "المزيد "
  }
}


export default function More({ Data,Skip,Page,Name }) {
  const router = useRouter()
  const [items,setItems]=useState(Data)
  const[limit,setLimit]=useState(44);
  const [skip,setSkip]=useState(Skip)
  const [page,setPage]=useState(Page)
  const [hasMore,setHasMore]=useState(true)
  const [nameMore,setNameMore]=useState(Name)
  function fetchMoreData() {
    var get=router.query.get
      router.push({
        pathname: '/More/'+get,
        query: { page: page+1 }
      }, 
      undefined, { shallow: true }
      )
      setPage(page+1)
  
    axios 
    .post (process.env.domains+'/api/movie/get'+get,{"limit":limit,"skip":skip + limit})
    .then(res => {
          setTimeout(() => {
            setItems(items.concat(res.data))

            if(res.data.length< limit){
              setHasMore(false)
            }
          }, 1000);
          setSkip(skip+limit)
    });
  };


  //component did amount
useEffect(()=>{
setNameMore(whatMore(router.query.get))
},[])

  let fotter;
  if(!hasMore){
    fotter=
    <>
    <Foter/>
    </>
  }
  return(
    <>
    <Head>
        
        <title>{page==1?nameMore+" صفحه حسب الاختيار ":nameMore+" الصفحه "+page+" صفحه حسب الاختيار "  }</title>
        <meta httpEquiv="x-ua-compatible" content="text/html" charSet="utf-8"/>
        <meta name="language" content="ar"/>
        <meta name="description" content={"ويمكنك تصفح الموقع واختيار تفضيلات اخرى "+nameMore+" جميع الافلام والمسلسلات صفحه منسقه لتفصيل الافلام او المسلسلات او الانمي حسب العنوان الخاص والتفضيلات الموجوده وهذه الصفحه صفحه "}/>
        <meta name="keywords" content={"كرنوش, Karnosh, game of thrones,vikings,Braking Bad,lost,دكستر, مسلسل لعبة العروش ,كرنوش افلام,aflammmovie,افلام,فيلم,مسلسلات,مسلسل,جديد,افلام,مسلسلات اون لاين,افلام , series , مسلسلات , مشاهدة , فيلم , مباشر , اون لاين , مسلسل , حلقة  , اجنبي , عربي , تحميل , مشاهدة فيلم ,Online  ,Movies,anime ,watch,انمي , one piece  , boruto ,boruto مترجم , one piece مترجم,"+nameMore}/>
        <meta property="og:url"         content={"https://karnosh.ml/More/"+nameMore} /> 
        <meta property="og:title"       content={page==1?nameMore:nameMore+" الصفحه "+page } /> 
        <meta property="og:image"       content="/icon/favicon.png" /> 
        <meta property="og:description" content={"ويمكنك تصفح الموقع واختيار تفضيلات اخرى "+nameMore+" جميع الافلام والمسلسلات صفحه منسقه لتفصيل الافلام او المسلسلات او الانمي حسب العنوان الخاص والتفضيلات الموجوده وهذه الصفحه صفحه "}/>
        <meta property="og:image:width" content="400"/>
        <meta property="og:image:height" content="400"/>
        <meta property="og:site_name" content="karnosh | كرنوش"/>
        <meta property="og:locale" content="ar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={page==1?nameMore:nameMore+" الصفحه "+page }/>
        <meta name="twitter:description" content={"ويمكنك تصفح الموقع واختيار تفضيلات اخرى "+nameMore+" جميع الافلام والمسلسلات صفحه منسقه لتفصيل الافلام او المسلسلات او الانمي حسب العنوان الخاص والتفضيلات الموجوده وهذه الصفحه صفحه "}/>
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
        <meta name="copyright" content="كرنوش"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
    
          </Head>
 <div>
             <Menu/>
<div className="sharedIcon">

<Shared
 url={router.asPath}
 title={nameMore}

/>

</div>
            <div className="mainMore">
            <div className="spasificationMore">

         <span>
           <h1>
        {nameMore}
          </h1>
        </span>
        <span style={{color:"#838080"}}>
        <h2>
        &bull;
        </h2>
        </span>
        <span>
        <h2>
          الصفحه 
          :
          <>
          {page}
          </>
          </h2>
        </span>

      </div>

      <div className="MainItemsMore">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4><div className="endInfinityScroll"> <Image className="imgscroll"   src='/icon/favicon.png' height={50} width={50}/></div>
          </h4>}
          endMessage={
           <div></div>
              }
        >

          {items.map((data, index) => (
                <div className="prodectMain" key={data.name+index}>
                <div className="spasificationSearch">
                <div className="nameSearchMovie">{data.name}</div>
                <div className="discriptionSearchMovie">{data.Description+"|"+nameMore}</div>
                </div>    
                <Link href={'/Watch/'+encodeURI(data.name.replace(/ /g,'-'))} >
                <a> 
                <Image src={data.poster.search('amazon')!=-1?data.poster.replace('.jpg',process.env.imgReplacePoster):data.poster} objectPosition='center' objectFit='cover' alt={data.name} layout='fill'  />
                </a>
                </Link>
                </div>
          
         ))}
        </InfiniteScroll>
      </div>
      {fotter}
      </div>
      </div>

      <div style={{display:"none"}}>
      <p>{page==1?nameMore+" صفحه حسب الاختيار ":nameMore+" الصفحه "+page+" صفحه حسب الاختيار "  }</p>
    </div>
    </>
  )

}
More.getInitialProps= async (context) =>   {
  const get = context.query.get
let name = whatMore(get)
  let skip=context.query.page
let p=1
 if(skip==undefined)
 skip=0
 else{
p=parseInt(skip)+1 
skip=skip*44

}

  let res=await axios.post (process.env.domains+'/api/movie/get'+get,{"limit":44,"skip":skip})
    return {Data: res.data,Skip:skip,Page:p,Name:name} 



 }
