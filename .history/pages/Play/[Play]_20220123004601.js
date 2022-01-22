import loadable from '@loadable/component'
import Button from '@mui/material/Button';
import axios from 'axios'

import React, { useEffect, useState } from 'react'
export default function Play(){
    const [url,setUrl]=useState("https://www.ok.ru/videoembed/2594698168982?Key=vTz9FpPiG2kwcVaZUiXnYg&Expires=1642816929")
    useEffect(()=>{
    
    axios.post(process.env.url+'/DataVideo/Home',{})
    .then((res)=>{




    })
    .catch((err)=>{

    })
    },[])
    return (
        <>
        <div className="MainPlay">
        <h1 className="playName">{decodeURI(Router.asPath)}</h1>
        <iframe id="playIfram" src={url}></iframe>
        <div className="serverRight">
        <Button variant="contained" color='secondary'>Ok</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
        <Button variant="outlined" color='secondary'> Outlined</Button>


        </div>
        <div className="serverLeft">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        </div>
        </div>
        </>
    )
}