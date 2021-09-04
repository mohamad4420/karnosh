import React, { useEffect,useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import loadable from '@loadable/component'

const InfiniteScroll = loadable(() => import('react-infinite-scroll-component'))
const CircularProgress = loadable(() => import('@material-ui/core/CircularProgress'))
const ItemSlider = loadable(() => import('../../Components/slider/ItemSlider'))

export default function More({ data }) {
  const router = useRouter()
  const [items,setItems]=useState(data)
  const [skip,setSkip]=useState(44)
  const [hasmore,setHasmore]=useState(true)
  const [changeServer,setChangeServer]=useState(false)
// chik if url change 
  useEffect(async ()=>{
    setSkip(44)
    if(changeServer){
      let da = await axios.post('http://karnoshapi.herokuapp.com/dataVideo/KarnoshApiMore',
      {
       Type:router.query.tp,
       skip:0,
       limit:44,
       Genres:router.query.gen
      });
      setItems(da.data)
     
    }else{
      setChangeServer(true)
    }
  },[router.asPath])


//fitch my frind
 const  fetchMoreData = async()=>  {
   if(router.query.gen!="جميع الانميات"){
  let da = await axios.post('http://karnoshapi.herokuapp.com/dataVideo/KarnoshApiMore',
  {
   Type:router.query.tp,
   skip:skip,
   limit:skip*2,
   Genres:router.query.gen
  });
  setSkip(skip*2)
  if(da.data.length==0){
    setHasmore(false)
  }
  setItems(items.concat(da.data))
}else{
  let da = await axios.post('http://karnoshapi.herokuapp.com/dataVideo/KarnoshApiMore',
  {
   Type:router.query.tp,
   skip:skip,
   limit:skip*2
  });
  setSkip(skip*2)
  if(da.data.length==0){
    setHasmore(false)
  }

  setItems(items.concat(da.data))




}
  }
  //return heare
  return(
    <>
      
       <div className="MainMore" key={router.query.gen}>
         <h1 className="nameofMore">{router.query.gen}</h1>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasmore}
          loader={<div className="loadingMore"><CircularProgress/></div>}
        >
          {items.map((data, index) => (
            <div key={Math.random() * 1000000000}>
            <div className="itemMore" key={Math.random() * 1000000000}>
              <ItemSlider key={Math.random() * 1000000000} data={data}/>
            </div>
           
           </div>
          ))}
        </InfiniteScroll>
        </div>

    </>
  )

}
// server side render to return some elament for seo
More.getInitialProps= async (context) =>   {
  console.log(context.query.gen)
if(context.query.get!="جميع الانميات"){
   let da = await axios.post('http://karnoshapi.herokuapp.com/dataVideo/KarnoshApiMore',
   {
    Type:context.query.tp,
    skip:0,
    limit:44,
    Genres:context.query.gen
   });
  return{data:da.data,Genres:context.query.gen}
  }else{
    let da = await axios.post('http://karnoshapi.herokuapp.com/dataVideo/KarnoshApiMore',
    {
     Type:context.query.tp,
     skip:0,
     limit:44,
    });
   return{data:da.data,Genres:context.query.gen}
  }
 }
