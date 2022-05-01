import More from '../../Components/more/index'
const  index = ({data}) => {
    return ( 
    <>
    <More data={data}/>
    </>
     );
}
 
export async function getStaticProps(ctx) {
     // skip
     //limit
     //genres
     //type
    const res = await fetch(`${process.env.url}/DataVideo/select`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
         type:ctx.params.id,
         skip:0,
         limit:20
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

    const data =[
      {
        id:"movie_wth"
      },
      {
        id:"movie_mt"
      },
      {
        id:"movie_md"
      },
      {
        id:"movie_ar"
      },
      {
        id:"movie_tr"
      }, 
      {
        id:"movie_hn"
      },
    ]
    // Get the paths we want to pre-render based on data
    const paths = data.map((post) => ({
      params: post,
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: false }
  }


export default index;