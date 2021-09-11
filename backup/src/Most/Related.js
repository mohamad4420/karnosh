import { useEffect, useState } from "react"
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'


export default function Home(props) {
      const [show,setShow]=useState(false)
      const [data,setData]=useState([])

         useEffect(()=>{
             if(window.location.href.search('Watch')!=-1){
            axios.post(process.env.domains+'/api/movie/related',{"Related":props.Related})
            .then((res)=>{
                setData(res.data)
                setShow(true)
             })
            .catch((err)=>{
              console.log(err);
            })
            
        }


      },[])
      let Show;
      if(show && data.length!=0  ){
          Show=
   
             data.map(function(data,i){
               return(
                 <>
                 <Link href={'/Watch/'+encodeURI(data.name.replace(/ /g,'-'))}  key={i}  >
                 <a >
               <div className="prodectMain"  >
                 <div className="spasificationSearch">
                   <div className="nameSearchMovie">{data.name}</div>
                   <div className="discriptionSearchMovie">{data.Description}</div>
                 </div> 
                     
                 <Image src={data.poster.search('amazon')!=-1?data.poster.replace('.jpg',process.env.imgReplacePoster):data.poster}  alt={data.name} objectPosition='center'  objectFit='cover' layout='fill' />
               </div>
            </a>
            </Link>
                 </>
               )
             })


 }else{
  Show=
  <>
{      props.Related.map(function(data,i){
               return(
                 <>
                 <Link href={'/Watch/'+encodeURI(data.replace(/ /g,'-'))}  key={i}  >
                 <a >
               <div className="prodectMain"  >
                 <div className="spasificationSearch">
                   <div className="nameSearchMovie">{data}</div>
                 </div> 
               </div>
            </a>
            </Link>
                 </>
               )
             })
  }
   
  </>
 }
    return(
        <>
    
        {Show}
 
        </>
    )
}