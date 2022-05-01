import Play from '../../Components/Play/index'
const play = ({data}) => {
    return ( 
    <>
    <Play data={data[0]}/>
    </> 
    );
}
export async function getStaticProps(ctx) {
    // skip
    //limit
    //genres
    //type
   const res = await fetch(`${process.env.url}/DataVideo/findAllData`,{
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: "POST",
     body: JSON.stringify({
        id:ctx.params.id
     })
   })
  
   const data = await res.json()
    console.log(data)
   return {
     props: {
       data,
     },
     // Next.js will attempt to re-generate the page:
     // - When a request comes in
     // - At most once every 10 seconds
     revalidate: 3600, // In seconds
   }
 }
 
 // This function gets called at build time on server-side.
 // It may be called again, on a serverless function, if
 // the path has not been generated.
 export async function getStaticPaths() {

    const res = await fetch(`${process.env.url}/DataVideo/all-id`)
  const data = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = data.map((da) => ({
    params: { id: da._id },
  }))
 
   return { paths, fallback: false }
 }

export default play;