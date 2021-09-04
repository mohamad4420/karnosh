import {  useState } from 'react';
import Grow from '@material-ui/core/Grow';
import loadable from '@loadable/component'

const Swiper = loadable(() => import('react-id-swiper'))
const AppsIcon = loadable(() => import('@material-ui/icons/Apps'))
const ItemSlider = loadable(() => import('./ItemSlider'))

 function  Slider(props) {
   
   let Ns ;
   const [data,setData]=useState(props.get)
   const [fack,setFack]=useState([1,2,3,5,4,8,4,5,6])

  const params = {
    freeMode: true,
    
    speed:600,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    
    breakpoints: {
      1024: {
        slidesPerView: 8.2,
        slidesPerGroup:5,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 5.2,
        slidesPerGroup:5.2,
        spaceBetween: 3
      },
      500: {
        slidesPerView: 3.5,
        slidesPerGroup:3.5,
        spaceBetween: 2,
        speed:500,
      },
      0: {
        slidesPerView: 3.5,
        slidesPerGroup:3.5,
        spaceBetween: 2,
        speed:500,
      }
    },
    rtl: true

  }


    return(
            <>
           <div className="MainSlideeer" >
            <div className="nameSliderr">
           
                <a>
              <span>{props.name}</span>
              </a>
        
            </div>
          

              <AppsIcon  style={{color:'#a39999',margin:3,cursor:"pointer"}}/>
 
            <Swiper  {...params} >
              {
              data.map(function(filme,i){

              return(
                <Grow key={Math.random() * 1000000000}
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {... { timeout: 500+100*i }}
              >
               <div key={i+filme.name} className="ItemSwiper"><ItemSlider  data={filme} /></div> 
              </Grow>
              )
              })
              }
              </Swiper>
              </div>
            </>
          )
    
    }
    

export default  Slider;