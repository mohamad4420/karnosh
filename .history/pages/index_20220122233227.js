import React from 'react'
import axios from 'axios'
import loadable from '@loadable/component'

const Menu = loadable(() => import('../Components/Menu/Menu'))
const Slider = loadable(() => import('../Components/slider/slider'))
const Most = loadable(() => import('../Components/Most/Most'))





function Home(
  {
   data
  }) {

  return (
   <>
  

       <Menu/>
     <Most
     data={ data.Main[0]}
      key="home"
      />
     <div className="firstSlider" key="homeT">
      <Slider
       name="احدث الافلام المضافه"
       get={ data.Main}
       more="MovieUbdate"
       key="MovieUbdateMain"
      />

      <Slider
       name="احدث الافلام المضافه"
       get={ data.Main}
       more="MovieUbdate"
       key="MovieUbdateMain"
      />
          <Slider
       name="احدث الافلام المضافه"
       get={ data.Main}
       more="MovieUbdate"
       key="MovieUbdateMain"
      />
          <Slider
       name="احدث الافلام المضافه"
       get={ data.Main}
       more="MovieUbdate"
       key="MovieUbdateMain"
      />

  </div>


 </> 
   
  )
}
export async function getStaticProps(context){
  let data = await axios.post(process.env.url+'/DataVideo/Home')//http://karnoshapi.herokuapp.com

return{
  props:{
    data:data.data
  },
  revalidate:60
}
}


export default  Home;
