import React from 'react'
import  SeriesDetials  from '../Components/Episodes/Details/Details'
import Home from '../Components/Home/Index'

const Index = ({posts}) => {
  return (  
      <>
    <Home data={posts}/>
   
     </> 
     );
}
 
export default Index;

export async function getStaticProps(){
  const res = await fetch(`${process.env.url}/DataVideo/Home`);
  const posts = await res.json()
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}



