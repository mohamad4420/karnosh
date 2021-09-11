import Link from 'next/link'
import axios from 'axios'
import {  useEffect, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const IconButton = dynamic(() => import('@material-ui/core/IconButton'))
const SettingsIcon = dynamic(() => import('@material-ui/icons/Settings'))
const ArrowBackIcon = dynamic(() => import('@material-ui/icons/ArrowBack'))
const SkipPreviousIcon = dynamic(() => import('@material-ui/icons/SkipPrevious'))
const SkipNextIcon = dynamic(() => import('@material-ui/icons/SkipPrevious'))

 function Play({ Data }) {
    let [Sit,setSit]=useState(true)
    let [show,setShow]=useState(false)
    let [servers,setServers]=useState(Data.SSR)
    let [now,setNow]=useState('')
    let sit;
    let Show ;
    let back;
    let next;
    let ifram;
    
  if(now.search('mega')!=-1 || now.search('ok')!=-1 || now.search('dailymotion')!=-1 || now.search('sbembed')!=-1 || now.search('sbvideo')!=-1 || now.search('ninjastream')!=-1){
    ifram=
    <>
      <iframe key={now} className="ifrnb" id="iframeID"      src={now.search(',')!=-1?now.split(',')[0]:now} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> 
    </>
  }else{
    ifram=
    <>
      <iframe key={now} className="ifrnb"  id="iframeID"     src={now.search(',')!=-1?now.split(',')[0]:now} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> 
    </>
  }
  if(show){
    Show=
    <>
    <div className="srv" key={Data.Myepisodes}>
    {

         servers.map(function(server,i){
          var up = "";
          try{
           up=server.split(',')[1].split("#")[0]; 
          }
          catch(err){

          }
                 return(
            <div className="ItemServer" key={server}  onClick={()=>{setNow(servers[i]);setShow(false)}} >{server.replace('www.','').split('//')[1].split('.')[0]} {up}</div>
           )
         })
        
            
       }
    </div>
    </>
  }

  if(Sit && Data.SSR.length>1){
    sit=<>
            <div className="listServerMain " onClick={()=>{if(show)setShow(false);else{setShow(true)}}} >
          
          <SettingsIcon className={show ? 'spiner':''} style={{fontSize:"30px"}}/>
          {Show}
         
          </div>
    </>
  }
    useEffect(()=>{
      setServers(Data.SSR)
      setNow(Data.SSR[0])
 
//sandbox="allow-scripts"

    },[Data.Myepisodes])
    
    useEffect(()=>{

  
      
      screen.orientation.addEventListener('change', function() {

        if(screen.orientation.type=="landscape-primary"){
         setSit(false)

        }else{
           setSit(true)
        }
            
        });
    },[])


    if(Data.episodes!=0 && Data.Myepisodes < Data.episodes){
      next=
      <>
       <Link href={"/play/"+ encodeURI(Data.name.replace(/ /g,'-'))+"?no="+Data.Next}>
         <a>
       <div className="nextSeress">
         <IconButton style={{color:'#fff'}} >
             next
            <SkipNextIcon style={{fontSize:"30px"}}/>
            </IconButton>
         </div>
         </a>
         </Link>
      </>

    }


    if(Data.episodes!=0 && Data.Myepisodes != 1){
      back=
      <> 
      <Link href={"/play/"+encodeURI(Data.name.replace(/ /g,'-'))+"?no="+Data.Back}>
        <a>
        <div className="backSeress"> 
         <IconButton style={{color:'#fff'}} >
         <SkipPreviousIcon style={{fontSize:"30px"}}/>
          back
         </IconButton>
         </div>
         </a>
         </Link>
      </>

    }


    return(
        <>
        <Head>
   
        </Head>
        {sit}
     
        {back}
        {next}
        
        <Link href={"/Watch/"+encodeURI(Data.name.replace(/ /g,'-')) }>
            <a>
            <div className="back"><ArrowBackIcon style={{fontSize:"40px"}}/></div>
            </a>
        </Link>
   
        <div style={{position:'fixed',left:"45vw",top:"45vh",zIndex:"-5"}}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="alertLoadingPlays">يتم تحميل الملف اذا تاخر او ظهرت اشاره خطا يرجى تغيير السيرفر من الاعلي</div>

       {
       ifram
       }
 
        </>
    )
}


Play.getInitialProps= async (context) =>   {
  const name = context.query.name
  let da = await axios.post(process.env.domains+'/api/movie/searchAdd',{q:context.query.name});
let movies= da.data;

 if(context.query.no!=undefined && movies[0].episodes.length!=0){
  var SSR =  JSON.parse(JSON.stringify(movies[0].episodes[(context.query.no - 1)]));
  var Ser =[];
  try{
  if(SSR.search('dailymotion')!=-1){
    Ser.push(SSR)
  }else{
    for(var i =0 ;i<SSR.length;i++){
      Ser.push(SSR[i])
  }
  }}catch(err){
    for(var i =0 ;i<SSR.length;i++){
      Ser.push(SSR[i])
  }
  }

  SSR=Ser;
  var episodes = movies[0].episodes.length;
  var Myepisodes=context.query.no;
  var Next = parseInt(Myepisodes)+1;
  var Back= parseInt(Myepisodes)-1;
  let Data = {
    "SSR":SSR,
    "name":name,
    "episodes":episodes,
    "Myepisodes":Myepisodes,
    "Next":Next,
    "Back":Back
  }

  return  { Data} 
 }
var episodes = 0;
var Myepisodes=0;
var Next = 0;
var Back= 0;
var SSR =  JSON.parse(JSON.stringify(movies[0].server));
let Data = {
  "SSR":SSR,
  "name":name,
  "episodes":episodes,
  "Myepisodes":Myepisodes,
  "Next":Next,
  "Back":Back
}

  return { Data} 
}
export default  Play;