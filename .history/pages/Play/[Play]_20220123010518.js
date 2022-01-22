import loadable from '@loadable/component'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
export default function Play(){
    const router = useRouter()
    const [url,setUrl]=useState("https://www.ok.ru/videoembed/2594698168982?Key=vTz9FpPiG2kwcVaZUiXnYg&Expires=1642816929")
    const [servers,setServers]=useState([])
    useEffect(()=>{
    axios.post(process.env.url+'/DataVideo/searchPlay',{"name":router.asPath.replace('/Play/','')})
    .then((res)=>{
     console.log(res.data[0].servers)
      setUrl(res.data[0].servers[1])
      let server=[]
      for(let i=1;i<res.data[0].servers.length;i++){
       server[i]= res.data[0].servers[i]
      }
      setServers(server)
    })
    .catch((err)=>{
     console.log(err)
    })
    },[])
    return (
        <>
        <div className="MainPlay">
        <h1 className="playName">{decodeURI(router.asPath.replace('/Play/',''))}</h1>
        <iframe id="playIfram" src={url}></iframe>
        <div className="serverRight">
            {
                servers.map((data,i)=>{
                    if(i%2==0)
                    return(
                        <Button variant="outlined" color='secondary'>{data.replace('https://','').replace('https://www.','').split('/')[0]}</Button>
                    )
                })
            }
           </div>
        <div className="serverLeft">
        {
                servers.map((data,i)=>{
                    if(i%2!=0)
                    return(
                        <Button variant="outlined" color='primary'>{data}</Button>
                    )
                })
            }
        </div>

        </div>
        </>
    )
}