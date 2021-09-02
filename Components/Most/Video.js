import { useEffect, useState } from "react"

export default function Video(){
let [mobile,setMobile]=useState(undefined);


 useEffect(()=>{
    if(window.innerWidth<500){
      setMobile(true)
    }
      else{
        setMobile(false)
    }
    window.addEventListener('resize',()=>{
        if(window.innerWidth<500){
            setMobile(true)
        }
          else{
            setMobile(false)
        }          
    })


    

 },[])
    return(
        <>
        
        
        </>
    )
}